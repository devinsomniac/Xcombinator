import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import avatar from "./../assets/avatar.png"
import { Button } from './ui/button'

const StartupCard = ({ card }: { card: { _createdAt: Date, views: number, author: { _id: number, name: string }, _id: number, description: string, image: string, category: string, title: string } }) => {
    const { _createdAt, views, author: { _id: authorId, name }, _id, description, image, category, title } = card
    return (
        <li className='startup-card group'>
            <div className='flex-between'>
                <p className='startup_card_date'>{formatDate(_createdAt)}</p>
                <div className='flex gap-1.5'>
                    <EyeIcon className='size-6 text-primary' />
                    <span className='text-16-medium'>{views}</span>
                </div>
            </div>
            <div className='flex-between mt-5 gap-5'>
                <div className='flex-1'>
                    <Link href={`/user/${authorId}`}>
                        <p className='text-16-medium line-clamp-1'>{name}</p>
                    </Link>
                    <Link href={`/startup/${_id}`}>
                        <h3 className='text-26-semibold line-clamp-1'>{title}</h3>
                    </Link>
                </div>
                <Link href={`/user/${authorId}`}>
                    <img src="https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face.png" alt="placeholder" width={80} height={48} className="rounded-full" />
                </Link>
            </div>
            <Link href={`/startup/${_id}`}>
                <p className='startup-card_desc'>
                    {description}
                </p>
            </Link>
            <img src={image} alt='placeholder' className='startuo-card_img rounded-2xl' />
            <div className='flex-between gap-3 mt-5'>
                <Link href={`/?query=${category.toLocaleLowerCase()}`}>
                    <p className='text-16-medium'>{category}</p>
                </Link>
                <Button className='startup_btn bg-yellow-500 hover:bg-white' asChild>
                    <Link href={`/startup/${_id}`}>
                        Details
                    </Link>
                </Button>
            </div>
        </li>
    )
}

export default StartupCard