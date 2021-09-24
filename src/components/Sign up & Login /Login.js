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

import {Popover} from '@headlessui/react'
import '../styles/landingpage.css'
import {useHistory} from "react-router-dom";


export default function LandingPage() {
    let history = useHistory();
    return (
        <div className="min-h-screen bg-gray-100">
            <Popover as="header" className="pb-24 background h-sm">
                {({open}) => (
                    <>
                        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                            <div className="relative py-5 flex items-center justify-center lg:justify-between">
                                {/* Logo */}
                                <div
                                    onClick={() => {
                                        history.push('/landingPage')
                                    }}
                                    className="absolute left-0 flex-shrink-0 lg:static
                                    ">
                                    <span
                                        className="text-2xl font-bold block xl:inline text-white tracking-wide ">My</span>
                                    <span
                                        className="text-2xl font-bold block text-blue-500 xl:inline tracking-wide">Jobs</span>
                                </div>

                                {/* Right section on desktop */}
                                {/* <div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
                                    <Menu as="div" className="ml-4 relative flex-shrink-0">
                                        <button
                                            type="button"
                                            className=" tracking-wide inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-300 bg-opacity-10 focus:outline-none border border-blue-600"
                                        >
                                            Login/Signup
                                        </button>
                                    </Menu>
                                </div>*/}
                            </div>
                            <div className="hidden lg:block border-t border-white border-opacity-20 py-5"></div>
                        </div>
                    </>
                )}
            </Popover>

            <main className="-mt-40 flex justify-center items-center">
                <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 ">
                    {/* Replace with your content */}
                    <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
                        <div className=" rounded-lg h-80">
                            <form className="space-y-6" action="#" method="POST">
                                <div className="text-md tracking-wide p-0">
                                    Login
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            placeholder="Enter your Email"
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex flex-row gap-60">
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                            Password
                                        </label>
                                        <div className="text-sm">
                                            <span onClick={() => {
                                                history.push('/forgotPassword')
                                            }}
                                                  className="font-medium text-blue-500">
                                                Forgot your password?
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-1">
                                        <input
                                            placeholder="Enter your password"
                                            id="password"
                                            name="password"
                                            type="password"
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-8 justify-center items-center'>
                                    <button
                                        type="submit"
                                        className="w-2xl px-8 mt-4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Log in
                                    </button>

                                    <div>
                                        <p>
                                            New to MyJobs?{" "}
                                            <span
                                                onClick={() => {
                                                    history.push('/signUp')
                                                }}
                                                className='text-blue-500 cursor-pointer'>Create an account</span>
                                        </p>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                    {/* /End replace */}
                </div>
            </main>
        </div>

    )
}