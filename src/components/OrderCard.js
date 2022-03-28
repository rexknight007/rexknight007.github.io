import React from 'react'

const OrderCard = ({count}) => {
  return (
    <div className='flex flex-col items-start w-full gap-3 mt-[70px] mb-11'>
        <span className='text-white font-semibold text-xl'>Order Info</span>
        <hr className='border border-[#262626] w-full'/>
        <div className='w-full flex items-center justify-between'>
            <span className='text-[#CCCCCC] font-semibold text-base'>Subtotal</span>
            <span className='text-[#CCCCCC] font-semibold text-base'>{`$${count*199.00}`}</span>
        </div>
        <div className='w-full flex items-center justify-between'>
            <span className='text-[#CCCCCC] font-semibold text-base'>Shipping Cost</span>
            <span className='text-[#CCCCCC] font-semibold text-base'>{`+$${10.00}`}</span>
        </div>
        <div className='w-full flex items-end justify-between'>
            <span className='text-white font-semibold text-xl'>Total</span>
            <span className='text-white font-semibold text-xl'>{`$${(count*199.00)+10.00}`}</span>
        </div>

    </div>
  )
}

export default OrderCard