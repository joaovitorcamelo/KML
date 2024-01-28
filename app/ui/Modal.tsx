import {XMarkIcon} from '@heroicons/react/24/outline';
import React       from "react";

export function Modal({children}: { children: React.ReactNode }) {
    return (
        // modal background
        <div className={'absolute -top-0 w-full h-full z-10 bg-black bg-opacity-70'}>
            {/* modal body*/}
            <div
                className={'relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white h-64 w-max border rounded-lg py-6 px-12'}
            >
                {children}
            </div>
        </div>
    )
}

// eslint-disable-next-line react/display-name
Modal.Header = ({children, closeButton = false}: { children: React.ReactNode, closeButton: boolean }) => {
    return (
        <div className={'relative flex flex-row gap-x-32'}>
            {children}
            <XMarkIcon className={closeButton ? 'w-7 h-auto justify-self-end' : 'hidden'}/>
        </div>
    )
}

// eslint-disable-next-line react/display-name
Modal.Body = ({children}: { children: React.ReactNode }) => {
    return (
        <div>{children}</div>
    )
}