// App.js
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home1 from "./components/Home1";
import Contactus from "./components/Contactus";
import Courses from "./components/Courses";
import SubCourse from "./components/SubCourse";
import Cart from "./components/Cart";
import Resetpassword from "./components/ResetPassword";
import Blog from "./components/Blog";
import Blog1 from "./components/Blog/Blog1";
import Blog2 from "./components/Blog/Blog2";
import Blog3 from "./components/Blog/Blog3";
import Aboutus from "./components/Aboutus";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsandConditions";
import ReturnsAndRefunds from "./components/ReturnsAndRefunds";
import Teams from "./components/Teams";
import Careers from "./components/Careers";
import NotFound from "./components/NotFound";
import FixedButton from "./components/FixedButton";
import UpcomingWebinars from "./components/upcomingWebinars";
import BubbleBackground from "./components/bubbleBackground";
import SkillDetails from "./components/skillsDetails";
import PastWebinars from "./components/pastWebinars";

const App = () => {
    const [cartCourses, setCartCourses] = useState([]);

    const addToCart = (course) => {
        setCartCourses([...cartCourses, course]);
    };
    const userEmail = localStorage.getItem("email");

    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <BubbleBackground />
                <Routes>
                    <Route path="/" element={<Home1 />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route
                        path="/cart"
                        element={<Cart courses={cartCourses} />}
                    />
                    <Route path="/resetpassword" element={<Resetpassword />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contactus" element={<Contactus />} />
                    <Route path="/aboutus" element={<Aboutus />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route
                        path="/terms-and-conditions"
                        element={<TermsAndConditions />}
                    />
                    <Route
                        path="/refund-and-cancellation"
                        element={<ReturnsAndRefunds />}
                    />
                    <Route path="/blog1" element={<Blog1 />} />
                    <Route path="/blog2" element={<Blog2 />} />
                    <Route path="/blog3" element={<Blog3 />} />
                    <Route path="/teams" element={<Teams />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/subcourse/:id" element={<SubCourse />} />
                    <Route path="/skills/:id" element={<SkillDetails />} />
                    <Route path="*" element={<NotFound status={404} />} />
                    <Route path="/webinars" element={<UpcomingWebinars />} />
                    <Route path="/past-webinars" element={<PastWebinars />} />
                </Routes>

                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
