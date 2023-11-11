'use client'
import React from 'react'
import Head from 'next/head'

import ScrollToTop from 'react-scroll-to-top'
import { FiArrowUp } from 'react-icons/fi'
import AboutSection from '@/components/AboutSection'
import HeroSection from '@/components/HeroSection'
import Footer from '@/components/Footer'
import ExperienceSection from '@/components/ExperienceSection'
import RecentWorkSection from '@/components/RecentWorkSection'

export default function AppLayout() {
  return (
    <>
      <Head>
        <title>airton Sena</title>
      </Head>

      <div className="flex min-h-screen flex-col">
        <ScrollToTop
          smooth
          className=" bg-slate-900 fixed bottom-16 right-8 z-10 cursor-pointer rounded-lg p-3 text-blue transition-colors duration-150 hover:bg-primary-600 "
          component={
            <div className="flex justify-center">
              <FiArrowUp />
            </div>
          }
        />

        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <RecentWorkSection />

        <Footer />
      </div>
    </>
  )
}
