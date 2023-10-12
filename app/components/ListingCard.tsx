"use client"
import Image from 'next/image'

import HeartButton from './HeartButton'
interface ListingCardProps{

}
const ListingCard = () => {
  return (
    <div className="col-span-1 cursor-pointer group">
        <div className ="aspect-square w-full relative overflow-hidden rounded-xl mt-28">
            <Image fill alt="listing" src="/images/Sample pic.png" className="object-cover h-full w-full group-hover:scale-110 transition"/>
            <div className ="absolute top-3 right-3">
              <HeartButton listingId='1' />
            </div>
        </div>
    </div>
  )
}

export default ListingCard