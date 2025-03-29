import React from 'react';
import './App.css';
import Card from './assets/Card';

function App() {
  const personalInfo = {
    name: 'Raúl Ochoa',
    age: 17,
    occupation: 'Desarrollador Web',
    email: 'eduardito.ochoa@gmail.com',
    imageUrl: 'https://i.ibb.co/gbfh4X47/471802403-3179089988899453-6223681467423932489-n.jpg' // Puedes cambiar esta URL por la de tu imagen
  };

  return (
    <div className="App">
      <h1>Mi Información Personal</h1>
      <Card
        name={personalInfo.name}
        age={personalInfo.age}
        occupation={personalInfo.occupation}
        email={personalInfo.email}
        imageUrl={personalInfo.imageUrl}
      />
    </div>
  );
}

export default App;