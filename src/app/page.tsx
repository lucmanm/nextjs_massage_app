import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Welcome to LucmanmTouch Massage</h1>
      <p className="mb-6">Experience relaxation and rejuvenation with our professional massage services.</p>
      <Button asChild size="lg">
        <Link href="/book">Book Your Massage Now</Link>
      </Button>
    </div>
  )
}

