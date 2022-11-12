import { LangProvider } from "./lang/context";

import { Contact, Footer, NavBar, Projects, Skills, Welcome } from "./components";

export const Porfolio = () => {
  return (
    <LangProvider>
      <div className="main-container">

        <NavBar />
        
        <Welcome />
        <Skills />
        <Projects />
        <Contact />
        <Footer />

      </div>
    </LangProvider>
  )
}
