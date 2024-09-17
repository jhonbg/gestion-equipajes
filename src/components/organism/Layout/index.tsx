import React from 'react'

interface Props {
    children: React.ReactNode;
}
function Index({children}: Props) {
  return (
    <div className='flex justify-center'>
        {children}
    </div>
  )
}

export default Index