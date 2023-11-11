/* eslint-disable react/jsx-key */
'use client'
import Portfolio from '@/components/Portfolio'
import SectionTitle from '@/components/SectionTitle'
import { works } from '@/data/works'

export default function RecentWorkSection() {
  return (
    <>
      <SectionTitle>Recent Works</SectionTitle>
      <div className="px-16 mt-10 grid gap-4 xs:grid-cols-2 md:grid-cols-3 md:gap-8">
        {works
          .filter((_, index) => index < 6)
          .map((work) => (
            <Portfolio
              imageUrl={work.thumbnailUrl}
              title={work.title}
              href={`${work.previewUrl}`}
            />
          ))}
      </div>
    </>
  )
}
