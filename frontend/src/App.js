import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import Login from "./components/Login";
import Register from "./components/Register";
import ChatRoom from "./components/ChatRoom";
import ChatList from "./components/ChatList";

import Resources from "./components/Resources";
import LoggedInNavbar from "./components/Navbar/LoggedInNavbar";
import LoggedOutNavbar from "./components/Navbar/LoggedOutNavbar";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Network from "./components/Network";

import Bg from "./assets/bg.jpg";
import School from "./components/School";
import { clubs, schools } from "./data/example";
import NotFound from "./components/NotFound";
import { useStore } from "./store";
import EmailVerification from "./components/EmailVerification";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { isLoggedIn, user, setUser, setIsLoggedIn } = useStore();

  const handleLogin = (user) => {
    setUser(user);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUser({});
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-900 text-white">
        {isLoggedIn ? (
          <LoggedInNavbar user={user} onLogout={handleLogout} />
        ) : (
          <LoggedOutNavbar />
        )}
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={isLoggedIn ? <Feed /> : <Home />} />
            {isLoggedIn ? (
              <>
                <Route
                  path="/profile/:userId"
                  element={<Profile currentUserId={user.id} />}
                />
                <Route path="/network" element={<Network />} />
                <Route path="/chat" element={<ChatList />} />
                <Route path="/chat/:roomId" element={<ChatRoom />} />
                <Route path="/verification" element={<EmailVerification />} />
              </>
            ) : (
              <>
                <Route
                  path="/login"
                  element={<Login onLogin={handleLogin} />}
                />
                <Route path="/register" element={<Register />} />
                <Route path="/verification" element={<EmailVerification />} />
              </>
            )}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/resources/:resourceType" element={<Resources />} />
            <Route path="/school/:abriviation" element={<School />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 py-4">
          <div className="container mx-auto text-center text-gray-400">
            Students Community
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

function Home() {
  return (
    <>
      <section className="mx-auto flex flex-col items-center justify-center py-20 text-center relative">
        <div className="w-full z-10">
          <h1 className="text-6xl font-bold mb-4" data-aos="fade-up">
            Welcome to the Future
          </h1>
          <p
            className="text-2xl mb-8 text-gray-400"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla
          </p>
          <div className="space-x-4" data-aos="fade-up" data-aos-delay="400">
            <button className="bg-[#38b2ac] text-white px-6 py-3 rounded hover:bg-[#2d928d]">
              Explore
            </button>
            <button className="bg-transparent border border-[#38b2ac] text-[#38b2ac] px-6 py-3 rounded hover:bg-[#38b2ac] hover:text-white">
              Join
            </button>
          </div>
        </div>
        <img
          src={Bg}
          className="w-full h-[35rem] z-0 absolute -top-20 left-0 opacity-35"
        />
      </section>

      <section id="about" className="bg-gray-800 py-20" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-xl mb-8 text-gray-400">
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla
          </p>
        </div>
      </section>

      <section id="schools" className="bg-gray-900 py-20" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Our Schools</h2>
          <p className="text-xl mb-8 text-gray-400">
            We have five amazing National Higher Schools
          </p>
          <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
            {schools.map((school) => (
              <Link
                to={`/school/${school.abriviation}`}
                className="p-6 cursor-pointer"
              >
                <img
                  src={school.image}
                  alt={`img of ${school.abriviation}`}
                  className="w-full rounded-md mb-4 shadow-md hover:opacity-75 md:w-4/5 lg:w-3/5"
                />
                <h3 className="text-2xl font-bold mb-2">
                  {school.abriviation}
                </h3>
                <p className="text-gray-400">{school.name}</p>
              </Link>
            ))}
          </Carousel>
        </div>
      </section>

      <section id="resources" className="bg-gray-800 py-20" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Student-Shared Resources</h2>
          <p className="text-xl mb-8 text-gray-400">
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <Link to="/resources/courses">
              <div
                className="p-6 bg-gray-700 rounded-lg shadow-xl"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3 className="text-2xl font-bold mb-2">Courses</h3>
                <p className="text-gray-400">
                  bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla{" "}
                </p>
              </div>
            </Link>
            <Link to="/resources/problems">
              <div
                className="p-6 bg-gray-700 rounded-lg shadow-xl"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3 className="text-2xl font-bold mb-2">Problems</h3>
                <p className="text-gray-400">
                  bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla{" "}
                </p>
              </div>
            </Link>
            <Link to="/resources/projects">
              <div
                className="p-6 bg-gray-700 rounded-lg shadow-xl"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3 className="text-2xl font-bold mb-2">Projects</h3>
                <p className="text-gray-400">
                  bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla{" "}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section id="clubs" className="bg-gray-900 py-20" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Our Clubs</h2>
          <p className="text-xl mb-8 text-gray-300">
            bla bla bla bla bla bla bla bla bla bla bla bla
          </p>
          <Carousel
            showThumbs={false}
            infiniteLoop
            useKeyboardArrows
            autoPlay
            showStatus={false}
            showIndicators={true}
            interval={5000}
            className="custom-carousel"
          >
            {clubs.map((club) => (
              <a
                target="_blank"
                href={club.url}
                className="p-4 bg-gray-800 rounded-lg shadow-lg mx-2"
              >
                <img
                  src={club.image}
                  alt={`img of ${club.name}`}
                  className="w-full rounded mb-4"
                />
                <h3 className="text-xl font-bold mb-2 text-white">
                  {club.name}
                </h3>
                <p className="text-gray-300">{club.description}</p>
              </a>
            ))}
          </Carousel>
        </div>
      </section>

      <section id="podcasts" className="bg-gray-800 py-20" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Student Podcasts</h2>
          <p className="text-xl mb-8 text-gray-400">
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla bla bla bla bla
          </p>
          <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>

            <div className="p-6">
              <img
                src="https://via.placeholder.com/800x400"
                alt="Podcast Title 1"
                className="w-full rounded mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Podcast 1</h3>
              <p className="text-gray-400">Description</p>
            </div>
            <div className="p-6">
              <img
                src="https://via.placeholder.com/800x400"
                alt="Podcast Title 2"
                className="w-full rounded mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Podcast 2</h3>
              <p className="text-gray-400">Description</p>
            </div>
          </Carousel>
        </div>
      </section>

      <section id="contact" className="bg-gray-900 py-20" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl mb-8 text-gray-400">
            Have questions or feedback? We're here to help.
          </p>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <input
                type="text"
                className="w-full p-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-[#38b2ac]"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                className="w-full p-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-[#38b2ac]"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <textarea
                className="w-full p-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-[#38b2ac]"
                placeholder="Message"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#38b2ac] text-white px-6 py-3 rounded hover:bg-[#2d928d]"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
