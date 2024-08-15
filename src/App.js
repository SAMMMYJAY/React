import React from 'react';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <ProfileCard
        name="Jane Doe" 
        title="Graphic Designer" 
        age="18"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSINiq1t8pooyDLmbFjYxyHtcjDFiJuHMMiDg&s"
      />
    </div>
  );
};

export default App;