import React, { useState } from 'react';
import axios from 'axios';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const RegisterBanner = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [skill, setSkill] = useState('');
  const [availableOptions, setAvailableOptions] = useState([]);

  const courses = [
    { skill: 'BFSI', options: ['Accounting', 'Banking', 'Finance', "Fintech",'Insurance','Investment'] },
    { skill: 'IT-ITES', options: ['Programming and Web Development', 'Data Analysis and Analytics', 'Artificial Intelligence','Cybersecurity','Internet Of Things','Blockchain','Mobile Applications Development'] },
    { skill: 'Animation', options: ['SpGraphic Design and Multimedia', 'Augmented Realty', 'VFX','Game tech'] },
    { skill: 'Science', options: ['Mathematics', 'Science', 'VFX','Game techCritical Thinking and Problem Solving'] },
    {skill:"Arts" , option:['Art and Creativity','Social Studies',]},
    {skill:'Soft Skills', option:['Soft Skills and Personal Development']},
    {skill:'Entreprenuer', option:['Business and Entrepreneurship',]} ,
    {skill:'Digital Marketing', option:['Digital Marketing',]} ,
    {skill:'Life Skills', option:['Life Skills',]} ,
    {skill:'Kids', option:['Tech Skills','Emotional Skills','English Literacy']},
    {skills:'Languages', option:['Foreign languages']}
    
  ];


  const handleSkillChange = (e) => {
    const selectedSkill = e.target.value;
    setSkill(selectedSkill);
  
    const selectedCourse = courses.find(course => course.skill === selectedSkill);
    if (selectedCourse) {
      setAvailableOptions(selectedCourse.options);
    } else {
      setAvailableOptions([]);
    }
  };
  


  const onRegister = async (e) => {

    e.preventDefault();
    try {
      const response = await axios.post('https://llp-qxsy.onrender.com/user/register', { name, mobile, skill });
      console.log(response.data); 
      alert('Successfully registered!');
      setName('');
      setMobile('');
      setSkill('');
      
        toast.success("Successfull",)
  
    } catch (error) {
      console.error('Error registering:', error); 
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-center">Online Registration</h2>
      <p className='text-sm text-gray-400 text-center'>Register now to unlock your potential with our online courses</p>
      <form onSubmit={onRegister}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Mobile</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>

        <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">Skill</label>
      <select
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        value={skill}
        onChange={handleSkillChange}
      >
        <option value="">Select a skill</option>
        {courses.map((course, index) => (
          <option key={index} value={course.skill}>
            {course.skill}
          </option>
        ))}
      </select>
    </div>

    {skill && (
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">Options</label>
        <select
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          disabled={!skill}
        >
          <option value="">Select an option</option>
          {availableOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Register
        </button>
      </form>
  
    </div>
  );
};

export default RegisterBanner;
