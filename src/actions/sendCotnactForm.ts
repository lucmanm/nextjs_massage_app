'use server'

interface ContactFormData {
  name: string
  email: string
  message: string
}

export async function sendContactForm(data: ContactFormData) {
  // In a real application, you would send this data to an email service
  // or save it to a database
  console.log('Sending contact form:', data)

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Simulate a success or failure
  if (Math.random() > 0.1) { // 90% success rate
    return { success: true }
  } else {
    throw new Error('Failed to send message')
  }
}

