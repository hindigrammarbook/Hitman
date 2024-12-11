import React from 'react'

const Heading = ({text}) => {
  return (
    <div className="items-center justify-center border-y-8 border-zinc-600 flex bg-slate-900 py-14">
        <h1 className="text-6xl text-white font-times font-bold">{text}</h1>
    </div>
  )
}

export default Heading