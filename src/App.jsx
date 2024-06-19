import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Profile from './components/Profile'
// import profiles from './data.json'
// import profilePicture from './assets/images/picture.JPG'
import './App.css'


function App() {
  
  const [profiles, setProfile] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);


  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {setProfile(data.profiles);
      console.log(data.profiles);  // Log the profiles data
      })
      
      .catch(error => console.error('Error fetching data:', error));
  }, []);// The empty array causes this effect to run once, after the first render

const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
  };

  const handleClearSelectedProfile = () => {
    setSelectedProfile(null);
  };

  if (!profiles) {
    return <div>Loading...</div>; // Optionally show a loading state
  }
  
  return (
 
        <div className="app">
          {selectedProfile ? (
            <div className='selected'>
              <button onClick={handleClearSelectedProfile}>Back</button>
              <Profile
                name={selectedProfile.name}
                age={selectedProfile.age}
                picture={selectedProfile.picture}
                bio={selectedProfile.bio}
                onClick={() => {}}
              />
            </div>
          ): ( profiles.map((profile,index) => (
            <Profile
              key={index}
              name={profile.name}
              age={profile.age}
              picture={profile.picture}
              bio={profile.bio}
              onClick={() => handleProfileClick(profile)}
            />
          )))
    }
    </div>
    
  );
}

export default App
