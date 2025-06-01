import { use, useState } from 'react';
import '../styles/App.css';

function Education({
    schoolName,
    title,
    schoolLocation,
    schoolStartDate,
    schoolEndDate,
    setSchoolName,
    setTitle,
    setSchoolLocation,
    setSchoolStartDate,
    setSchoolEndDate,
}) {
  
  function handleschoolNameChange (e){
    setSchoolName(e.target.value)
  }
  function handleTitleChange (e){
    setTitle(e.target.value)
  }
  function handleSchoolLocationChange (e){
    setSchoolLocation(e.target.value)
  }
  function handleschoolStartEndChange (e){
    setSchoolEndDate(e.target.value)
  }

  function handleschoolStartDateChange (e){
    setSchoolStartDate(e.target.value)
  }

  function handleSubmitEduction(event) {
     event.preventDefault();
  }


  return <>
    
    <div >
      <form onSubmit={handleSubmitEduction}>
        <fieldset className='educationform' >
          <legend>Education</legend>
            <label for="univname" >University Name : </label>
            <input type="text" id="univname" value={schoolName}  placeholder="Your name" onChange={handleschoolNameChange}></input><br></br>
            <label for="title" >Title : </label>
            <input type="text" id="title" value={title} placeholder="Your Email" onChange={handleTitleChange}></input><br></br>
            <label for="schoolloc">School Location : </label>
            <input type="text" id="schoolloc" value={schoolLocation} placeholder="Phone Number" onChange={handleSchoolLocationChange} ></input><br></br>
            <label for="startdate" >Start Date : </label>
            <input type="date" id="startdate" value={schoolStartDate}  placeholder="Your name" onChange={handleschoolStartDateChange}></input><br></br>
            <label for="enddate" >End Date : </label>
            <input type="date" id="enddate" value={schoolEndDate}  placeholder="Your name" onChange={handleschoolStartEndChange}></input><br></br>
            <button type="submit">Save</button>
        </fieldset>
      </form>
      
    </div>



  </>

}

export default Education
