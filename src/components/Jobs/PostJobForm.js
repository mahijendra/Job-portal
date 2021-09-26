import {Fragment} from 'react'
import {Menu, Popover, Transition} from '@headlessui/react'
import {ChevronDownIcon, MenuIcon, XIcon, HomeIcon, ChevronRightIcon} from '@heroicons/react/outline'
import {useHistory} from "react-router-dom";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

const user = {
    imageUrl:
        'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
}

const pages = [
    {name: 'Post Job', href: '#', current: false},
    {name: '', href: '#', current: false},
]

const schema = yup.object().shape({
    jobTitle: yup.string().email().required(),
    description: yup.string().min(6).required(),
    location: yup.string().required(),
})

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function PostJobForm() {

    const {register, handleSubmit, formState: {errors}} = useForm({
        //connecting the yup to react hooks form
        resolver: yupResolver(schema)
    });

    async function submitForm(data) {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}/jobs/`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        })
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result))
        history.push("/jobsHome")
    }

    let history = useHistory();

    return (
        <div className="min-h-screen bg-gray-100 font-open-sans">
            <Popover as="header" className="background pb-12 bg-indigo-600 h-md">
                {({open}) => (
                    <>
                        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                            <div
                                className="relative py-5 flex items-center justify-center lg:justify-between cursor-pointer">
                                {/* Logo */}
                                <div
                                    onClick={() => {
                                        history.push('/hero')
                                    }}
                                    className="max-w-xl absolute left-0 flex-shrink-0 lg:static mt-3">
                                    <p className="lg:text-2xl font-bold block xl:inline text-white tracking-wide font-open-sans ">My
                                        <p className="lg:text-2xl font-bold block text-blue-500 xl:inline tracking-wide font-open-sans">Jobs</p>
                                    </p>
                                </div>

                                {/* Right Navbar options section on desktop */}
                                <div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
                                    <div className="hidden lg:block lg:ml-4">
                                        <div className="flex items-center">
                                            <button
                                                type="button"
                                                className="flex-shrink-0 rounded-full p-1 text-gray-100 hover:text-white focus:outline-none"
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
                                                        className="flex text-sm rounded-full focus:outline-none">
                                                        <span className="sr-only">Open user menu</span>
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
                                                        <Menu.Item>
                                                            {({active}) => (
                                                                <a
                                                                    href="/"
                                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                                >
                                                                    Logout
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>
                                    </div>
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
                            <div
                                className="hidden lg:block border-t border-white border-opacity-20 py-5 flex flex-col items-start">
                                <div className="grid grid-cols-3 gap-8 items-center">
                                    <div>
                                    </div>
                                </div>
                                <header className="py-8 lg:px-96 ">
                                    <nav className="flex" aria-label="Breadcrumb">
                                        <ol className="flex items-center space-x-4">
                                            <li>
                                                <div>
                                                    <a href="/" className="text-gray-400 hover:text-gray-500">
                                                        <HomeIcon onClick={() => history.push("/postJob")}
                                                                  className="flex-shrink-0 h-5 w-5" aria-hidden="true"/>
                                                        <span className="sr-only">Home</span>
                                                    </a>
                                                </div>
                                            </li>
                                            {pages.map((page) => (
                                                <li key={page.name}>
                                                    <div className="flex items-center">
                                                        <ChevronRightIcon
                                                            className="flex-shrink-0 h-5 w-5 text-gray-400"
                                                            aria-hidden="true"/>
                                                        <a
                                                            href={page.href}
                                                            className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                                            aria-current={page.current ? 'page' : undefined}
                                                        >
                                                            {page.name}
                                                        </a>
                                                    </div>
                                                </li>
                                            ))}
                                        </ol>
                                    </nav>
                                </header>
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
                                            className="background rounded-lg shadow-lg ring-1 ring-blue-900 ring-opacity-3 flex flex-col divide-y divide-gray-500 px-2">
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

                                            {/*Responsive dropdown menu*/}
                                            <div className="pt-4 pb-2 flex flex-col gap-4">
                                                <div className="pl-2 flex flex-row items-center gap-2"
                                                >
                                                    <img className="h-8 w-8 rounded-full cursor-pointer"
                                                         src={user.imageUrl} alt=""/>
                                                    <span className="text-gray-200">My Account</span>
                                                </div>

                                                <div>
                                                    <button
                                                        type="button"
                                                        className="flex-shrink-0 rounded-full text-gray-200 hover:text-white focus:outline-none pl-2"
                                                    >
                                                        <span className="sr-only">View notifications</span>
                                                        <p className="">Post a job</p>
                                                    </button>
                                                </div>

                                                <div className="pl-2 px-2">
                                                    <button
                                                        className="tracking-wide inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-300 bg-opacity-10 focus:outline-none border border-blue-600"
                                                    >
                                                        Logout
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Popover.Panel>
                                </Transition.Child>
                            </div>
                        </Transition.Root>
                        <div
                            className="flex justify-center items-center sm:mx-auto max-w-xl px-4 sm:px-6 lg:px-8 font-open-sans">
                            {/* Replace with your content */}
                            <div
                                className="bg-white rounded-lg shadow px-5 py-6 sm:px-6 sm:mx-auto sm:w-full sm:max-w-md">
                                <div className="rounded-lg h-80">
                                    <form className="space-y-6" onSubmit={handleSubmit(submitForm)}>
                                        <div className="text-md tracking-wide p-0">
                                            Post a Job
                                        </div>
                                        <div>
                                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                                Job Title*
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    {...register('jobTitle' )}
                                                    placeholder="Enter job title"
                                                    id="title"
                                                    name="jobTitle"
                                                    type="text"
                                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                                <p className="text-sm text-red-600">{errors.jobTitle?.message}</p>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex flex-row gap-60">
                                                <label  htmlFor="description"
                                                       className="block text-sm font-medium text-gray-700">
                                                    Description*
                                                </label>
                                            </div>
                                            <div className="mt-1">
                                        <textarea {...register('description')} name="description" className="w-full shadow-inner p-4 border-0"
                                                  placeholder="Description"
                                                  rows="4"></textarea>
                                            </div>
                                            <p className="text-sm text-red-600">{errors.description?.message}</p>
                                        </div>

                                        <div>
                                            <div className="flex flex-row gap-60">
                                                <label htmlFor="description"
                                                       className="block text-sm font-medium text-gray-700">
                                                    Location*
                                                </label>
                                            </div>
                                            <div className="mt-1">
                                                <input
                                                    {...register('location')}
                                                    placeholder="Enter Location"
                                                    name="location"
                                                    type="text"
                                                    className="h-12 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                                <p className="text-sm text-red-600">{errors.location?.message}</p>
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
                            {/* /End replace */}
                        </div>

                    </>
                )}
            </Popover>

        </div>
    )
}