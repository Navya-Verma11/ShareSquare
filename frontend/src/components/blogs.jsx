import React, { useEffect, useState } from 'react';
import articles from '../data/articles';
//import './App.css'; // Assuming you have an App.css for styling
import '../assets/Home.css';
import Header from './header';

import Footer from './Footer';

const Blog = () => {
  // const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   // Replace the URL with your actual API endpoint to fetch articles
  //   fetch('/api/articles')
  //     .then(response => response.json())
  //     .then(data => setArticles(data))
  //     .catch(error => console.error('Error fetching articles:', error));
  // }, []);
  let i = 0;

  return (
    <>
     <Header />
    <div className="background-image">
      <div className="container">
        <h1 className="mb-4">Welcome to the Blog Page of ShareSquare!</h1>
        <a href="/articles/new" className="btn btn-success">
          New Article
        </a>

        {articles.map(article => (
          <div className="card mt-4" key={i++}>
            <div className="card-body">
              <h4 className="card-title">{article.title}</h4>
              <h5>{article.author}</h5>
              {article.date_of_publication && (
                <div className="card-subtitle text-muted mb-2">
                  {new Date(article.date_of_publication).toLocaleDateString()}
                </div>
              )}
              <div className="card-text mb-2">{article.content}</div>
              {/* <a href={`articles/${article.slug}`} className="btn btn-primary">
                Read More
              </a>
              <a href={`articles/edit/${article.id}`} className="btn btn-info">
                Edit
              </a> */}
              {/* <form
                action={`/articles/${article.id}?_method=DELETE`}
                method="POST"
                className="d-inline"
              >
                <button type="submit" className="btn btn-danger">
                  Delete
                </button>
              </form> */}
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Blog;



