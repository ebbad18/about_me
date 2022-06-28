import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { BsFillAwardFill } from "react-icons/bs";
import { RiUserStarFill } from "react-icons/ri";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Me_image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsFillAwardFill className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Year Experience</small>
            </article>

            <article className="about__card">
              <RiUserStarFill className="about__icon" />
              <h5>Clients</h5>
              <small>11 Clients </small>
            </article>

            <article className="about__card">
              <BsFillJournalBookmarkFill className="about__icon" />
              <h5>Projects</h5>
              <small>21 Projects</small>
            </article>
          </div>

          <p>
            I am working as a front end Web Developer from last 2+ years, having
            expertise on single-page Applications, UI/UX Design, landing pages
            and more.
            <br></br>
            <br></br>
            Feel free to share your Custom Website idea in PSD, XD, AI, Zeplin,
            Sketch, PNG, JPG or any other file, I will Convert them into a
            responsive Website with Optimized Code And Better Design using my
            front-end Skills.
            <br></br>
            <br></br>
            Regards.
            <br />
             Have a Nice Day.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
