import Button from "./components/Button"
import CheckBox from "./components/CheckBox"
import NavBar from "./components/NavBar"
import ProjectCard from "./components/ProjectCard"
import moviesImage from "./assets/movies.png"
import foodImage from "./assets/food.png"

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
          <h2 
            className="mb-[20px] text-center text-2xl sm:text-[30px] text-dark font-bold font-heading">
              My Skills
          </h2>
          <div className="grid sm:mx-[20px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <span>
              <CheckBox name="Javascript" checked />
              <CheckBox name="Typescript" checked  />
              <CheckBox name="React" checked  />
              <CheckBox name="NextJS" checked  />
              <CheckBox name="Sass" checked  />
            </span>
            
            <span>
              <CheckBox name=" TailwindCSS" checked  />
              <CheckBox name="Redux Toolkit" checked  />
              <CheckBox name="Unit testing with Vitest" checked  />
              <CheckBox name="End-to-end testing with Cypress" checked  />
              <CheckBox name="Performance optimization" checked  />
            </span>
            
            <span>
              <CheckBox name="Search Engine Optimization" checked  />
              <CheckBox name="Web Accessibility Compliance" checked  />
              <CheckBox name="Rest API" checked />
              <CheckBox name="React Native"  />
              <CheckBox name="Microservices"  />
            </span>
          </div>
        </section>

        <section className="mb-[50px] grid justify-center">
        <h2 
          className="mb-[20px] text-center text-2xl sm:text-[30px] text-dark font-bold font-heading">
            My Projects
        </h2>

        <ProjectCard 
          name="Movies"
          url="https://movies.nathanasowata.com/"
          github="https://github.com/NathanAsowata/movies"
          img={moviesImage}
          >
            <p>
              This web app allows you find details about movies, TV shows or related people.
              You can search for a movie, read the movie plot, see the cast and find similar movies.
            </p>
            <br />
            <p>
              I built this web app with NextJS, styled it with SCSS modules. The data used this project was 
              provided by TheMovieDB's API
            </p>
        </ProjectCard>

        <ProjectCard 
          name="Banquet App"
          url="https://food.nathanasowata.com/"
          github="https://github.com/NathanAsowata/banquet-app"
          img={foodImage}
          >
            <p>
              A web app that allows you to find recipes for popular dishes from across the globe.
            </p>
            <br />
            <p>
              Find the recipe for a popular meal, from Big Macs and Krispy Kreme Donuts to
              Moroccan carrot soup and spaghetti bolognese. Get the recipes. Watch video tutorials.
              Make the meal at home.
            </p>
        </ProjectCard>
        </section>
      </main>
      <footer className="bg-light p-8 text-center">
        &copy; {new Date().getFullYear()}. All rights reserved. Designed and built by me, Nathan Asowata.
      </footer>
    </div>
  )
}

export default App