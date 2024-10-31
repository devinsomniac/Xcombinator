"use client"
import { Button } from '@/components/ui/button'
import Link from 'next/link';
import React from 'react'
import { MdCancel } from "react-icons/md";

const SearchResetButton = () => {
    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement
        if (form) form.reset()
    }
  return (
    <div>
        <Button className='bg-black rounded-full text-white' type='reset' onClick={reset}>
          <Link href="/">
          <MdCancel />
          </Link>
        </Button>
    </div>
  )
}

export default SearchResetButton