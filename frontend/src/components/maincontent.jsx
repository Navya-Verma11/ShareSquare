// components/MainContent.js
import React from 'react';
import backgrnd from '../assets/images/Backgrnd.png'
//import '../assets/home.css';
function MainContent() {
  return (
    <main>
      <section className="hero">
        <div className="hero__bg__image__container">
          <img src={backgrnd} alt="BG hero image" className="hero__bg__image" />
        </div>
        <div className="hero__card">
          <h1 className="hero__title">SHARE SQUARE<br />Share and Explore Together.</h1>
          <p className="hero__subtitle">Join the Community. Grow Together.</p>
        </div>
      </section>

      <section className="features__container">
        {/* Feature 1 */}
        <div className="feature">
          <div className="feature__details">
            <h3 className="feature__title">RESOURCE SHARING.</h3>
            <h5 className="feature__sub__title">
              "Unlock the Power of Knowledge: Empowering Minds, Sharing Tech from notes, books, lectures to tools, codes and much more."
            </h5>
          </div>
          <div className="feature__image__container">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="Feature image" className="feature__image" />
            <div className="feature__backgroud__video__container">
              <video autoPlay loop muted className="feature__backgroud__video">
                <source src="https://www.shutterstock.com/shutterstock/videos/1055226626/preview/stock-footage-people-with-different-skills-connecting-together-online-and-working-on-the-same-project-remote.webm" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="feature">
          <div className="feature__details">
            <h3 className="feature__title">HACKATHON AND PROJECT COLLAB.</h3>
            <h5 className="feature__sub__title">
              "Collaborate, Compete, Create - Unleash Your Coding Skills! Find teammates with similar thought process and career goals."
            </h5>
          </div>
          <div className="feature__image__container">
            <div className="feature__2__poster__container">
              <div className="poster__container">
                <img src="Collab.png" alt="poster" className="poster" />
              </div>
              <div className="poster__details">
                <h4>Collaborate</h4>
                <h6>Finding teammates...</h6>
              </div>
              <div className="download__gif__container">
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="downloading gif" className="gif" />
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="feature">
          <div className="feature__details">
            <h3 className="feature__title">JOBS AND INTERNS.</h3>
            <h5 className="feature__sub__title">
              "Unlock Your Future - Explore Internships and Job Opportunities! Share about the most recent job and internship opportunities in your circle."
            </h5>
          </div>
          <div className="feature__image__container feature__3__image__container">
            <video autoPlay loop muted className="feature__backgroud__video feature__3__backgroud__video">
              <source src="https://www.shutterstock.com/shutterstock/videos/1034536265/preview/stock-footage-walk-through-busy-office-business-people-shaking-hands-young-asian-man-greeting-corporate-manager.webm" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="feature">
          <div className="feature__details">
            <h3 className="feature__title">BLOGS AND NEWS.</h3>
            <h5 className="feature__sub__title">
              "Stay Informed, Get Inspired - Dive into the World of Tech! Share about the recent technological advancements as well as self-written blogs in your circle."
            </h5>
          </div>
          <div className="feature__image__container">
            <img src="stock-photo-tablet-with-news-website-on-stack-of-newspapers-all-contents-are-made-up-1059533777-removebg-preview.png" alt="Feature image" className="feature__image" />
          </div>
        </div>
      </section>

      <section className="FAQ__list__container">
        <h1 className="FAQ__heading">Frequently Asked Questions</h1>
        <div className="FAQ__list">
        <div className="FAQ__accordian">
                    <button className="FAQ__title">
                        Who can join the platform?<i className="fal fa-plus"></i>
                    </button>
                    <div className="FAQ__visible">
                        <p>
                            The platform is exclusively designed for students pursuing Bachelor of Technology and mentors/professionals associated with the WE community. Anyone within this community can join and benefit from the platform's features.
                        </p>
                        
                    </div>
                </div>
                <div className="FAQ__accordian">
                    <button className="FAQ__title">
                        How can I share resources on the platform?<i className="fal fa-plus"></i>
                    </button>
                    <div className="FAQ__visible">
                        <p>
                            Sharing resources is easy! Simply navigate to the "Resource Sharing" section, click on the "Share Resource" button, provide the necessary details, and upload your resource. Other users will then be able to access and bookmark it for future reference.
                        </p>
                    </div>
                </div>
                <div className="FAQ__accordian">
                    <button className="FAQ__title">
                    Are all resources on the platform free to access?<i className="fal fa-plus"></i>
                    </button>
                    <div className="FAQ__visible">
                        <p>
                            While some resources might be freely shared by community members, others may be offered for sale. The platform promotes a culture of sharing, but it also respects the efforts of those who create valuable resources.
                        </p>
                        
                        
                    </div>
                </div>
                <div className="FAQ__accordian">
                    <button className="FAQ__title">
                       How can I find teammates for a project or hackathon?<i className="fal fa-plus"></i>
                    </button>
                    <div className="FAQ__visible">
                        <p>
                            To find like-minded teammates, head to the "Project & Hackathon Collab" section, browse through ongoing projects, and express your interest in joining or create a new project to attract potential collaborators.
                        </p>
                    </div>
                </div>
                <div className="FAQ__accordian">
                    <button className="FAQ__title">
                        What kind of personal information is displayed on my profile?<i className="fal fa-plus"></i>
                    </button>
                    <div className="FAQ__visible">
                        <p>
                           Your personal profile includes basic information like your name, profile picture, academic year, and a bio. Your contact details or sensitive information will remain private and will not be displayed to other users.
                        </p>
                    </div>
                </div>
                <div className="FAQ__accordian">
                    <button className="FAQ__title">
                       How secure are the transactions for buying/selling resources?<i className="fal fa-plus"></i>
                    </button>
                    <div className="FAQ__visible">
                        <p>We prioritize the security of transactions on the platform. All transactions go through a secure payment gateway to ensure the safety of both buyers and sellers.</p>
                    </div>
                </div>
        </div>
      </section>
    </main>
  );
}

export default MainContent;
