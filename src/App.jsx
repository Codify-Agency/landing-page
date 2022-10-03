import { loadLang } from "./utils"

import Header from "./components/Header"
import Footer from "./components/Footer"
import DevelopmentSection from "./components/sections/Development"

import "./styles/App.scss"

function App() {
  loadLang();

  return (
    <>
      <Header />
      <DevelopmentSection />
      <Footer />
    </>
  )
}

export default App
