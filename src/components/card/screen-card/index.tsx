import { title } from 'process'
import React from 'react'

type ScreenCardProps = {
title:string
}

export default function ScreenCard(props: ScreenCardProps) {
  const {title} = props
    return ( 
    <div
      style={{
        // borderRadius: "10px",
        background: '#fff',
        // boxShadow: `0px 15px 20px 0px rgba(70, 6, 81, 0.12)`,
        width:"100%"
      }}
      className="row m-0 p-0 py-1 ms-1  mt-2 justify-content-center "
    >
    <h3 className='ScreenTitle'>
     {title}
     </h3>
    </div>
  )
}
