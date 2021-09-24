/*
This example requires Tailwind CSS v2.0+

This example requires some changes to your config:

    ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
    */

import {Menu, Popover} from '@headlessui/react'
import '../styles/landingpage.css'

const people = [
    {
        name: 'Get More',
        name2: 'Visibility',
        bio:
            'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. ',

    },
    {
        name: 'Organize Your',
        name2: 'Candidates',
        bio:
            'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. ',

    },
    {
        name: 'Verify Their ',
        name2: 'Abilities',
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. ',
    },

]
export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Popover as="header" className="pb-24 background h-96">
                {({open}) => (
                    <>
                        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                            <div className="relative py-5 flex items-center justify-center lg:justify-between">
                                {/* Logo */}
                                <div className="absolute left-0 flex-shrink-0 lg:static">
                                    <span
                                        className="text-2xl font-bold block xl:inline text-white tracking-wide ">My</span>
                                    <span
                                        className="text-2xl font-bold block text-blue-500 xl:inline tracking-wide">Jobs</span>
                                </div>

                                {/* Right section on desktop */}
                                <div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
                                    {/* Profile dropdown */}
                                    <Menu as="div" className="ml-4 relative flex-shrink-0">
                                        <button
                                            type="button"
                                            className=" tracking-wide inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-300 bg-opacity-10 focus:outline-none border border-blue-600"
                                        >
                                            Login/Signup
                                        </button>
                                    </Menu>
                                </div>
                            </div>
                            <div className="hidden lg:block border-t border-white border-opacity-20 py-5"></div>
                        </div>
                    </>
                )}
            </Popover>

            <main className="-mt-24 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:max-w-xl lg:px-8 ">
                    <div className="">
                        <div className="-mt-40">
                            <section aria-labelledby="section-2-title">
                                <div className="rounded-lg bg-white overflow-hidden shadow h-72">

                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    )
}