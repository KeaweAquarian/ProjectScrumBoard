import {Link} from "react-router-dom";


const About = () => {
    return (
        <>
        <h1>Personal Scrum Board</h1>
        <br />
        <h2>Designed by: Keawe Aquarian</h2>
        <p>Keawe is a recent IT graduate, with a focus on backend server side java programming. 
            Since completing his studies in Jan 2023, he has continued learning new technologies 
            such as react and modern concepts such as Agile Methodology. This project was an excellent 
            bridging of both fields of study, and since being completed has proven to be a useful
            tool for following projects. 
        </p>
        <br />

        <h2>Current Project</h2>
       
        <h3>Habit Chaining Daily Planner</h3>
        <p>A daily planner that incorporates concepts found in James Clear's book Atomic Habits.
            It aids users to design a pattern of daily habits such as exercise or learning a new language,
            by placing them in a daily order, each habit leading to the next. By chaining these actions together, 
            each action needing to be completed before the next, it allows tiny changes to create
            remarkable results. 
        </p>


        


    
        <Link to="/">Go Back</Link>
      
        </>

    )
  }

  export default About
