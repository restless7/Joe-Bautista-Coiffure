'use client';

import { useState, useEffect, useActionState, startTransition } from 'react';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { X, Scissors, Calendar, MapPin, Check, ChevronRight, ChevronLeft, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { createBooking } from '@/app/actions/createBooking';
import clsx from 'clsx';

// Schema for client-side validation (matching server)
const bookingSchema = z.object({
    serviceType: z.string().min(1, "Service type is required"),
    appointmentDate: z.string().min(1, "Date is required"),
    appointmentTime: z.string().min(1, "Time is required"),
    clientName: z.string().min(2, "Name is required"),
    clientAddress: z.string().min(5, "Address is required"),
    clientPhone: z.string().min(10, "Phone number must be at least 10 characters"),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const SERVICES = [
    { id: 'cut-blowdry', name: 'Cut & Blow Dry', duration: '1h' },
    { id: 'color-full', name: 'Full Color', duration: '2h' },
    { id: 'balayage', name: 'Balayage', duration: '3h' },
    { id: 'styling', name: 'Event Styling', duration: '1h' },
];

export function BookingWizard({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [step, setStep] = useState(1);
    const [state, formAction] = useActionState(createBooking, {});

    const { register, handleSubmit, watch, setValue, formState: { errors }, trigger } = useForm<BookingFormData>({
        resolver: zodResolver(bookingSchema),
        mode: 'onChange'
    });

    const formData = watch();

    const nextStep = async () => {
        let isValid = false;
        if (step === 1) isValid = await trigger('serviceType');
        if (step === 2) isValid = await trigger(['appointmentDate', 'appointmentTime']);
        if (step === 3) isValid = await trigger(['clientName', 'clientAddress', 'clientPhone']);

        if (isValid) setStep(s => s + 1);
    };

    const prevStep = () => setStep(s => s - 1);

    // Combine date and time for submission
    const onSubmit = (data: BookingFormData) => {
        const dateTime = new Date(`${data.appointmentDate}T${data.appointmentTime}`);
        const payload = new FormData();
        payload.append('serviceType', data.serviceType);
        payload.append('appointmentDate', dateTime.toISOString());
        payload.append('clientName', data.clientName);
        payload.append('clientAddress', data.clientAddress);
        payload.append('clientPhone', data.clientPhone);

        startTransition(() => {
            formAction(payload);
        });
    };

    useEffect(() => {
        // Console log for debugging
        console.log('BookingWizard State Update:', state);
    }, [state]);

    const generateTicket = async () => {
        if (!state.data) return;

        const { jsPDF } = await import('jspdf');
        const doc = new jsPDF();

        // Brand Header (Minimalist & Luxurious)
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.text("JOE BAUTISTA ATELIER", 105, 30, { align: "center" });

        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.text("Refined Hair & Grooming Services", 105, 38, { align: "center" });

        // Divider
        doc.setLineWidth(0.5);
        doc.line(40, 45, 170, 45);

        // Booking Confirmation Title
        doc.setFont("helvetica", "bold");
        doc.setFontSize(16);
        doc.text("BOOKING CONFIRMATION", 105, 60, { align: "center" });

        // Details Grid
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");

        const startY = 80;
        const lineHeight = 12;

        const details = [
            { label: "Service", value: SERVICES.find(s => s.id === state.data?.serviceType)?.name || state.data?.serviceType },
            { label: "Date", value: new Date(state.data?.appointmentDate || "").toLocaleDateString() },
            { label: "Time", value: new Date(state.data?.appointmentDate || "").toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
            { label: "Client", value: state.data?.clientName },
            { label: "Location", value: state.data?.clientAddress },
            { label: "Reference ID", value: state.bookingId }
        ];

        details.forEach((item, index) => {
            doc.setFont("helvetica", "bold");
            doc.text(item.label + ":", 50, startY + (index * lineHeight));
            doc.setFont("helvetica", "normal");
            doc.text(String(item.value), 90, startY + (index * lineHeight));
        });

        // Footer
        doc.setFontSize(10);
        doc.setTextColor(100);
        doc.text("Thank you for choosing precision and elegance.", 105, 250, { align: "center" });
        doc.text("www.joebautista.ch", 105, 255, { align: "center" });

        // Save
        doc.save(`Atelier-Ticket-${state.data.clientName.replace(/\s+/g, '-')}.pdf`);
    };

    // Prepare success view data if available
    const serviceName = state.data ? (SERVICES.find(s => s.id === state.data?.serviceType)?.name || state.data?.serviceType) : '';
    const dateStr = state.data?.appointmentDate ? new Date(state.data.appointmentDate).toLocaleDateString() : '';
    const timeStr = state.data?.appointmentDate ? new Date(state.data.appointmentDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
    const whatsappMessage = state.data ? `*CONFIRMATION REQUEST*\n\nHello, I would like to confirm my appointment at Joe Bautista Atelier.\n\n*Service:* ${serviceName}\n*Date:* ${dateStr}\n*Time:* ${timeStr}\n*Name:* ${state.data?.clientName}\n*Address:* ${state.data?.clientAddress}\n\n*Ref:* ${state.bookingId}\n\nLooking forward to the experience.` : '';

    return (
        <Transition show={isOpen} as="div">
            <Dialog onClose={onClose} className="relative z-50">
                <TransitionChild
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
                </TransitionChild>

                <div className="fixed inset-0 flex items-end md:items-center justify-center p-0 md:p-4">
                    <TransitionChild
                        enter="ease-out duration-300"
                        enterFrom="translate-y-full md:scale-95 md:translate-y-0"
                        enterTo="translate-y-0 md:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="translate-y-0 md:scale-100"
                        leaveTo="translate-y-full md:scale-95 md:translate-y-0"
                    >
                        <DialogPanel className={clsx(
                            "w-full bg-white shadow-2xl overflow-hidden flex flex-col transition-all duration-300",
                            state.success
                                ? "max-w-md rounded-2xl p-8 text-center"
                                : "max-w-2xl rounded-t-3xl md:rounded-2xl max-h-[90vh]"
                        )}>
                            {/* SUCCESS VIEW */}
                            {state.success ? (
                                <div className="space-y-6">
                                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
                                        <Check className="h-8 w-8 text-green-600" />
                                    </div>
                                    <DialogTitle className="text-2xl font-bold text-gray-900">Booking Confirmed!</DialogTitle>
                                    <p className="mt-2 text-gray-600 mb-6">Your appointment request has been received.</p>

                                    <div className="space-y-3">
                                        <button
                                            onClick={generateTicket}
                                            className="w-full bg-white text-black border-2 border-black py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                                        >
                                            Download Ticket (PDF)
                                        </button>

                                        <a
                                            href={`https://wa.me/41794761781?text=${encodeURIComponent(whatsappMessage)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full bg-[#25D366] text-white py-3 rounded-xl font-medium hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2"
                                        >
                                            Confirm on WhatsApp
                                        </a>

                                        <button onClick={onClose} className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors">
                                            Close
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                /* WIZARD VIEW */
                                <>
                                    {/* Header */}
                                    <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
                                        <div>
                                            <h2 className="text-lg font-bold text-gray-900">Book Appointment</h2>
                                            <p className="text-sm text-gray-500">Step {step} of 4</p>
                                        </div>
                                        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                            <X className="w-5 h-5 text-gray-500" />
                                        </button>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="h-1 bg-gray-100 w-full">
                                        <div
                                            className="h-full bg-black transition-all duration-300 ease-out"
                                            style={{ width: `${(step / 4) * 100}%` }}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 overflow-y-auto p-6">
                                        {step === 1 && (
                                            <div className="space-y-4">
                                                <h3 className="text-xl font-semibold mb-4">Select Service</h3>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {SERVICES.map((service) => (
                                                        <div
                                                            key={service.id}
                                                            onClick={() => setValue('serviceType', service.id, { shouldValidate: true })}
                                                            className={clsx(
                                                                "p-4 border-2 rounded-xl cursor-pointer transition-all hover:border-black flex items-center gap-4",
                                                                formData.serviceType === service.id ? "border-black bg-gray-50" : "border-gray-100"
                                                            )}
                                                        >
                                                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                                                <Scissors className="w-6 h-6 text-gray-700" />
                                                            </div>
                                                            <div>
                                                                <h4 className="font-medium text-gray-900">{service.name}</h4>
                                                                <p className="text-sm text-gray-500">{service.duration}</p>
                                                            </div>
                                                            {formData.serviceType === service.id && (
                                                                <Check className="w-5 h-5 text-black ml-auto" />
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                                {errors.serviceType && <p className="text-red-500 text-sm">{errors.serviceType.message}</p>}
                                            </div>
                                        )}

                                        {step === 2 && (
                                            <div className="space-y-6">
                                                <h3 className="text-xl font-semibold">Choose Date & Time</h3>
                                                <div className="space-y-4">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                                                        <input
                                                            type="date"
                                                            {...register('appointmentDate')}
                                                            className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                                                            min={new Date().toISOString().split('T')[0]}
                                                        />
                                                        {errors.appointmentDate && <p className="text-red-500 text-sm">{errors.appointmentDate.message}</p>}
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                                                        <select
                                                            {...register('appointmentTime')}
                                                            className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none bg-white"
                                                        >
                                                            <option value="">Select a time</option>
                                                            {['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'].map(t => (
                                                                <option key={t} value={t}>{t}</option>
                                                            ))}
                                                        </select>
                                                        {errors.appointmentTime && <p className="text-red-500 text-sm">{errors.appointmentTime.message}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {step === 3 && (
                                            <div className="space-y-6">
                                                <h3 className="text-xl font-semibold">Your Details</h3>
                                                <div className="bg-blue-50 text-blue-800 px-4 py-3 rounded-lg text-sm flex items-center gap-2 mb-4">
                                                    <MapPin className="w-4 h-4" />
                                                    Serving all of Geneva
                                                </div>
                                                <div className="space-y-4">
                                                    <input
                                                        {...register('clientName')}
                                                        placeholder="Full Name"
                                                        className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black outline-none"
                                                    />
                                                    {errors.clientName && <p className="text-red-500 text-sm">{errors.clientName.message}</p>}

                                                    <input
                                                        {...register('clientPhone')}
                                                        placeholder="Phone (+41...)"
                                                        className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black outline-none"
                                                    />
                                                    {errors.clientPhone && <p className="text-red-500 text-sm">{errors.clientPhone.message}</p>}

                                                    <textarea
                                                        {...register('clientAddress')}
                                                        placeholder="Address in Geneva"
                                                        rows={3}
                                                        className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black outline-none resize-none"
                                                    />
                                                    {errors.clientAddress && <p className="text-red-500 text-sm">{errors.clientAddress.message}</p>}
                                                </div>
                                            </div>
                                        )}

                                        {step === 4 && (
                                            <div className="space-y-6">
                                                <h3 className="text-xl font-semibold">Confirm Booking</h3>
                                                <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                                                    <div className="flex justify-between border-b border-gray-200 pb-4">
                                                        <span className="text-gray-500">Service</span>
                                                        <span className="font-medium">{SERVICES.find(s => s.id === formData.serviceType)?.name}</span>
                                                    </div>
                                                    <div className="flex justify-between border-b border-gray-200 pb-4">
                                                        <span className="text-gray-500">Date & Time</span>
                                                        <span className="font-medium">{formData.appointmentDate} at {formData.appointmentTime}</span>
                                                    </div>
                                                    <div className="flex justify-between border-b border-gray-200 pb-4">
                                                        <span className="text-gray-500">Location</span>
                                                        <span className="font-medium text-right max-w-[200px]">{formData.clientAddress}</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2 text-sm text-gray-500 justify-center">
                                                    <Check className="w-4 h-4 text-green-500" />
                                                    <span>No payment required today</span>
                                                </div>

                                                {state.error && (
                                                    <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm text-center">
                                                        {state.error}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    {/* Footer */}
                                    <div className="p-6 border-t border-gray-100 bg-white flex gap-3">
                                        {step > 1 && (
                                            <button
                                                onClick={prevStep}
                                                className="px-6 py-3 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                                            >
                                                Back
                                            </button>
                                        )}

                                        {step < 4 ? (
                                            <button
                                                onClick={nextStep}
                                                className="flex-1 bg-black text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
                                            >
                                                Next Step <ChevronRight className="w-4 h-4" />
                                            </button>
                                        ) : (
                                            <form action={formAction} onSubmit={handleSubmit(onSubmit)} className="flex-1">
                                                <button
                                                    type="submit"
                                                    className="w-full bg-black text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
                                                >
                                                    Confirm Appointment
                                                </button>
                                            </form>
                                        )}
                                    </div>
                                </>
                            )}
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </Transition>
    );
}
