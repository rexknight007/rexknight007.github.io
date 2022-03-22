import React from 'react'
import RightArrowIcon from './RightArrowIcon'

const DetailsCard = ({title,subtitle1,subtitle2,img,className}) => {
  return (
    <div className={`w-full flex flex-col items-start gap-3 ${className}`}>
        <span className='text-white text-xl font-semibold capitalize'>{title}</span>
        <div className='flex items-center justify-center gap-3 w-full cursor-pointer hover:opacity-70 transition-all duration-200 ease-linear'>
        <div className=' w-[58px] h-[58px] bg-[#262626] rounded-[10px] flex items-center justify-center shadow prodImg'>
                 <img src={img} alt=''/>
            </div>
            <div className='flex flex-col items-start'>
                 <span className='text-[#B8B8B8] font-semibold text-sm'>{subtitle1}</span>
                 <span className='text-[#B8B8B8] font-semibold text-sm'>{subtitle2}</span>
            </div>
            <RightArrowIcon className='text-[#6D6D6D] ml-auto'/>

        </div>

    </div>
  )
}

export default DetailsCard