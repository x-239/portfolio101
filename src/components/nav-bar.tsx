import React from 'react'
import Link from 'next/link'
export default function NavBar() {
  return (
    <nav  
    className=' h-15 '
    style={{ backgroundImage: "url('/Header.png')" }}
    >
      <div className=" flex justify-between items-center px-23 py-4 ">
        <div className=' text-lg font-bold text-white '> Abdulnour </div>
        <ul className=' flex gap-12 text-sm font-medium text-white '>
            <Link href="/" className=' font-semibold group relative inline-block overflow-hidden '>
            <span className=' inline-block transition-transform duration-500 group-hover:translate-y-full '>
              A
            </span>
            <span className=' inline-block transition-transform duration-400 group-hover:translate-y-full '>
              b
            </span>
            <span className=' inline-block transition-transform duration-300 group-hover:translate-y-full '>
              o
            </span>
            <span className=' inline-block transition-transform duration-200 group-hover:translate-y-full '>
              u
            </span>
            <span className=' inline-block transition-transform duration-100 group-hover:translate-y-full '>
              t
            </span>
            </Link>   
            <Link href="/" className=' font-semibold group relative inline-block overflow-hidden '>
            <span className=' inline-block transition-transform duration-700 group-hover:translate-y-full '>
              C
            </span>
            <span className=' inline-block transition-transform duration-600 group-hover:translate-y-full '>
              o
            </span>
            <span className=' inline-block transition-transform duration-500 group-hover:translate-y-full '>
              n
            </span>
            <span className=' inline-block transition-transform duration-400 group-hover:translate-y-full '>
              t
            </span>
            <span className=' inline-block transition-transform duration-300 group-hover:translate-y-full '>
              a
            </span>
            <span className=' inline-block transition-transform duration-200 group-hover:translate-y-full '>
              c
            </span>
            <span className=' inline-block transition-transform duration-100 group-hover:translate-y-full '>
              t
            </span>
            </Link>   
            <Link href="/" className=' font-semibold group relative inline-block overflow-hidden '>
            <span className=' inline-block transition-transform duration-400 group-hover:translate-y-full '>
              H
            </span>
            <span className=' inline-block transition-transform duration-300 group-hover:translate-y-full '>
              o
            </span>
            <span className=' inline-block transition-transform duration-200 group-hover:translate-y-full '>
              m
            </span>
            <span className=' inline-block transition-transform duration-100 group-hover:translate-y-full '>
              e
            </span>
            </Link>   
        </ul>
      </div>
    </nav>
  )
}