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
        <div className="min-h-screen bg-gray-100 mb-2">
            <Popover as="header" className="pb-24 background h-md">
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
                            </div>
                            <div className="hidden lg:block border-t border-white border-opacity-20 py-5"></div>
                        </div>
                    </>
                )}
            </Popover>

            <main className="-mt-72 flex justify-center items-center">
                <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Replace with your content */}
                    <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
                        <div className=" rounded-lg h-96">
                            <form className="flex flex-col gap-3 space-y-6" action="#" method="POST">
                                <div className="text-md tracking-wide p-0">
                                    SignUp
                                </div>
                                {/*Recruiter and Candidate buttons*/}
                                <div className="flex flex-row gap-4">
                                    <div>
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex align-center justify-center gap-2"
                                        >
                                            <img src="recruitment.png" alt='' className='h-6 w-6 pt-1'/>
                                            Recruiter
                                        </button>
                                    </div>

                                    <div>
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex align-center justify-center gap-2"
                                        >
                                            <img src="candidate.png" alt='' className='h-6 w-6 pt-1'/>
                                            Candidate
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    {/*Name*/}
                                    <label htmlFor="email" className="block text-sm font-light text-gray-700">
                                        Name*
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            placeholder="Enter your Name"
                                            id="name"
                                            name="text"
                                            type="text"
                                            autoComplete="name"
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>

                                    {/*Email*/}
                                    <label htmlFor="email" className="block text-sm font-light text-gray-700 pt-6">
                                        Email address*
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            placeholder="Enter your Email Id"
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                {/*Create Password**/}
                                <div className="flex flex-row gap-4">
                                    <div className='flex flex-col'>
                                        <div className="flex flex-row gap-60">
                                            <label htmlFor="password"
                                                   className="block text-sm font-light text-gray-700">
                                                Create Password*
                                            </label>
                                        </div>
                                        <div className="mt-2">
                                            <input
                                                placeholder="Enter your password"
                                                id="password"
                                                name="password"
                                                type="password"
                                                autoComplete="current-password"
                                                required
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                    {/*Confirm Password*/}
                                    <div className="flex flex-col">
                                        <div className="flex flex-row gap-60">
                                            <label htmlFor="password"
                                                   className="block text-sm font-light text-gray-700">
                                                Confirm Password*
                                            </label>
                                        </div>
                                        <div className="mt-2">
                                            <input
                                                placeholder="Enter your password"
                                                id="password"
                                                name="password"
                                                type="password"
                                                autoComplete="current-password"
                                                required
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/*Skills*/}
                                <div>
                                    <label htmlFor="text" className="block text-sm font-light text-gray-700">
                                        Skills
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            placeholder="Enter comma seperated skills"
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                {/*LogIn*/}
                                <div className='flex flex-col gap-4 justify-center items-center'>
                                    <button
                                        type="submit"
                                        className="w-2xl px-8 mt-4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                       Sign Up
                                    </button>

                                    <div>
                                        <p>
                                            Have an account? {" "}
                                            <span onClick={() => {
                                                history.push('/login')
                                            }} className='text-blue-500 cursor-pointer'>Login</span>
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