import React from 'react'
import Header from './components/Header'
import MainContent from './components/main-content/MainContent'
import Footer from './components/Footer'
import Loader from './components/Loader'

function App() {
  return (
    <>
    <Loader />
    <Header />
    <MainContent />
    <Footer />
    </>
    )
  }

  export default App