import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import ProductDetail from './ProductDetail'

function App() {

  return (
    <>
      <Header />
      <h1>Demo Redux</h1>
      <ProductDetail />
    </>
  )
}

export default App
