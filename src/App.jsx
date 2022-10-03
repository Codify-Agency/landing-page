import { loadLang } from "./utils"

import Header from "./components/Header"
import Footer from "./components/Footer"
import DevelopmentSection from "./components/sections/Development"
import Calendly from "./components/Calendly"

import "./styles/App.scss"

function App() {
  loadLang();

  return (
    <>
      <Header />
      <DevelopmentSection />
      <Footer />
      <Calendly />
    </>
  )
}

export default App
