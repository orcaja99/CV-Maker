import React from 'react';

function Experience({ experience, onChange }) {
  const handleChange = (field, value) => {
    onChange(experience.id, {
      ...experience,
      [field]: value,
    });
  };

  return (
    <form>
      <fieldset>
        <legend>Work Experience</legend>

        <label>Company:</label>
        <input
          type="text"
          value={experience.company}
          onChange={e => handleChange('company', e.target.value)}
        /><br />

        <label>Product or Team:</label>
        <input
          type="text"
          value={experience.productOrTeam}
          onChange={e => handleChange('productOrTeam', e.target.value)}
        /><br />

        <label>Title:</label>
        <input
          type="text"
          value={experience.title}
          onChange={e => handleChange('title', e.target.value)}
        /><br />

        <label>Team Size:</label>
        <input
          type="number"
          value={experience.teamSize}
          onChange={e => handleChange('teamSize', e.target.value)}
        /><br />

        <label>Location:</label>
        <input
          type="text"
          value={experience.location}
          onChange={e => handleChange('location', e.target.value)}
        /><br />

        <label>Start Date:</label>
        <input
          type="date"
          value={experience.startDate}
          onChange={e => handleChange('startDate', e.target.value)}
        /><br />

        <label>End Date:</label>
        <input
          type="date"
          value={experience.endDate}
          onChange={e => handleChange('endDate', e.target.value)}
        /><br />
      </fieldset>
    </form>
  );
}

export default Experience;
