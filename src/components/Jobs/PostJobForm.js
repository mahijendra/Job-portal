

/*import {Popover} from '@headlessui/react'
import '../../styles/landingpage.css'
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
                                {/!* Logo *!/}
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

                                {/!* Right section on desktop *!/}
                                {/!* <div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
                                    <Menu as="div" className="ml-4 relative flex-shrink-0">
                                        <button
                                            type="button"
                                            className=" tracking-wide inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-300 bg-opacity-10 focus:outline-none border border-blue-600"
                                        >
                                            Login/Signup
                                        </button>
                                    </Menu>
                                </div>*!/}
                            </div>
                            <div className="hidden lg:block border-t border-white border-opacity-20 py-5"></div>
                        </div>
                    </>
                )}
            </Popover>

            <main className="-mt-40 flex justify-center items-center">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
                    {/!* Replace with your content *!/}
                    <div className="bg-white rounded-lg shadow px-6 py-6 sm:px-6">
                        <div className="rounded-lg h-80">
                            <form className="space-y-6" action="#" method="POST">
                                <div className="text-md tracking-wide p-0">
                                    Post a Job
                                </div>
                                <div>
                                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                        Job Title*
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            placeholder="Enter job title"
                                            id="title"
                                            name="title"
                                            type="text"
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex flex-row gap-60">
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                            Description*
                                        </label>
                                    </div>
                                    <div className="mt-1">
                                        <textarea className="w-full shadow-inner p-4 border-0" placeholder="Description" rows="4"></textarea>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex flex-row gap-60">
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                            Location*
                                        </label>
                                    </div>
                                    <div className="mt-1">
                                        <input
                                            placeholder="Enter Location"
                                            id="location"
                                            name="location"
                                            type="text"
                                            required
                                            className="h-12 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-8 justify-center items-center'>
                                    <button
                                        type="submit"
                                        className="w-xl px-8 mt-4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                       Post
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                    {/!* /End replace *!/}
                </div>
            </main>
        </div>

    )
}*/

import {Fragment} from 'react'
import {Disclosure, Menu, Transition} from '@headlessui/react'
import {
    MenuIcon,
    XIcon,
    ChevronDownIcon,
    LocationMarkerIcon,
    HomeIcon,
    PencilAltIcon
} from '@heroicons/react/outline'
import {useHistory} from "react-router-dom";


const user = {
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const people = [
    {
        job: 'UI / UX Designer',
        description: 'Lorem Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidunt...',
        location: 'Bengaluru',
        button: '',
    },
    {
        job: 'Front-End Designer ',
        description: 'Lorem Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidunt...',
        location: 'Hyderabad',
        button: '',
    },
    {
        job: 'Java Developer',
        description: 'Lorem Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidunt...',
        location: 'Gurgaon',
        button: '',
    },

]


const userNavigation = [
    {name: 'Logout', href: '#'}
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    let history = useHistory();

    return (
        <div className="min-h-screen bg-blue-100">
            <div className="background pb-32 h-sm">
                <Disclosure as="nav" className="background border-b border-indigo-300 border-opacity-25 lg:border-none">
                    {({open}) => (
                        <>
                            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 h-xs">
                                <div
                                    className="relative h-xs flex items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25">
                                    <div
                                        onClick={() => {
                                            history.push('/landingPage')
                                        }}
                                        className="absolute left-0 flex-shrink-0 lg:static">
                                    <span
                                        className="text-2xl font-bold block xl:inline text-white tracking-wide ">My</span> {" "}
                                        <span
                                            className="text-2xl font-bold block text-blue-500 xl:inline tracking-wide">Jobs</span>
                                    </div>

                                    <div className="flex lg:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button
                                            className="bg-indigo-600 p-2 rounded-md inline-flex items-center justify-center text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XIcon className="block h-6 w-6" aria-hidden="true"/>
                                            ) : (
                                                <MenuIcon className="block h-6 w-6" aria-hidden="true"/>
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                    <div className="hidden lg:block lg:ml-4">
                                        <div className="flex items-center">
                                            <button
                                                type="button"
                                                className="flex-shrink-0 rounded-full p-1 text-indigo-200 hover:text-white focus:outline-none"
                                            >
                                                <span className="sr-only">View notifications</span>
                                                <p className="">Post a job</p>
                                            </button>

                                            {/* Profile dropdown */}
                                            <Menu as="div" className="ml-3 relative flex-shrink-0">
                                                <div className="flex flex-row gap-2 align-center justify-center"
                                                >
                                                    <img className="h-8 w-8 rounded-full cursor-pointer"
                                                         src={user.imageUrl} alt=""/>
                                                    <Menu.Button
                                                        className="rounded-full flex text-sm text-white focus:outline-none">
                                                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 pt-1"
                                                                         aria-hidden="true"/>
                                                    </Menu.Button>

                                                </div>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items
                                                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        {userNavigation.map((item) => (
                                                            <Menu.Item key={item.name}>
                                                                {({active}) => (
                                                                    <a
                                                                        href={item.href}
                                                                        className={classNames(
                                                                            active ? 'bg-gray-100' : '',
                                                                            'block py-2 px-4 text-sm text-gray-700'
                                                                        )}
                                                                    >
                                                                        {item.name}
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                        ))}
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="lg:hidden sm:hidden flex flex-row">
                                <div className="px-2 pt-2 pb-3 space-y-1">

                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>

            <main className="-mt-40 flex justify-center items-center">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
                    <div className="bg-white rounded-lg shadow px-6 py-6 sm:px-6">
                        <div className="rounded-lg h-80">
                            <form className="space-y-6" action="#" method="POST">
                                <div className="text-md tracking-wide p-0">
                                    Post a Job
                                </div>
                                <div>
                                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                        Job Title*
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            placeholder="Enter job title"
                                            id="title"
                                            name="title"
                                            type="text"
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex flex-row gap-60">
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                            Description*
                                        </label>
                                    </div>
                                    <div className="mt-1">
                                        <textarea className="w-full shadow-inner p-4 border-0" placeholder="Description" rows="4"></textarea>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex flex-row gap-60">
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                            Location*
                                        </label>
                                    </div>
                                    <div className="mt-1">
                                        <input
                                            placeholder="Enter Location"
                                            id="location"
                                            name="location"
                                            type="text"
                                            required
                                            className="h-12 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-8 justify-center items-center'>
                                    <button
                                        type="submit"
                                        className="w-xl px-8 mt-4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Post
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                        </div>
                        </main>
        </div>
    )
}

