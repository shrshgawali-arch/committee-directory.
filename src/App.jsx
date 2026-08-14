import React from 'react';
import './App.css'; 

// Your committee database
const committeeMembers = [
  {
    id: 1,
    name: "Alex Doe",
    position: "President",
    photoUrl: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Jamie Smith",
    position: "Vice President",
    photoUrl: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Jordan Lee",
    position: "Technical Lead",
    photoUrl: "https://via.placeholder.com/150"
  }
];

// The user interface
function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Meet the Committee</h1>
      </header>
      
      <main className="committee-grid">
        {committeeMembers.map((member) => (
          <div key={member.id} className="member-card">
            <img 
              src={member.photoUrl} 
              alt={`Photo of ${member.name}`} 
              className="member-photo" 
            />
            <h2 className="member-name">{member.name}</h2>
            <p className="member-position">{member.position}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;