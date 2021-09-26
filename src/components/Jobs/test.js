import {Fragment, useEffect} from 'react'
import {Menu, Popover, Transition} from '@headlessui/react'
import {ChevronDownIcon, HomeIcon, LocationMarkerIcon, MenuIcon, XIcon} from '@heroicons/react/outline'
import {useHistory} from "react-router-dom";
import ReactPaginate from "react-paginate"
import {useState} from 'react'
import jobsData from "./MOCK_DATA.json"
import "../../styles/pagination.css"
import ReactDOM from 'react-dom';
import React from 'react';
import PostWrapper from "./PostWrapper"
import axios from "axios";


const user = {
    imageUrl:
        'https://dummyimage.com/100x100.png/5fa2dd/ffffff',
}


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


/*const applicants = [
    {
        "id": 1,
        "name": "Jada",
        "email": "jgranville0@dmoz.org",
        "skills": "DBs",
        "imageUrl": "https://dummyimage.com/100x100.png/ff4444/ffffff"
    }, {
        "id": 2,
        "name": "Xavier",
        "email": "xscougal1@bloomberg.com",
        "skills": "Gcov",
        "imageUrl": "https://dummyimage.com/100x100.png/5fa2dd/ffffff"
    }, {
        "id": 3,
        "name": "Dominique",
        "email": "dbodechon2@prlog.org",
        "skills": "Sheet Metal",
        "imageUrl": "https://dummyimage.com/100x100.png/dddddd/000000"
    }, {
        "id": 4,
        "name": "Dimitri",
        "email": "dtoderbrugge3@epa.gov",
        "skills": "Book Illustration",
        "imageUrl": "https://dummyimage.com/100x100.png/ff4444/ffffff"
    }, {
        "id": 5,
        "name": "Tabby",
        "email": "tsnare4@webeden.co.uk",
        "skills": "SNP genotyping",
        "imageUrl": "https://dummyimage.com/100x100.png/ff4444/ffffff"
    }, {
        "id": 6,
        "name": "Murielle",
        "email": "mwoods5@tumblr.com",
        "skills": "Yacht Racing",
        "imageUrl": "https://dummyimage.com/100x100.png/ff4444/ffffff"
    }, {
        "id": 7,
        "name": "Guillema",
        "email": "gmuris6@multiply.com",
        "skills": "SQR",
        "imageUrl": "https://dummyimage.com/100x100.png/cc0000/ffffff"
    }, {
        "id": 8,
        "name": "Loretta",
        "email": "lcamp7@mysql.com",
        "skills": "GSM-R",
        "imageUrl": "https://dummyimage.com/100x100.png/ff4444/ffffff"
    }, {
        "id": 9,
        "name": "Vern",
        "email": "vrudgley8@altervista.org",
        "skills": "People Skills",
        "imageUrl": "https://dummyimage.com/100x100.png/ff4444/ffffff"
    }, {
        "id": 10,
        "name": "Philis",
        "email": "phadye9@ebay.com",
        "skills": "HDF5",
        "imageUrl": "https://dummyimage.com/100x100.png/5fa2dd/ffffff"
    }, {
        "id": 11,
        "name": "Aleta",
        "email": "arollingsona@latimes.com",
        "skills": "CGI programming",
        "imageUrl": "https://dummyimage.com/100x100.png/cc0000/ffffff"
    }, {
        "id": 12,
        "name": "Ruthi",
        "email": "rcorteseb@mtv.com",
        "skills": "CPG Industry",
        "imageUrl": "https://dummyimage.com/100x100.png/cc0000/ffffff"
    }, {
        "id": 13,
        "name": "Lemmy",
        "email": "lpemberyc@123-reg.co.uk",
        "skills": "Rhetoric",
        "imageUrl": "https://dummyimage.com/100x100.png/cc0000/ffffff"
    }, {
        "id": 14,
        "name": "Emlen",
        "email": "eibarrad@weather.com",
        "skills": "VMD",
        "imageUrl": "https://dummyimage.com/100x100.png/dddddd/000000"
    }, {
        "id": 15,
        "name": "Erv",
        "email": "edittsone@ucoz.com",
        "skills": "ERDAS Imagine",
        "imageUrl": "httpss://dummyimage.com/100x100.png/dddddd/000000"
    }
    // More people...
]

const count = applicants.length;

const Modal = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal(
    <div>
        <div className='flex items-center justify-center bg-gray-400 bg-opacity-75 transition-opacity min-h-screen '>
            <div
                className="modal-wrapper max-w-7xl h-xl flex flex-col gap-8 items-end  border border-2 bg-white border rounded-lg"
                aria-modal aria-hidden tabIndex={-1} role="dialog">
                <div className="modal w-full flex flex-row items-center justify-between px-4">
                    <div className="pt-4">
                        <p>
                            Applications for this job
                        </p>
                    </div>
                    <div className="modal-header">
                        <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close"
                                onClick={hide}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
                <div className=" px-4 w-full flex flex-col gap-4 ">
                    <div className=" border border-2 bg-gray-900"></div>
                    <div className="">
                        Total {count} Applicants
                    </div>
                </div>

                <div
                    className="px-4 grid grid-cols-1 gap-4 sm:grid-cols-2 overflow-scroll py-4 bg-gray-300 border rounded-lg pb-3">
                    {applicants.map((person) => (
                        <div key={person.email}
                             className=" flex-col relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex gap-y-3 hover:border-gray-400">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt=""/>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <a href="/" className="focus:outline-none">
                                        <span className="absolute inset-0" aria-hidden="true"/>
                                        <p className="text-sm font-medium text-gray-900">{person.name}</p>
                                        <p className="text-sm text-gray-500 truncate">{person.email}</p>
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div>
                                    Skills
                                </div>
                                <div className="text-sm text-gray-500 truncate">
                                    {person.skills}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>, document.body
) : <><p>Null</p></>;*/

/*
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
]*/

/*const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);

    function toggle() {
        setIsShowing(!isShowing);
    }

    return {
        isShowing,
        toggle,
    }
};*/


export default function RecruiterHome() {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(3)

    let history = useHistory();

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/jobs`)
            setPosts(res.data)
            setLoading(false)
        }

        fetchPosts().then()
    }, [])

    if (loading && posts.length === 0) {
        return <h2>Loading...</h2>
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
    const howManyPages = Math.ceil(posts.length/postsPerPage)



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
                                    <p className="lg:text-2xl font-bold block xl:inline text-white tracking-wide font-open-sans ">Available
                                        <p className="lg:text-2xl font-bold block text-blue-500 xl:inline tracking-wide font-open-sans">Jobs</p>
                                    </p>
                                </div>

                                {/* Right Navbar options section on desktop */}
                                <div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
                                    <div className="hidden lg:block lg:ml-4">
                                        <div className="flex items-center">
                                            <button
                                                onClick={() => history.push('/postJobForm')}
                                                type="button"
                                                className="flex-shrink-0 rounded-full p-1 text-gray-100 hover:text-white focus:outline-none"
                                            >
                                                <span className="sr-only">View notifications</span>
                                                <p className="">Apply Job</p>
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
                                            Available Jobs
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
                              {/*Display each user*/}
                                <PostWrapper />
                            </ul>

                        </div>
                    </div>
                    {/* /End replace */}
                </div>
            </main>
        </div>
    )
}


