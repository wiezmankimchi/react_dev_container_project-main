import React from 'react'
import Header from './Header'
import Main from './Main'
import Sidebar from './Sidebar'

function Layout() {
    return (
        <div class="h-screen w-full bg-white relative flex overflow-hidden">
            <Sidebar />
            <div class="w-full h-full flex flex-col justify-between">
                <Header />
                <Main />
            </div>
        </div>
    )
}

export default Layout