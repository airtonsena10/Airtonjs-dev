'use client'
import DotBg from '@/components/DotBg'

export default function SectionTitle({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative px-6 py-8">
      <DotBg className="absolute bottom-5 h-8 w-8 fill-current" />
      <h3 className="pl-3  text-3xl font-bold">{children}</h3>
    </div>
  )
}
