import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import '../styles/App.css';
import PersonalInfo from './personalinfo';
import EducationInfo from './education';
import Experience from './experience'
function App() {
  //personal indo
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  //education
  const [schoolName,setSchoolName] = useState("")
  const [title,setTitle] = useState("")
  const [schoolLocation,setSchoolLocation] = useState("")
  const [schoolStartDate ,setShoolStartDate] =useState("")
  const [schoolEndDate ,setShoolEndDate] =useState("")

  //work experience
   const [workExperiences, setWorkExperiences] = useState([]);

  function addWorkExperience() {
    const newExperience = {
      id: uuidv4(),
      company: '',
      productOrTeam: '',
      title: '',
      teamSize: '',
      location: '',
      startDate: '',
      endDate: '',
      bulletPoints: [],
    };
    setWorkExperiences([...workExperiences, newExperience]);
  }
  
  function updateExperience(id, updatedExperience) {
    setWorkExperiences(prev =>
      prev.map(exp => (exp.id === id ? updatedExperience : exp))
    );
  }

  return <>
    <div className='containerdisplay'>
      <div className='inputbox'>
        <div className='personalInfo'>
          <PersonalInfo
        name={name}
        email={email}
        phoneNumber = {phoneNumber}
        setName={setName}
        setEmail={setEmail}
        setPhoneNumber = {setPhoneNumber}
        />

        </div>
        <div className='educationInfo'>
          <EducationInfo 
            schoolName={schoolName}
            title={title}
            schoolLocation ={schoolLocation}
            schoolStartDate ={schoolStartDate}
            schoolEndDate ={schoolEndDate}
            setSchoolName={setSchoolName}
            setTitle={setTitle}
            setSchoolLocation={setSchoolLocation}
            setShoolStartDate={setShoolStartDate}
            setShoolEndDate={setShoolEndDate}

          />
        </div>
        <div className="workexperienceinfo">
          <h1>Work Experience</h1>
          {workExperiences.map((experience) => (
          <Experience
          key={experience.id}
          experience={experience}
          onChange={updateExperience}
          />
          ))}
          <button onClick={addWorkExperience}>Add Work Experience</button>


      </div>
        
      </div>
      <div className='hasilbox'>
        <h1>CV</h1>
        <h2>{name}</h2>
        <h2>{email}</h2>
        <h2>{phoneNumber}</h2>

        <h1>Education</h1>
        <h2>{schoolName}</h2>
        <h2>{title}</h2>
        <h2>{schoolLocation}</h2>
        <h2>{schoolStartDate}</h2>
        <h2>{schoolEndDate}</h2>

        <h1>Work Experience</h1>
        {workExperiences.map((experience,index) => (
          <div key={experience.id}>
            <h2>No: {index + 1}</h2>
            <h2>Company: {experience.company}</h2>
            <h2>Product or Team: {experience.productOrTeam}</h2>
            <h2>Title: {experience.title}</h2>
            <h2>Team Size: {experience.teamSize}</h2>
            <h2>Location: {experience.location}</h2>
            <h2>Start Date: {experience.startDate}</h2>
            <h2>End Date: {experience.endDate}</h2>
            <h3>Bullet Points:</h3>
            <ul>
              {experience.bulletPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <hr />
          </div>
        ))}
        
      </div>


    </div>
    
  </>
  
}

export default App
