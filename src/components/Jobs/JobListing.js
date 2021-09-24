import {Disclosure, Menu, Transition} from '@headlessui/react'
import React from 'react';
import {
    MenuIcon,
    XIcon,
    ChevronDownIcon,
    LocationMarkerIcon,
    HomeIcon
} from '@heroicons/react/outline'
import {useHistory} from "react-router-dom";
import {Fragment, useState} from 'react'
import ReactDOM from "react-dom";


/*MODAL*/

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);

    function toggle() {
        setIsShowing(!isShowing);
    }

    return {
        isShowing,
        toggle,
    }
};

const applicants = [
    {
        "id": 1,
        "name": "Jada",
        "email": "jgranville0@dmoz.org",
        "skills": "DBs",
        "imageUrl": "http://dummyimage.com/100x100.png/ff4444/ffffff"
    }, {
        "id": 2,
        "name": "Xavier",
        "email": "xscougal1@bloomberg.com",
        "skills": "Gcov",
        "imageUrl": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
    }, {
        "id": 3,
        "name": "Dominique",
        "email": "dbodechon2@prlog.org",
        "skills": "Sheet Metal",
        "imageUrl": "http://dummyimage.com/100x100.png/dddddd/000000"
    }, {
        "id": 4,
        "name": "Dimitri",
        "email": "dtoderbrugge3@epa.gov",
        "skills": "Book Illustration",
        "imageUrl": "http://dummyimage.com/100x100.png/ff4444/ffffff"
    }, {
        "id": 5,
        "name": "Tabby",
        "email": "tsnare4@webeden.co.uk",
        "skills": "SNP genotyping",
        "imageUrl": "http://dummyimage.com/100x100.png/ff4444/ffffff"
    }, {
        "id": 6,
        "name": "Murielle",
        "email": "mwoods5@tumblr.com",
        "skills": "Yacht Racing",
        "imageUrl": "http://dummyimage.com/100x100.png/ff4444/ffffff"
    }, {
        "id": 7,
        "name": "Guillema",
        "email": "gmuris6@multiply.com",
        "skills": "SQR",
        "imageUrl": "http://dummyimage.com/100x100.png/cc0000/ffffff"
    }, {
        "id": 8,
        "name": "Loretta",
        "email": "lcamp7@mysql.com",
        "skills": "GSM-R",
        "imageUrl": "http://dummyimage.com/100x100.png/ff4444/ffffff"
    }, {
        "id": 9,
        "name": "Vern",
        "email": "vrudgley8@altervista.org",
        "skills": "People Skills",
        "imageUrl": "http://dummyimage.com/100x100.png/ff4444/ffffff"
    }, {
        "id": 10,
        "name": "Philis",
        "email": "phadye9@ebay.com",
        "skills": "HDF5",
        "imageUrl": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
    }, {
        "id": 11,
        "name": "Aleta",
        "email": "arollingsona@latimes.com",
        "skills": "CGI programming",
        "imageUrl": "http://dummyimage.com/100x100.png/cc0000/ffffff"
    }, {
        "id": 12,
        "name": "Ruthi",
        "email": "rcorteseb@mtv.com",
        "skills": "CPG Industry",
        "imageUrl": "http://dummyimage.com/100x100.png/cc0000/ffffff"
    }, {
        "id": 13,
        "name": "Lemmy",
        "email": "lpemberyc@123-reg.co.uk",
        "skills": "Rhetoric",
        "imageUrl": "http://dummyimage.com/100x100.png/cc0000/ffffff"
    }, {
        "id": 14,
        "name": "Emlen",
        "email": "eibarrad@weather.com",
        "skills": "VMD",
        "imageUrl": "http://dummyimage.com/100x100.png/dddddd/000000"
    }, {
        "id": 15,
        "name": "Erv",
        "email": "edittsone@ucoz.com",
        "skills": "ERDAS Imagine",
        "imageUrl": "http://dummyimage.com/100x100.png/dddddd/000000"
    }
]

const count = applicants.length;



const Modal = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div className='flex items-center justify-center bg-gray-500 bg-opacity-75 transition-opacity min-h-screen '>
            <div className="modal-wrapper max-w-7xl h-xl flex flex-col gap-8 items-end  border border-2 bg-gray-100 border rounded-lg"
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

                <div className="px-4 grid grid-cols-1 gap-4 sm:grid-cols-2 overflow-scroll py-4 bg-gray-300 border rounded-lg pb-3">
                    {applicants.map((person) => (
                        <div key={person.email}
                             className=" flex-col relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex gap-y-3 hover:border-gray-400">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt=""/>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <a href="#" className="focus:outline-none">
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
    </React.Fragment>, document.body
) : null;

function ModalApplication(props) {
    const {isShowing, toggle} = useModal();

    return (
        <>
            <div className="App">
                <button className="button-default" onClick={toggle}>Show Modal</button>
                <Modal
                    isShowing={isShowing}
                    hide={toggle}
                />
            </div>
        </>
    )
}



/*JOB LISTS*/
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

export default function JobListing(props) {
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
                <header className="py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className='flex flex-col'>
                            <div className="w-24 flex ml-2">
                                <a
                                    href="/"
                                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                                >
                                    <HomeIcon className="w-5 h-5 text-gray-400" aria-hidden="true"/>
                                    <span className="ml-1 text-white text-md text-gray-200 tracking-wide">Home</span>
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
            </div>

            <main className="-mt-32">
                <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
                    {/* Replace with your content */}
                    <div className="rounded-lg px-5 py-6 sm:px-6">
                        <div className="h-sm rounded-lg">
                            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {people.map((person) => (
                                    <li key={person.location}
                                        className="col-span-1 bg-white rounded-lg shadow flex flex-col">
                                        <div className="w-full flex items-center justify-between p-6 space-x-6">
                                            <div className="flex-1 truncate">
                                                <div className="flex items-center space-x-3">
                                                    <h3 className="text-gray-900 text-2xl font-medium truncate">{person.job}</h3>
                                                </div>
                                                <p className="mt-1 text-gray-500 text-sm truncate">{person.description}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="-mt-px flex align-center justify-center">
                                                <div className="w-24 flex ml-4">
                                                    <a
                                                        href="/"
                                                        className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                                                    >
                                                        <LocationMarkerIcon className="w-5 h-5 text-gray-400" aria-hidden="true"/>
                                                        <span className="ml-1">Bengaluru</span>
                                                    </a>
                                                </div>
                                                <div className="-ml-px w-0 flex-1 flex">
                                                    <a
                                                        href="/"
                                                        className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                                                    >
                                                        <div
                                                            className='flex flex-col gap-8 justify-center items-center'>
                                                            <button
                                                                onClick={props.toggle}
                                                                type="submit"
                                                                className="w-2xl px-4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-500 focus:outline-none"
                                                            >
                                                                View Application
                                                            </button>

                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                    {/* /End replace */}
                </div>
            </main>
        </div>
    )
}

