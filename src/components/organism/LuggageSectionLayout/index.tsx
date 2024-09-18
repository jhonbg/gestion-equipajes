import React from 'react'

interface Props{
    children: React.ReactNode;
}
function Index({children}: Props) {
  return (
    <div className="grid grid-cols-2 gap-3">
        {children}
</div>
  )
}

export default Index