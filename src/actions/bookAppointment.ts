'use server'

interface BookingData {
  name: string
  email: string
  service: string
  date: string
  time: string
}

export async function bookAppointment(data: BookingData) {
  // In a real application, you would save this data to a database
  // and potentially integrate with a calendar system
  console.log('Booking appointment:', data)

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Simulate a success or failure
  if (Math.random() > 0.1) { // 90% success rate
    return { success: true }
  } else {
    throw new Error('Booking failed')
  }
}

