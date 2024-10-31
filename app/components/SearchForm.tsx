import React from 'react'
import Form from "next/form"
import SearchResetButton from './SearchResetButton'
import { Button } from '@/components/ui/button'
import { FaSearch } from "react-icons/fa";

const SearchForm = ({query}:{query?:string}) => {
    return (
        <div>
            <Form action="/" scroll={false} className='search-form'>
                <input
                    name='query'
                    defaultValue={query}
                    className='search-input'
                    placeholder='Search Start-Ups'
                />
                <div className='flex gap-3'>
                    {query && <SearchResetButton />}
                    <Button type='submit' className='bg-black rounded-full text-white'>
                        <FaSearch />
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default SearchForm