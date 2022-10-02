import { loadLang } from "./utils"

import Header from "./components/Header"
import Footer from "./components/Footer"

import "./styles/App.scss"

function App() {
  loadLang();

  return (
    <>
      <Header />
      <Footer />
    </>
  )
}

export default App
