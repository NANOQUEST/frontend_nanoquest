import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import logo from '../../assets/NqLogo.png'
import './index.css';

const NavBar = ({ toggleLoginPopup,category }) => {
  const location = useLocation();
  const [userData, setUserData] = useState(null);
  const [isProfileDropdown, setIsProfileDropdown] = useState(false);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const token = localStorage.getItem("token");
  const userEmail = localStorage.getItem("email");

  const fetchUserData = async () => {
    try {
      const [userResponse, coursesResponse] = await Promise.all([
        axios.get('https://llp-qxsy.onrender.com/user/profile', {
          params: { email: userEmail },
          headers: { Authorization: `Bearer ${token}` }
        }),
        axios.get('https://llp-qxsy.onrender.com/course/getpaidcourses', {
          params: { email: userEmail },
          headers: { Authorization: `Bearer ${token}` }
        })
      ]);

      if (userResponse.status === 200 && coursesResponse.status === 200) {
        setUserData(userResponse.data);
        setEnrolledCourses(coursesResponse.data.courseNames);
      } else {
        console.log('Failed to fetch user data');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to fetch user data');
    }
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdown(!isProfileDropdown);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post('https://llp-qxsy.onrender.com/user/forgotpassword', { email: userEmail });
      if (response.status === 200) {
        alert("Check Your E-Mail..!");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to reset password");
    }
  };

  useEffect(() => {
    if (token && userEmail) {
      fetchUserData();
    }
  }, [token, userEmail]);

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='navbar-container fixed-top bg-white' style={{ paddingLeft: '80px', paddingRight: '80px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <Navbar.Brand href="/">
        <img className='main-logo' src={logo} alt="Logo" title="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" style={{ backgroundColor: "transparent" }}>
        <Nav className="mr-auto" style={{ backgroundColor: "transparent" }}>
          <Nav.Link href="/" className="nav-link" active={location.pathname === "/"}>Home</Nav.Link>
          {/* <Nav.Link href="courses" className="nav-link" active={location.pathname === "/courses"}>Skills</Nav.Link> */}
           <NavDropdown title= 'Skills ' id='collasible-nav-dropdown' style={{background:"transparent"}}>
            <NavDropdown.Item href=''>BFSI</NavDropdown.Item>
            <NavDropdown.Item href=''>IT-ITES</NavDropdown.Item>
            <NavDropdown.Item href=''>Animation </NavDropdown.Item>
            <NavDropdown.Item href=''>Science</NavDropdown.Item>
            <NavDropdown.Item href=''>Arts</NavDropdown.Item>
            <NavDropdown.Item href=''>Soft Skills</NavDropdown.Item>
            <NavDropdown.Item href=''>Entrepreneur</NavDropdown.Item>
            <NavDropdown.Item href=''>Digital Marketing</NavDropdown.Item>
            <NavDropdown.Item href="/courses" className={location.pathname === '/courses' ? 'active' : ''}>
                    View All
                </NavDropdown.Item>
           </NavDropdown>


          <NavDropdown title="Company" id="collasible-nav-dropdown" style={{ backgroundColor: "transparent" }}>
            <NavDropdown.Item href="aboutus">About Us</NavDropdown.Item>
            <NavDropdown.Item href="contactus">Contact Us</NavDropdown.Item>
            <NavDropdown.Item href="careers">Careers</NavDropdown.Item>
            <NavDropdown.Item href="teams">Teams</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav style={{ backgroundColor: "transparent" }}>
          <Nav.Link href="#">
            {userEmail ? (
              <li className='nav-item' onMouseEnter={toggleProfileDropdown} onMouseLeave={toggleProfileDropdown}>
                <Link to="#" className="userLink">
                  <div style={{ fontSize: "17px" }} className='user-icon'><FontAwesomeIcon icon={faUser} className='bg-transparent' /></div>
                </Link>
                <ul className={`profiledropdown ${isProfileDropdown ? 'active' : ''}`}>
                  {userData ? (
                    <div className="w-1/3 mt-4 rounded-lg">
                      <div className="flex items-center justify-center w-20 h-20 bg-gray-600 text-white font-bold rounded-full ml-24 text-xl">
                        {userData.name[0].toUpperCase()}
                      </div>
                      <div className='mt-4'>
                        <h6 className="text-sm font-semibold text-left">EnrolledSkills:</h6>
                        {
                          enrolledCourses.length === 0 ? (
                            <div className="enroll-text">
                              <p>Enroll New Courses</p>
                            </div>
                          ) : (
                            <ul className='list-disc pl-4 text-left text-gray-400'>
                              {enrolledCourses.map((course, index) => (
                                <li key={index}>{course}</li>
                              ))}
                            </ul>
                          )
                        }
                      </div>
                    </div>
                  ) : (
                    <p style={{ color: "lightgrey" }}>Loading...</p>
                  )}
                  <div className="flex flex-col items-center border-t border-gray-200 mt-2 pt-2">
                    <button className="w-full text-center text-white  bg-slate-500 p-1 hover:bg-slate-800">
                      <Link to='/cart' className='bg-transparent no-underline hover:no-underline text-white text-sm'>Cart</Link>
                    </button>
                    <button onClick={handleLogout} className="w-full text-center text-white  mt-1 bg-slate-500 p-1 hover:bg-slate-800">
                      <Link to='#' className='bg-transparent no-underline hover:no-underline text-white text-sm'>Logout</Link>
                    </button>
                  </div>
                  <p className="text-center text-blue-500 hover:text-orange-400 cursor-pointer mt-2 text-sm" onClick={handleForgotPassword}>Change Password</p>
                </ul>
              </li>
            ) : (
              <li>
                <button className='btn-login' onClick={() => toggleLoginPopup(true)}>
                  Register for New Skills
                </button>
                <a href="https://canvas.instructure.com/login/canvas" target="_blank" className='btn-login ml-2'>
                  LMS
                </a>
              </li>
            )}
          </Nav.Link>
          <Nav.Link id="tooltip">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span id="tooltiptext">
              040-49170923
            </span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
