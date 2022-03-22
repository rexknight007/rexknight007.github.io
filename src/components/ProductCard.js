import React from 'react';
import Img from '../assets/images/headset.png';
import DeleteIcon from './DeleteIcon';
import MinusIcon from './MinusIcon';
import PlusIcon from './PlusIcon';

const ProductCard = ({count,setCount}) => {
    
  return (
    <div className='flex items-start gap-5 bg-[#1F1F1F] relative my-[60px]'>
        <div className='h-full p-3 bg-[#262626] rounded-[10px] flex items-center justify-center shadow prodImg'>
            <img src={Img} alt=''/>
</div>
<div className='flex flex-col justify-between h-full'>
    <div className='flex flex-col items-start gap-1'>
        <span className='text-white font-semibold text-lg leading-none'>Sony ASR -48</span>
        <span className='text-white font-semibold text-base leading-none'> Wireless Headphones</span>
        <span className='text-white font-semibold text-sm leading-none'>$99.00</span>
        

    </div>
    <div className='flex items-center gap-2'>
        <span className='bg-[#262626] rounded-[3px] group hover:bg-white w-5 h-5 flex items-center justify-center cursor-pointer transition-all duration-300 ease-linear'
        onClick={()=>{
            count>0 ? setCount(count-1):setCount(0)}}>
            <MinusIcon className='text-white group-hover:text-[#262626]'/>
            </span>
            <span className='text-white font-semibold text-lg'>{count<0 ? 0 : count}</span>
            <span className='bg-[#262626] rounded-[3px] group hover:bg-white w-5 h-5 flex items-center justify-center cursor-pointer transition-all duration-300 ease-linear'
            onClick={()=>setCount(count+1)}>
            <PlusIcon className='text-white group-hover:text-[#262626]'/>
            </span>

        
    </div>

</div>
<DeleteIcon className='text-[#B8B8B8] absolute bottom-2 right-2 cursor-pointer hover:text-red-500 transition-all duration-300 ease-linear'/>

    </div>
  )
}

export default ProductCard