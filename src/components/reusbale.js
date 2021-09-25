import {Menu, Transition} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/outline";

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