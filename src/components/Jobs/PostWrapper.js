import {LocationMarkerIcon} from "@heroicons/react/outline";


 export default function PostWrapper(){
    return(
        <>
            <li className="col-span-1 bg-white rounded-lg shadow flex flex-col">
                <div className="w-full flex items-center justify-between p-6 space-x-6">
                    <div className="flex-1 truncate">
                        <div className="flex items-center space-x-3">
                            <h3 className="text-gray-900 text-lg font-medium truncate">{/* {job.jobTitle} */}</h3>
                        </div>
                        <p className="mt-1 text-gray-500 text-sm truncate">{/*{job.description}*/}</p>
                    </div>
                </div>

                <div className="flex flex-row justify-between items-center lg:gap-x-12">
                    <div className="w-xl flex mx-14">
                        <a
                            href="/"
                            className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                        >
                            <LocationMarkerIcon
                                className="w-5 h-5 text-gray-400 flex-shrink-0 text-gray-400 mr-1"
                                aria-hidden="true"/>
                            <span className="">{/*{job.location}*/}</span>
                        </a>
                    </div>
                </div>
            </li>
        </>
    )
}