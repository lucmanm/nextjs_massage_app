'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { bookAppointment } from '../actions/bookAppointment'

const services = [
  "Swedish Massage",
  "Deep Tissue Massage",
  "Hot Stone Massage",
  "Aromatherapy Massage",
]

export default function BookingForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await bookAppointment({ name, email, service, date, time })
      alert('Booking successful!')
      router.push('/')
    } catch {
      alert('Booking failed. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <Input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Select value={service} onValueChange={setService} required>
        <SelectTrigger>
          <SelectValue placeholder="Select a service" />
        </SelectTrigger>
        <SelectContent>
          {services.map((s) => (
            <SelectItem key={s} value={s}>{s}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <Input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <Button type="submit" className="w-full">Book Appointment</Button>
    </form>
  )
}

