import React from 'react'

export const ErrorDiv = ({children}) => {
    return (
        <div className='bg-red-600 p-3 mb-4 rounded-md text-center font-bold text-white uppercase'>
            {children}
        </div>
    )
}
