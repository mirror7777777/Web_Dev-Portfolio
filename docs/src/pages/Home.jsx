import React, { Suspense } from 'react'
import ThemeToggle from '../component/themeToggle'
import Header from '../component/header'
import Hero from '../component/hero'
import Model from '../component/ThreeD/models'
import ClientCard from '../component/clientCard'




export default function Home() {
  return (
    <div className=''>
      <Model/>
      <Header/>
      <ThemeToggle />
      <Hero/>
    </div>
  )
}
