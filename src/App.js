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
import RecipeReviewCard from "./components/upcomingWebinars";

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
                <Routes>
                    <Route exact path="/" element={<Home1 />} />
                    <Route exact path="/courses" element={<Courses />} />
                    <Route
                        exact
                        path="/cart"
                        element={<Cart courses={cartCourses} />}
                    />
                    <Route
                        exact
                        path="/resetpassword"
                        element={<Resetpassword />}
                    />
                    <Route exact path="/blog" element={<Blog />} />
                    <Route exact path="/contactus" element={<Contactus />} />
                    <Route exact path="/aboutus" element={<Aboutus />} />
                    <Route
                        exact
                        path="/privacy-policy"
                        element={<PrivacyPolicy />}
                    />
                    <Route
                        exact
                        path="/terms-and-conditions"
                        element={<TermsAndConditions />}
                    />
                    <Route
                        exact
                        path="/refund-and-cancellation"
                        element={<ReturnsAndRefunds />}
                    />
                    <Route exact path="/blog1" element={<Blog1 />} />
                    <Route exact path="/blog2" element={<Blog2 />} />
                    <Route exact path="/blog3" element={<Blog3 />} />
                    <Route exact path="/teams" element={<Teams />} />
                    <Route exact path="/careers" element={<Careers />} />
                    <Route
                        exact
                        path="/subcourse/:id"
                        element={<SubCourse />}
                    />
                    <Route path="*" element={<NotFound status={404} />} />
                    <Route path="/webinars" element={<RecipeReviewCard />} />
                </Routes>

                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
