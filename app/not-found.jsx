import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='h-[50vh] w-1/2 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-7 text-center'>
      <h3 className='text-3xl font-body pb-3'>Page Not Found</h3>
      <Link href={"/"} className='py-3 px-6 text-slate-50 bg-sky-900'>Back Home</Link>
    </div>
  )
}

export default NotFound
