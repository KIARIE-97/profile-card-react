import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Profile from './components/Profile'
// import profiles from './data.json'
// import profilePicture from './assets/images/picture.JPG'
import './App.css'
// https://img.freepik.com/premium-photo/anime-characters-forest_889073-1541.jpg

function App() {
  
  const [profiles, setProfile] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {setProfile(data.profiles);
      console.log(data.profiles);  // Log the profiles data
      })
      
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!profiles) {
    return <div>Loading...</div>; // Optionally show a loading state
  }
  
  return (
 
        <div className="app">
      {profiles.map((profile,index) => (
        <Profile
          key={index}
          name={profile.name}
          age={profile.age}
          picture={profile.picture}
          bio={profile.bio}
        />
      ))}
      
    </div>
    
  );
}

export default App
