import React from 'react'
import { Link, usePage } from "@inertiajs/react"

function NavItem({ href, className, children }) {
    return (
        <li className={`text-lg text-black bg-stone-100 p-1 ${className}`}>
            <Link href={href}>
                {children}
            </Link>
        </li>
    )
}


export default function Header() {

    const { user } = usePage().props

    return (
        <header className="w-full h-20 p-4 bg-emerald-600 flex items-center justify-between">
            <span className="text-4xl font-semibold text-white">Logo</span>

            <ul className='flex items-center gap-2'>
                {
                    user?.id ? (
                        // Shows these buttons if Logged in
                        <>
                            <NavItem href="/dashboard">Home</NavItem>

                            <NavItem href="/create-blog">CreateBlog</NavItem>
                            
                            <NavItem href="/about">About</NavItem>

                            <NavItem href="/logout">Logout</NavItem>
                        </>
                    ) :
                        (
                            // Shows these buttons if logged out
                            <>
                                <NavItem href="/login">Login</NavItem>
                                
                                <NavItem href="/">Register</NavItem>
                                
                                <NavItem href="/about">About</NavItem>
                            </>
                        )
                }
            </ul >
        </header >
    )
}
