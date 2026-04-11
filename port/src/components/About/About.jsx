import "./About.css";
import aboutImg from "../../assets/images/about.jpg";
import { useState } from "react";

function About() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section className="about">
      <div className="about-container">
        {/* LEFT IMAGE */}
        <div className="about-left">
          <img src={aboutImg} alt="about" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-right">
          <h2>About Me</h2>

          <p>
            I am a passionate developer focused on creating modern, responsive,
            and user-friendly websites. I love building clean UI and solving
            real-world problems.
          </p>

          {/* TABS */}
          <div className="tabs">
            <span
              className={activeTab === "skills" ? "active" : ""}
              onClick={() => setActiveTab("skills")}
            >
              Skills
            </span>

            <span
              className={activeTab === "experience" ? "active" : ""}
              onClick={() => setActiveTab("experience")}
            >
              Experience
            </span>

            <span
              className={activeTab === "education" ? "active" : ""}
              onClick={() => setActiveTab("education")}
            >
              Education
            </span>
          </div>

          {/* TAB CONTENT */}
          <div className="tab-content">
            {activeTab === "skills" && (
              <ul>
                <li>HTML / CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>UI/UX Design</li>
              </ul>
            )}

            {activeTab === "experience" && (
              <ul>
                <li>Freelance Projects</li>
                <li>Personal Portfolio Projects</li>
              </ul>
            )}

            {activeTab === "education" && (
              <ul>
                <li>Computer Science Degree</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;