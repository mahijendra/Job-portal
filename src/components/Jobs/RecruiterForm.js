import React from "react"
import * as yup from "yup";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"


const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(32).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
    skills: yup.string().required(),
})

function RecruiterForm() {

    const {register, handleSubmit, formState: {errors}} = useForm({
        //connecting the yup to react hooks form
        resolver: yupResolver(schema)
    });

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

    let history = useHistory();
    return (
       <>
           <form className="flex flex-col gap-3 space-y-3"
                 onSubmit={handleSubmit(submitForm)}>
               {/*Recruiter and Candidate buttons*/}
               <div>
                   {/*Name*/}
                   <label htmlFor="email" className="block text-sm font-light text-gray-700">
                       Name*
                   </label>
                   <div className="mt-2">
                       <input
                           {...register('name')}
                           placeholder="Enter your Name"
                           name="name"
                           type="text"
                           autoComplete="name"
                           className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                       />
                       <p className="text-sm text-red-600">{errors.name?.message}</p>
                   </div>

                   {/*Email*/}
                   <label htmlFor="email" className="block text-sm font-light text-gray-700 pt-6">
                       Email address*
                   </label>
                   <div className="mt-2">
                       <input
                           {...register("email")}
                           placeholder="Enter your Email Id"
                           name="email"
                           type="email"
                           autoComplete="email"
                           className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                       />
                       <p className="text-sm text-red-600">{errors.email?.message}</p>
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
                               {...register("password")}
                               placeholder="Enter your password"
                               name="password"
                               type="password"
                               autoComplete="current-password"

                               className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                           />
                           <p className="text-sm text-red-600">{errors.password?.message}</p>

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
                               {...register("confirmPassword")}
                               placeholder="Enter your password"
                               name="confirmPassword"
                               type="password"
                               autoComplete="current-password"

                               className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                           />

                           <p className="text-sm text-red-600">{errors.confirmPassword && "Passwords should match!"}</p>

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
                           {...register("skills")}
                           placeholder="Enter comma seperated skills"
                           name="skills"
                           type="text"
                           className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                       />
                       <p className="text-sm text-red-600">{errors.skills?.message}</p>
                   </div>
               </div>

               {/*LogIn*/}
               <div className='flex flex-col gap-4 justify-center items-center'>
                   <button
                       onClick={() => history.push("/recruiterHome")}
                       type="submit"
                       className="w-2xl px-8 mt-4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-500 focus:outline-none"
                   >
                       Sign Up
                   </button>

                   <div>
                       <p>
                           Have an account? {" "}
                           <span onClick={() => history.push('/login')}
                                 className='text-blue-500 cursor-pointer'>Login</span>
                       </p>
                   </div>
               </div>
           </form>
       </>
    )
}

export default RecruiterForm