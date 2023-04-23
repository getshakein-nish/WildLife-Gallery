import React, { useState,useEffect } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Navbar from './comps/Navbar';
import Header from './comps/Header';
import Developer from './comps/Developer';
import Contact from './comps/Contact';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [theme,setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
        setTheme('dark');
     } else {
         setTheme('light');
       }
    };
    useEffect(() => {
      document.body.className = theme;
      }, [theme]);

  return (
    <div className={`App ${theme}`}>
      
      <Navbar />
      <Header />
      <center><button className='btn' onClick={toggleTheme}>Dark Mode</button></center>
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    <Contact />
  <Developer />
    </div>
  );
}

export default App;
