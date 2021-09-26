import {Fragment} from 'react'
import {Popover, Transition} from '@headlessui/react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import {useState} from "react";
import RecruiterForm from "../Jobs/RecruiterForm";
import CandidateForm from "../Jobs/CandidateForm";


//defining schema, schema is the object of the shape
const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(32).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
    skills: yup.string().required(),
})

export default function SignUp() {

    const [active, setActive] = useState()

    const recruiterForm = () => setActive("Recruiter")
    const candidateForm = () => setActive("Candidate")

    let history = useHistory();

    async function submitForm(data) {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        })

        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result))
        /*localStorage.setItem("token", result.data.token)*/
        history.push("/postJob")
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Popover as="header" className=" background pb-24 bg-indigo-600 h-md ">
                {({open}) => (
                    <>
                        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                            <div className="relative py-5 flex items-center justify-center lg:justify-between ">
                                {/* Logo */}
                                <div
                                    onClick={() => {
                                        history.push('/hero')
                                    }}
                                    className="max-w-xl absolute left-0 flex-shrink-0 lg:static mt-2 cursor-pointer">
                                    <p className="lg:text-2xl font-bold block xl:inline text-white tracking-wide font-open-sans ">My
                                        <p className="lg:text-2xl font-bold block text-blue-500 xl:inline tracking-wide font-open-sans">Jobs</p>
                                    </p>
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

            <div
                className="-mt-64 flex justify-center items-center sm:mx-auto max-w-xl px-4 sm:px-6 lg:px-8 font-open-sans">
                {/* Replace with your content */}
                <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className=" rounded-lg h-80">
                        <div className="flex flex-col gap-4 mb-5">
                            <div className="text-md tracking-wide p-0">
                                SignUp as {active}
                            </div>
                            <div className="flex flex-row gap-4">
                                <div>
                                    <button
                                        onClick={()=>setActive(recruiterForm)}
                                        type="button"
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 flex align-center justify-center gap-2"
                                    >
                                        <img src="research.png" alt='' className='h-5 w-5 pt-1'/>
                                        Recruiter
                                    </button>
                                </div>

                                <div>
                                    <button
                                        onClick={()=> setActive(candidateForm)}
                                        type="button"
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 flex align-center justify-center gap-2"
                                    >
                                        <img src="cv.png" alt='' className='h-5 w-5 pt-1'/>
                                        Candidate
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/*Form Starts*/}

                        <>
                            {active && <RecruiterForm /> }
                        </>

                        <>
                            {!active && <CandidateForm /> }
                        </>

                    </div>
                </div>
                {/* /End replace */}
            </div>
        </div>
    )
}