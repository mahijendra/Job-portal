import {Fragment} from 'react'
import {Menu, Popover, Transition} from '@headlessui/react'
import {ChevronDownIcon, HomeIcon, LocationMarkerIcon, MenuIcon, XIcon} from '@heroicons/react/outline'
import {useHistory} from "react-router-dom";
import ReactPaginate from "react-paginate"
import {useState} from 'react'
import jobsData from "./MOCK_DATA.json"
import "../../styles/pagination.css"

const user = {
    imageUrl:
        'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
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

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function JobsHome() {

    const [users, setUsers] = useState(jobsData.slice(0, 50));
    const [pageNumber, setPageNumber] = useState(0);


    const usersPerPage = 3;

    const pagesVisited = pageNumber * usersPerPage;

    const displayUsers = users
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((job, id) => {
            return (
                <>
                    <li key={job.id}
                        className="col-span-1 bg-white rounded-lg shadow flex flex-col">
                        <div className="w-full flex items-center justify-between p-6 space-x-6">
                            <div className="flex-1 truncate">
                                <div className="flex items-center space-x-3">
                                    <h3 className="text-gray-900 text-lg font-medium truncate">{job.jobTitle}</h3>
                                </div>
                                <p className="mt-1 text-gray-500 text-sm truncate">{job.description}</p>
                            </div>
                        </div>

                        <div className="flex flex-row justify-between items-center lg:gap-x-12">
                            <div className="w-xl flex mx-14">
                                <a
                                    href="/"
                                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                                >
                                    <LocationMarkerIcon className="w-5 h-5 text-gray-400 flex-shrink-0 text-gray-400 mr-1"
                                                        aria-hidden="true"/>
                                    <span className="">{job.location}</span>
                                </a>
                            </div>
                            <div className=" w-0 flex-1 flex">
                                <a
                                    href="/"
                                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                                >
                                    <div
                                        className='flex flex-col justify-center items-center'>
                                        <button

                                            type="submit"
                                            className="w-2xl px-2 flex justify-center py-2 px-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-500 focus:outline-none"
                                        >
                                            View Application
                                        </button>

                                    </div>
                                </a>
                            </div>
                        </div>
                    </li>
                </>
            );
        });

    const pageCount = Math.ceil(users.length / usersPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
    };

    let history = useHistory();
    return (
        <div className="min-h-screen bg-gray-100 font-open-sans">
            <Popover as="header" className=" background pb-12 bg-indigo-600 h-md">
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
                                                    <Menu.Button className="flex text-sm rounded-full focus:outline-none">
                                                        <span className="sr-only">Open user menu</span>
                                                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 pt-1" aria-hidden="true"/>
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
                                                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <Menu.Item>
                                                            {({ active }) => (
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

                        <header className="py-1">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className='flex flex-col pt-6'>
                                    <div className="w-24 flex ml-2">
                                        <a
                                            href="/"
                                            className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                                        >
                                            <HomeIcon className="w-5 h-5 text-gray-400" aria-hidden="true"/>
                                            <span
                                                className="ml-1 text-white text-md text-gray-200 tracking-wide">Home</span>
                                        </a>
                                    </div>
                                    <div className="w-72 flex ml-6">
                                        <p className="text-2xl text-gray-200 tracking-wide">
                                            Jobs posted by you
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </header>

                    </>
                )}
            </Popover>

            {/*Jobs List*/}
            <main className="-mt-32 pr-12">
                <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
                    {/* Replace with your content */}
                    <div className="rounded-lg px-5 py-6 sm:px-6 ">
                        <div className="h-sm rounded-lg">
                            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {displayUsers}
                            </ul>

                        </div>
                    </div>
                    {/* /End replace */}
                </div>
            </main>


                <ReactPaginate previousLabel={'<'} nextLabel={'>'} pageCount={pageCount} marginPagesDisplayed={1}
                               onPageChange={changePage}
                               containerClassName={"paginationBttns"}
                               previousLinkClassName={"previousBttn"}
                               nextLinkClassName={"nextBttn"}
                               disabledClassName={"paginationDisabled"}
                               activeClassName={"paginationActive"}/>
        </div>
    )
}

