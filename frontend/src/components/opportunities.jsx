import React from 'react';
//import './App.css'; // Assuming you have an App.css for styling
import '../assets/Home.css';
import Header from './header';
import Footer from './Footer';
import '../assets/Opportunities.css';



//import './Opportunities.css';

function Opportunities() {
    return (
      <>
      <Header />
        <section className="opportunities-container">
            <h2 className="form-label">Add an Opportunity</h2>
            <form action="/opportunities" method="post">
                <label htmlFor="opportunity-name">Opportunity Name</label>
                <input type="text" id="opportunity-name" name="opportunity-name" className="input-field" required />

                <label htmlFor="opportunity-description">Short Description</label>
                <textarea id="opportunity-description" name="opportunity-description" className="input-field" rows="4" required></textarea>

                <label htmlFor="opportunity-link">Opportunity Link</label>
                <input type="text" id="opportunity-link" name="opportunity-link" className="input-field" required />

                <button type="submit" className="submit-btn">Add Opportunity</button>
            </form>
        </section>
        <Footer />

        </>
    );

}





export default Opportunities;
