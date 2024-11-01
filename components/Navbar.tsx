import { auth, signIn, signOut } from '@/auth'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Navbar = async () => {
    const session = await auth()
    return (
        <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
            <nav className='flex justify-between items-center'>
                <Link href="/">
                    <img src='/logo.png' alt='logo' width={144} height={30} />
                </Link>
                <div className='flex items-center gap-5 text-black '>
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>Create</span>
                            </Link>
                            <form action={
                                async () => {
                                    "use server"; await signOut()
                                }}>
                                <Button type='submit' className='bg-yellow-400 border-black border-[3px] hover:bg-black hover:text-yellow-400'>
                                    <span>Log Out</span>
                                </Button>
                            </form>
                            <Link href={`/user/${session?.user?.id}`}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    ) : (
                        <form action={
                            async () => {
                                "use server"; await signIn("Google")
                            }}>
                            <Button type='submit' className='bg-yellow-300 text-black border-[2px] border-black'>
                                <img width="25" height="40" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"  />
                                <span>Log In</span>
                            </Button>
                        </form>
                    )}
                </div>
            </nav>
        </header>

    )
}

export default Navbar