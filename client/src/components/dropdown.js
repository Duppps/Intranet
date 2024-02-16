import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function DropdownItem({ text, link, icon, targetBlank }) {
    return (
        <Menu.Item>
            {({ active }) => (
                <a                    
                    href={link}
                    target={targetBlank ? '_blank' : ''}
                    rel={targetBlank ? 'noopener noreferrer' : ''}
                    className={classNames(
                        active ? 'bg-gray-800 text-red-400' : 'text-gray-100',
                        'block px-4 py-2 text-sm'
                    )}
                >
                    {icon && <img src={icon} className="rounded inline me-3" style={{ width: "20px", height: "20px" }} />}
                    <span>{text}</span>
                </a>
            )}
        </Menu.Item>
    );
}

function Dropdown({ text, children, dividy }) {
    let divideClasses = '';

    if (dividy === 'true') {
        divideClasses = 'divide-y divide-gray-200';
    }

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex text-white hover:text-red-400">
                    {text}
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
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
                <Menu.Items className={`bg-gray-950 border border-gray-500 absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${divideClasses}`}>
                        {React.Children.map(children, (child) => {
                            if (React.isValidElement(child)) {
                                return React.cloneElement(child, {});
                            }
                            return null;
                        })}
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default {
    Dropdown,
    DropdownItem
}