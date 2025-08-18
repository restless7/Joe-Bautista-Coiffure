'use server';

// Contact form submission action
export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  const service = formData.get('service') as string;

  // Validation
  if (!name || !email || !message) {
    return {
      success: false,
      error: 'Tous les champs sont requis. (All fields are required.)'
    };
  }

  if (!email.includes('@')) {
    return {
      success: false,
      error: 'Adresse email invalide. (Invalid email address.)'
    };
  }

  try {
    // TODO: Implement email sending logic here
    // This could be nodemailer, SendGrid, Resend, etc.
    console.log('Contact form submission:', { name, email, message, service });
    
    return {
      success: true,
      message: 'Votre message a été envoyé avec succès. Nous vous répondrons rapidement. (Your message has been sent successfully. We will respond quickly.)'
    };
  } catch (error) {
    console.error('Error sending contact form:', error);
    return {
      success: false,
      error: 'Une erreur est survenue. Veuillez réessayer. (An error occurred. Please try again.)'
    };
  }
}

// Newsletter subscription action
export async function subscribeNewsletter(formData: FormData) {
  const email = formData.get('email') as string;

  if (!email || !email.includes('@')) {
    return {
      success: false,
      error: 'Adresse email invalide. (Invalid email address.)'
    };
  }

  try {
    // TODO: Implement newsletter subscription logic
    console.log('Newsletter subscription:', { email });
    
    return {
      success: true,
      message: 'Inscription réussie à notre newsletter. (Successfully subscribed to our newsletter.)'
    };
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return {
      success: false,
      error: 'Une erreur est survenue. Veuillez réessayer. (An error occurred. Please try again.)'
    };
  }
}
