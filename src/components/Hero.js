import {Fragment} from 'react'
import {Menu, Popover, Transition} from '@headlessui/react'
import {BellIcon, MenuIcon, XIcon} from '@heroicons/react/outline'
import {useHistory} from "react-router-dom";

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

export default function Example() {
    let history = useHistory();

    return (
        <div className="min-h-screen bg-gray-100">
            <Popover as="header" className=" background pb-24 bg-indigo-600 h-md ">
                {({open}) => (
                    <>
                        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                            <div className="relative py-5 flex items-center justify-center lg:justify-between cursor-pointer">
                                {/* Logo */}
                                <div
                                    onClick={() => {
                                        history.push('/landingPage')
                                    }}
                                    className="max-w-3xl absolute left-0 flex-shrink-0 lg:static mt-2">
                                    <span
                                        className="lg:text-2xl font-bold block xl:inline text-white tracking-wide ">My</span>
                                    <span
                                        className="lg:text-2xl font-bold block text-blue-500 xl:inline tracking-wide">Jobs</span>
                                </div>

                                {/* Right section on desktop */}
                                <div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
                                    <button
                                        onClick={() => {
                                            history.push('/login')
                                        }}
                                        className="tracking-wide inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-300 bg-opacity-10 focus:outline-none border border-blue-600"
                                    >
                                        Login/Signup

                                    </button>
                                </div>

                                {/* Menu button */}
                                <div className="absolute right-0 flex-shrink-0 lg:hidden">
                                    {/* Mobile menu button */}
                                    <Popover.Button
                                        className="bg-transparent p-2 rounded-md inline-flex items-center justify-center text-indigo-200 hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true"/>
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true"/>
                                        )}
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="hidden lg:block border-t border-white border-opacity-20 py-5">
                                <div className="grid grid-cols-3 gap-8 items-center">
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Transition.Root as={Fragment}>
                            <div className="lg:hidden">
                                <Transition.Child
                                    as={Fragment}
                                    enter="duration-150 ease-out"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="duration-150 ease-in"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Popover.Overlay className=" z-20 fixed inset-0 bg-black bg-opacity-25"/>
                                </Transition.Child>

                                <Transition.Child
                                    as={Fragment}
                                    enter="duration-150 ease-out"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="duration-150 ease-in"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Popover.Panel
                                        focus
                                        className=" z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top"
                                    >
                                        <div
                                            className="background rounded-lg shadow-lg ring-1 ring-blue-900 ring-opacity-3 flex flex-col items-center">
                                            <div className="pt-3 pb-2">
                                                <div className="flex items-center justify-between px-4">
                                                    <div>
                                                        <img
                                                            className="h-8 w-auto"
                                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                                            alt="Workflow"
                                                        />
                                                    </div>
                                                    <div className="-mr-2">
                                                        <Popover.Button
                                                            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                            <span className="sr-only">Close menu</span>
                                                            <XIcon className="h-6 w-6" aria-hidden="true"/>
                                                        </Popover.Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-4 pb-2">
                                                <div className="mt-3 px-2 space-y-1">
                                                    <button
                                                        onClick={() => {
                                                            history.push('/login')
                                                        }}
                                                        className="tracking-wide inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-300 bg-opacity-10 focus:outline-none border border-blue-600"
                                                    >
                                                        Login/Signup

                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Popover.Panel>
                                </Transition.Child>
                            </div>
                        </Transition.Root>
                    </>
                )}
            </Popover>
            <main className="-mt- pb-8">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-5xl lg:px-8 ">
                    <h1 className="sr-only">Landing Page</h1>
                    <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-2 lg:gap-8">
                        {/* Left column */}
                        <div className="grid grid-cols-1 gap-4 -mt-80 pt-8">
                            <section aria-labelledby="section-1-title">
                                <span className="block text-4xl text-gray-200">Welcome to </span>{' '}
                                <span className="block text-4xl text-blue-600 pt-3">My Jobs</span>
                                <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Right column */}
                        <div className="lg:-mt-64 sm:-mt-48">
                            <section aria-labelledby="section-2-title">
                                <div className="lg:h-72 md:h-48 rounded-lg bg-white overflow-hidden shadow h-72 ">
                                    <img src='home1.jpg' alt="" className="w-full bg-center bg-cover"></img>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>

            {/*Why US? >*/}
            <div className="flex flex-col ">
                <div className="flex flex-col items-center justify-center">
                    <div className="max-w-5xl mx-auto">
                        <div
                            className="max-w-5xl flex items-center justify-start px-8 lg-px-8 pt-12 text-sm tracking-wide">
                            <p>Why Us</p>
                        </div>
                        <div className="mx-auto py-6 px-4 max-w-5xl sm:px-6 lg:px-8 lg:py-6 flex">
                            <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                                <div className="lg:col-span-3">
                                    <ul
                                        className="space-y-12 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
                                    >
                                        {people.map((person) => (
                                            <li key={person.name}>
                                                <div className="space-y-4 bg-white px-6 py-6">
                                                    <div
                                                        className="text-lg leading-6 font-medium space-y-1 text-blue-500">
                                                        <span>{person.name}</span>{' '}
                                                        <span>{person.name2}</span>
                                                    </div>
                                                    <div className="text-sm">
                                                        <p className="text-gray-500">{person.bio}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/*Company List*/}
                <div className="max-w-4xl">
                    <div className=" flex flex-col py-6 px-4 sm:px-6 lg:px-8 justify-start">
                        <p className="text-sm tracking-wide px-8 lg-px-8 pt-12 pl-10">
                            Companies Who Trust Us
                        </p>

                        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                                     alt="Tuple"/>
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                                     alt="Mirage"/>
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img
                                    className="h-8"
                                    src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                                    alt="StaticKit"
                                />
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                                <img
                                    className="h-8"
                                    src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                                    alt="Transistor"
                                />
                            </div>
                            <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                                <img
                                    className="h-8"
                                    src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                                    alt="Workcation"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}