import React from 'react'
import SearchForm from '../components/SearchForm'

const page = async({searchParams} : {searchParams : Promise<{query?:string}>}) => {
    const query = (await searchParams).query
  return (
    <div>
        <section className='yellow_container'>
            <h2 className='heading'>PITCH YOUR STARTUP, CONNECT WITH ENTREPRENEURS</h2>
            <p className='sub-heading'>Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.</p>
            <SearchForm query = {query}/>
        </section>
    </div>
  )
}

export default page