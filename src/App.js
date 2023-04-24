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
  const [message, setMessage] = useState('');
  const [updated, setUpdated] = useState(message);
  const [bit, setBit] = useState(0);

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

    const handleChange = (event) => {
        setMessage(event.target.value);
      };
    const handleClick = () => {
        // 👇 "message" stores input field value
        setUpdated(message);
        if(updated === "8789"){
          setBit(1);
        } else {
          setBit(0);
        }
      };

  return (
    <div className={`App ${theme}`}>
      
      <Navbar />
      <Header />
      <center><button className='btn' onClick={toggleTheme}>Dark Mode</button></center>
      <Title />
      <center>
      <input className='verify'
        placeholder='Enter Admin Key'
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
      />
       <button className='verify-btn' onClick={handleClick}>Verify</button>
       </center>
       {bit === 1 ? <center><p><b>Entered Admin mode</b></p></center>  : <center><p><b>Enter correct Admin key</b></p></center> }
      {bit === 0 ? null : <UploadForm />}
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
