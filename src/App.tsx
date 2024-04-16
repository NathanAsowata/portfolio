import Button from "./components/Button"
import CheckBox from "./components/CheckBox"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <div>
      <NavBar />
      <header className="h-[500px] grid place-content-center">
          <h1 className="text-center text-[55px] text-dark font-bold font-heading">
            Frontend Developer
          </h1>
          <div className="mt-[10px] text-center">
            <Button 
              name="LinkedIn"
              url="https://www.linkedin.com/in/nathanasowata/"
              />
            <Button 
              name="GitHub"
              url="https://github.com/NathanAsowata"
              />
          </div>
      </header>
      <main className="px-[25px]">
        <section className="mb-[50px]">
          <h2 className="mb-[20px] text-center text-2xl sm:text-[30px] text-dark font-bold font-heading">My Skills</h2>
          <div className="grid sm:mx-[20px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <span>
              <CheckBox name="Javascript" checked />
              <CheckBox name="Typescript" checked  />
              <CheckBox name="React" checked  />
              <CheckBox name="NextJS" checked  />
              <CheckBox name="Styling with Sass, and TailwindCSS" checked  />
            </span>
            
            <span>
              <CheckBox name="Custom Data Fetching" checked  />
              <CheckBox name="Complex State management with Redux Toolkit" checked  />
              <CheckBox name="Unit testing with Vitest" checked  />
              <CheckBox name="End-to-End testing with Cypress" checked  />
              <CheckBox name="Performance optimization" checked  />
            </span>
            
            <span>
              <CheckBox name="Search Engine Optimization" checked  />
              <CheckBox name="Web Accessibility Compliance" checked  />
              <CheckBox name="Cross-platform software development" />
              <CheckBox name="Object Oriented Programming"  />
              <CheckBox name="Microservices"  />
            </span>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App