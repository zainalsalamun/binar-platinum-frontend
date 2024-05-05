import React from "react";
import Footer from '../components/Dashboard/Footer'
import NavBar from '../components/Dashboard/NavBar'

const About = () => {
  return (
    <div>
      <NavBar />
      <h2 className="col-12 py-5 text-center">About</h2>
      <h3 className="col-12 py-5 text-center">
        What started as a tiny mail order company in rural Sweden has now become
        a global home furnishing brand that brings affordability, design and
        comfort to people all over the world. We may have come a long way since
        our humble beginnings, but our vision remains the same: to create a
        better everyday life for the many people. Here you can explore the IKEA
        story and learn more about our heritage and the events that shaped us.
      </h3>
      <Footer />
      <h2 />
    </div>
  )
}
export default About
