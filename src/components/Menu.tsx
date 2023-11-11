/* eslint-disable eqeqeq */
'use client'
import { Theme, useTheme } from '@/hooks/use-theme'
import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'

import { Fragment, useState } from 'react'
import { BsLinkedin, BsMoonStars, BsSun } from 'react-icons/bs'
import { FiInstagram, FiTwitter, FiGithub } from 'react-icons/fi'
import { HiMenuAlt3 } from 'react-icons/hi'

export default function Menu() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  return (
    <header className="header text-gray-700 dark:text-gray-200">
      <div className=" flex h-16 max-w-7xl items-center px-4 md:px-6">
        <Link href="/" className="text-3xl  font-bold">
          <span className=" text-violet-800 w-50 h-60 font-bold ">
            AS - Developer
          </span>
        </Link>

        <div className="gap-7 ml-auto hidden items-center md:flex">
          <Link
            href="https://www.instragram.com/airtonsena10"
            className="text-gray-700 transition-colors duration-150 hover:text-primary-500"
          >
            <FiInstagram size={32} />
          </Link>

          <Link
            href="https://www.twitter.com/airtonsvd"
            className="text-gray-700 transition-colors duration-150 hover:text-primary-500"
          >
            <FiTwitter size={32} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/airtonsena/"
            className="text-gray-700 transition-colors duration-150 hover:text-primary-500"
          >
            <BsLinkedin size={32} />
          </Link>

          <Link
            href="https://www.github.com/airtonsena10"
            className="text-gray-700 transition-colors duration-150 hover:text-primary-500"
          >
            <FiGithub size={25} />
          </Link>
        </div>
        <button
          type="button"
          className="ml-auto transition-colors duration-150 hover:text-primary-500 md:-mt-0.5 md:ml-3"
          onClick={() => toggleTheme()}
        >
          {theme === Theme.LIGHT ? (
            <BsMoonStars size={25} />
          ) : (
            <BsSun size={25} />
          )}
        </button>
        <button
          type="button"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="ml-5 flex text-gray-700 dark:text-gray-200 md:hidden"
        >
          <HiMenuAlt3 size={27} />
        </button>
      </div>

      {/* Mobile menu */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-40 flex md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform origin-right"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform origin-right"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex h-full w-full max-w-xs flex-1 flex-col bg-[#f9f9ff] pt-5 dark:bg-gray-800">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="text-white">&#10006;</span>
                  </button>
                </div>
              </Transition.Child>
              <div className="flex h-full flex-col overflow-y-auto">
                <div className="border-b px-2 pb-4 dark:border-gray-700">
                  <Link href="/" className="text-3xl  font-bold">
                    <span>AirtonSena</span>
                    <span className="text-primary-500">.</span>
                  </Link>
                </div>
                <nav className="mt-4 space-y-1 px-2">
                  <div className="gap-7 ml-auto hidden items-center md:flex">
                    <Link
                      href="https://www.instragram.com/airtonsena10"
                      className="text-gray-700 transition-colors duration-150 hover:text-primary-500"
                    >
                      <FiInstagram size={32} />
                    </Link>

                    <Link
                      href="https://www.twitter.com/airtonsvd"
                      className="text-gray-700 transition-colors duration-150 hover:text-primary-500"
                    >
                      <FiTwitter size={32} />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/airtonsena/"
                      className="text-gray-700 transition-colors duration-150 hover:text-primary-500"
                    >
                      <BsLinkedin size={32} />
                    </Link>

                    <Link
                      href="https://www.github.com/airtonsena10"
                      className="text-gray-700 transition-colors duration-150 hover:text-primary-500"
                    >
                      <FiGithub size={25} />
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="w-14 flex-shrink-0" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>
    </header>
  )
}
