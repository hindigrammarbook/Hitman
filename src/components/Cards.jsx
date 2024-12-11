import React from 'react'

const Cards = ({head1,head2, head4, para4,head3,para1,para2,para3}) => {
  return (
    <>
    <div className="flex w-full gap-10 h-auto mt-12 border-2 border-neutral-700 px-8 py-10 bg-slate-800 rounded-md">
        <div className="w-[33.3%] h-96 bg-white rounded-2xl text-justify"><h3 className='text-3xl py-8 my- font-opensas font-bold flex justify-center items-center'>{head1}</h3>
        <p className=" text-justify text-xl px-12">{para1}</p>
        </div>
        <div className="w-[33.3%] h-96 bg-white rounded-2xl"><h3 className='text-3xl py-8 my- font-opensas font-bold flex justify-center items-center'>{head2}</h3>
        <p className=" text-justify text-xl px-12">{para2}</p>
        </div>
        <div className="w-[33.3%] h-96 bg-white rounded-2xl"><h3 className='text-3xl py-8 my- font-opensas font-bold flex justify-center items-center'>{head3}</h3>
        <p className=" text-justify text-xl px-12">{para3}</p>
        </div> 
        <div className="w-[33.3%] h-96 bg-white rounded-2xl"><h3 className='text-3xl py-8 my- font-opensas font-bold flex justify-center items-center'>{head4}</h3>
        <p className=" text-justify text-xl px-12">{para4}</p></div>
    </div>
    
    </>
    
  )
}

export default Cards