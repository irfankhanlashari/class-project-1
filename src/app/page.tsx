import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div>
      <Link href='#'>home</Link>
      <Link href='./about'>about</Link>
      <Link href='./skills'>skills</Link>
      <Link href='./contect'>contect</Link>
      <Link href='./portfolio'>portfolio</Link>
      
     <h1 className='text-[50px] text-black'>this is home page</h1>
    </div>
  )
}

export default page
