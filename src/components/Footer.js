import React from 'react'

function Footer() {
    return (

        <div className="max-w-2xl mx-auto">

            <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">

                <ul className="flex flex-wrap items-center mt-3 sm:mt-0">
                    <li>
                        <div className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">About</div>
                    </li>
                    <li>
                        <div className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Privacy
                            Policy</div>
                    </li>
                    <li>
                        <div className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Licensing</div>
                    </li>
                    <li>
                        <div className="text-sm text-gray-500 hover:underline dark:text-gray-400">Contact</div>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer