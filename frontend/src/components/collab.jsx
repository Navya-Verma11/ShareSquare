// App.js
import React from 'react';
import '../assets/Home.css';
import Header from './header';
import Footer from './Footer';
import '../assets/collab.css';

const Collab = () => {
  return (
    <>
      <Header />
      <div className='bodycontainer'>
        <section className="collaboration-form">
          <h2>Create a Collaboration Request</h2>
          <form action="/collaboration-request" method="post">
            <label htmlFor="project-description">Project Description</label>
            <textarea id="project-description" name="project-description" rows="4" required></textarea>

            <label htmlFor="skills-needed">Skills Needed</label>
            <input type="text" id="skills-needed" name="skills-needed" required />

            <label htmlFor="deadline">Deadline</label>
            <input type="date" id="deadline" name="deadline" required />

            <label htmlFor="contact-info">Contact Information</label>
            <input type="text" id="contact-info" name="contact-info" required />

            <label htmlFor="additional-comments">Additional Comments</label>
            <textarea id="additional-comments" name="additional-comments" rows="4"></textarea>

            <button type="submit">Post Request</button>
          </form>
        </section>
        <section className="Collaboration-Requests">
          <h2>Collaboration Requests</h2>
          {/* Display collaboration requests here (dynamic content) */}
          <div className="request">
            <h3>Project Title</h3>
            <p>Skills Needed: Skill1, Skill2, Skill3</p>
            <p>Deadline: MM/DD/YYYY</p>
            <p>Contact: email@example.com</p>
            <p>Additional Comments: Lorem ipsum dolor sit amet.</p>
            <button>Contact</button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Collab;
