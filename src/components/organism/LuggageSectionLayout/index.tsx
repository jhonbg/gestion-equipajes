import React from 'react'

interface Props{
    children: React.ReactNode;
}
function index({children}: Props) {
  return (
    <div className="grid grid-cols-2 gap-3">
        {children}
</div>
  )
}

export default index