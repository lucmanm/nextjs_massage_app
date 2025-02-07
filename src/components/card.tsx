import type { LucideIcon } from "lucide-react"

interface CardProps {
  title: string
  value: string
  icon: LucideIcon
  description: string
}

export function CardStats({ title, value, icon: Icon, description }: CardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <Icon className="h-6 w-6 text-teal-500" />
      </div>
      <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  )
}

