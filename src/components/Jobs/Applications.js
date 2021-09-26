import {Fragment, useState} from 'react'
import React from 'react';
import ReactDOM from 'react-dom';

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

const Modal = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div className='flex items-center justify-center bg-gray-400 bg-opacity-75 transition-opacity min-h-screen '>
            <div className="modal-wrapper max-w-7xl h-xl flex flex-col gap-8 items-end  border border-2 bg-white border rounded-lg"
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
    </React.Fragment>, document.body
) : null;

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
    // More people...
]

const count = applicants.length;

export default function Example(props) {
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