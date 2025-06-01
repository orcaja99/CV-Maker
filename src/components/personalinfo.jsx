import { use, useState } from 'react';
import '../styles/App.css';

function Main({name,email,phoneNumber,setName,setEmail,setPhoneNumber}) {
  
  function handleNameChange (e){
    setName(e.target.value)
  }
  function handleEmailChange (e){
    setEmail(e.target.value)
  }
  function handleNumberChange (e){
    setPhoneNumber(e.target.value)
  }

  function handleSubmitPerInfo(event) {
     event.preventDefault();
     console.log(name,email,phoneNumber)
  }


  return <>
    
    <div >
      <h1>CV Maker</h1>
      <form onSubmit={handleSubmitPerInfo}>
        <fieldset className='generalform' >
          <legend>Personal Information</legend>
            <label for="name" >First name : </label>
            <input type="text" id="name" value={name}  placeholder="Your name" onChange={handleNameChange}></input><br></br>
            <label for="email" >Email : </label>
            <input type="email" id="email" value={email} placeholder="Your Email" onChange={handleEmailChange}></input><br></br>
            <label for="phoneNumber">Phone Number : </label>
            <input type="number" id="phoneNumber" value={phoneNumber} placeholder="Phone Number" onChange={handleNumberChange} ></input><br></br>
            <button type="submit">Save</button>
        </fieldset>
      </form>
      
    </div>



  </>

}

export default Main
