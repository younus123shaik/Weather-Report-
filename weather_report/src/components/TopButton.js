import React from 'react'

const TopButton = ({setQuery}) => {
    const cites = [
        {
          id: 1,
          title: "Saudi Arabia",
        },
        {
          id: 2,
          title: "Paris",
        },
        {
          id: 3,
          title: "New York",
        },
        {
          id: 4,
          title: "Australia",
        },
        {
          id: 5,
          title: "Japan",
        },
      ];
  return (
    <div className='flex items-center justify-around my-6'>
      {cites.map((item)=>(
        <button key={item.id} onClick={()=>setQuery({q:item.title})} className='text-white font-medium text-lg'>{item.title}</button>
      ))}
    </div>
  )
}

export default TopButton
