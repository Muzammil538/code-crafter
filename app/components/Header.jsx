import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
      <header className='flex'>
        <h1><Link href="/">Code Crafters</Link></h1>
      </header>
    </>
  )
}

export default Header