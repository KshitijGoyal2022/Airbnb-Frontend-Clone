"use client"

import { AiOutlineHeart } from "react-icons/ai";

interface HeartButtonProps{
    listingId: string;
}

const HeartButton:React.FC<HeartButtonProps> = ({listingId}) => {
    const hasFavorited = false;
    const toggleFavorite = () =>{}

  return (
    <div onClick={toggleFavorite} className="relative hover:opacity-80 transition cursor-pointer">
        <div className="flex flex-row justify-between absolute -top-[2px] -right-[2px]">
            <AiOutlineHeart size={28} className="fill-white " />
            <div className="font-bold pl-1 pt-1">{listingId}</div>
        </div>
        
    </div>
  )
}

export default HeartButton