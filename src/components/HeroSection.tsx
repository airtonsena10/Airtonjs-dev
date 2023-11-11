/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import Image from 'next/image'
import Lottie from 'react-lottie'
import perfilImg from '@/images/img.json'
import Link from 'next/link'
import React from 'react'
import { FiGithub, FiInstagram, FiTwitter } from 'react-icons/fi'
import { BsLinkedin } from 'react-icons/bs'
export default function HeroSection() {
  return (
    <main className="grid grid-cols-1 gap-2 py-6 px-14 md:grid-cols-2 lg:gap-8">
      <span className="profileImage">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: perfilImg,
          }}
        />
      </span>

      <p className="paragraph px-3  text-2xl m-20 md:px-3 ">
        <h3 className=" text-gray-950">Olá 👋 Me chamo AirtonSena</h3>{' '}
        Transformando ideias em realidade através do código
      </p>
    </main>
  )
}
