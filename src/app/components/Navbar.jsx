'use client'

import { Fragment, useState } from 'react'
import Image from 'next/image'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed auto z-10 w-full">
      <div className='backdrop-blur-sm md:backdrop-blur-lg pt-2 '>                   
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-1  lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/#" className="-m-1.5 p-1.5">
            {/* <Image src="/logo.png" alt="logo" priority width={100} height={100} /> */}
            <h1 className='text-xl font-semibold leading-6 text-grey-700 hover:text-orange-300 cursor-pointer'>Creative Cloud Solutions</h1>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {/* <a href="/#about" className="text-xl font-semibold leading-6 text-grey-700 hover:text-orange-300 cursor-pointer"> */}
          <a href="/#services" className="text-xl font-semibold relative after:bg-orange-300 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
            Services
          </a>
          {/* <a href="/#facilities" className="text-xl font-semibold leading-6 text-grey-700 hover:text-orange-300 cursor-pointer"> */}
          <a href="/#work" className="text-xl font-semibold relative after:bg-orange-300 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
          Our Work
          </a>
          {/* <a href="/#facilities" className="text-xl font-semibold leading-6 text-grey-700 hover:text-orange-300 cursor-pointer"> */}
          <a href="/#clients" className="text-xl font-semibold relative after:bg-orange-300 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
          Our Clients
          </a>
          {/* <a href="/#contact" className="text-xl font-semibold leading-6 text-grey-700 hover:text-orange-300 cursor-pointer"> */}
          <a href="/#contact" className="text-xl font-semibold relative after:bg-orange-300 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
            Contact
          </a>
        </PopoverGroup>
       
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <h1 className='font-bold'>Creative Cloud Solutions</h1>
              {/* <Image src="/logo.png" alt="logo" priority width={100} height={100} /> */}
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="false" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/#services"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:text-orange-300 cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                 Services
                </a>
                <a
                  href="/#work"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:text-orange-300 cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Our Work
                </a>
                <a
                  href="/#clients"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:text-orange-300 cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Our Clients
                </a>
                <a
                  href="/#contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:text-orange-300 cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>

              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      </div>
    </header>
  )
}
