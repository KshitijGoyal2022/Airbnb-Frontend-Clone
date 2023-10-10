"use client"
import Image from 'next/image'
interface ListingCardProps{

}
const ListingCard = () => {
  return (
    <div className="col-span-1 cursor-pointer group">
        <div className ="aspect-square w-full relative overflow-hidden rounded-xl">
            <Image fill alt="listing" src="/images/Sample pic.png" className="object-cover h-full w-full group-hover:scale-110 transition"/>
        </div>

    </div>
  )
}

export default ListingCard