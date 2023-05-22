import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredItems = [
    { id: 1, title: 'Observations', description: 'Track and monitor observations of terrestrial ecosystems.' },
    { id: 2, title: 'Flora', description: 'Explore a collection of flora species and their details.' },
    { id: 3, title: 'Fauna', description: 'Discover various fauna species and their information.' },
    { id: 4, title: 'Habitats', description: 'Learn about different habitats and their characteristics.' },
  ];

  return (
    <div className="home-container">
      <div


      ></div>
      <div className="content">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        


        <h1 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '20px' }}>Welcome to the Life on Land Tracker</h1>
        <p style={{ textAlign: 'center' }}>Track and monitor the health of terrestrial ecosystems and biodiversity.</p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        
        <br></br>

        <div className="featured-items" style={{ display: 'flex', justifyContent: 'center' }}>
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="featured-item"
              style={{
                margin: '20px',
          
                border: '1px solid #ccc',
                borderRadius: '20px',
                maxWidth: '400px',

              }}
            >
              <div
                style={{
                  backgroundColor : "rgba(255,255,255,0.5)",
                  padding: '20px',
                  borderRadius: '20px',
                }}
              >
                <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>{item.title}</h2>
                <p style={{ fontSize: '16px', marginBottom: '10px' }}>{item.description}</p>
                <Link
                  to={`/${item.title.toLowerCase()}`}
                  style={{ display: 'inline-block', padding: '8px 16px', background: '#1890ff', color: '#fff', borderRadius: '4px', textDecoration: 'none' }}
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
