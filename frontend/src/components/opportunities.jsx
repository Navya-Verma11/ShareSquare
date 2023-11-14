import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import Header from './header';
import Footer from './Footer';
import '../assets/Opportunities.css';

function Opportunities({ isLoggedIn }) {
    const navigate = useNavigate();
    const [opportunityName, setOpportunityName] = useState('');
    const [opportunityDescription, setOpportunityDescription] = useState('');
    const [opportunityLink, setOpportunityLink] = useState('');



    const addOpportunity = async (e) => {
        e.preventDefault();



        // Make an authenticated request to your backend to add the opportunity
        try {
            const token = Cookies.get('jwtToken');
            const response = await axios.post(
                'http://localhost:8000/opportunities',
                {
                    name: opportunityName,
                    description: opportunityDescription,
                    link: opportunityLink,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            // Handle the response from the opportunities endpoint
            console.log(response.data);

            // Optionally, you can clear the form fields after a successful addition
            setOpportunityName('');
            setOpportunityDescription('');
            setOpportunityLink('');
        } catch (error) {
            console.error('Error adding opportunity:', error);


        }
    };
    console.log(isLoggedIn);
    return (
        <>
            {/* <Header /> */}
            <section className="opportunities-container">
                {isLoggedIn ? (
                    <>
                        <h2 className="form-label">Add an Opportunity</h2>
                        <form onSubmit={addOpportunity}>
                            <label htmlFor="opportunity-name">Opportunity Name</label>
                            <input
                                type="text"
                                id="opportunity-name"
                                name="opportunity-name"
                                className="input-field"
                                required
                                value={opportunityName}
                                onChange={(e) => setOpportunityName(e.target.value)}
                            />

                            <label htmlFor="opportunity-description">Short Description</label>
                            <textarea
                                id="opportunity-description"
                                name="opportunity-description"
                                className="input-field"
                                rows="4"
                                required
                                value={opportunityDescription}
                                onChange={(e) => setOpportunityDescription(e.target.value)}
                            ></textarea>

                            <label htmlFor="opportunity-link">Opportunity Link</label>
                            <input
                                type="text"
                                id="opportunity-link"
                                name="opportunity-link"
                                className="input-field"
                                required
                                value={opportunityLink}
                                onChange={(e) => setOpportunityLink(e.target.value)}
                            />

                            <button type="submit" className="submit-btn">
                                Add Opportunity
                            </button>
                        </form>
                    </>
                ) : (
                    <p>Please log in to add opportunities.</p>
                )}
            </section>
            <Footer />
        </>
    );
}

export default Opportunities;
