
import Navigation from '@/components/site/navigation'
import React from 'react'

type Props = {}

const layout = ({children}:{children:React.ReactNode }) => {
  return (
    <main className='h-full'>
        <Navigation />
        {children}
    </main>
  )
}

export default layout