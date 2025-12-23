import "@/app/styles/global.css"
import {Navbar} from "./src/app/layouts/Navbar.tsx";
import {Section} from "./src/app/layouts/Section.tsx"
import {Footer} from "./src/app/layouts/Footer.tsx"

function App() {

  return (
    <main className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <Navbar/>
      <Section />
      <Footer />
    </main>
  )
}

export default App
