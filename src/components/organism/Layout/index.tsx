import React from 'react'

interface Props {
    children: React.ReactNode;
}
function Index({children}: Props) {
  return (
    <div className='flex flex-col items-center bg-[#F1F5F9] w-full'>
        {children}
    </div>
  )
}

export default Index