import React from 'react'
import SearchForm from '../../components/SearchForm'
import StartupCard from '@/components/StartupCard'

const page = async({searchParams} : {searchParams : Promise<{query?:string}>}) => {
    const query = (await searchParams).query
    const posts = [{
      _createdAt: new Date(),
      views : 55,
      author:{
        _id:1,
        name:"Inzamam"
      },
      _id : 1,
      description: "This is a description",
      image : "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category:"Robots",
      title : "We are the robots"
    }]
  return (
    <div>
        <section className='yellow_container'>
            <h2 className='heading'>PITCH YOUR STARTUP, CONNECT WITH ENTREPRENEURS</h2>
            <p className='sub-heading'>Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.</p>
            <SearchForm query = {query}/>
        </section>
        <section className='section_container'>
            <p className='text-30-semibold'>
              {query ? `Search result for "${query}" ` : 'All Start-ups'}
            </p>
            <ul className='mt-7 card_grid'>
              {posts?.length > 0 ? (
                posts.map((card)=>(
                  <StartupCard key={card?._id} card={card}/>
                ))
              ):(<p>No Startup Card Found</p>)}
            </ul>
        </section>  
    </div>
  )
}

export default page