import React, { useState, useEffect } from 'react';
import headShot from './photos/head_shot.JPG';
import intelSymbol from './photos/intel.png';    
import dfdsSymbol from './photos/dfds.png';
import dogsPhoto from './photos/dog.JPG';
import sportsPhoto from './photos/sport.jpg';
import guitarPhoto from './photos/instrument.jpg';
import buSymbol from './photos/buLogo.png'; 
import travelPhoto from './photos/sunrise.jpeg';
import photographyPic from './photos/photography.jpg';
import concertSymbol from './photos/concertPhoto.JPG';      
import creavitSymbol from './photos/creavit.png'
import { Mail, Github, Linkedin } from "lucide-react";
import photograph1 from './photos/photograph1.JPG';
import photograph2 from './photos/photograph2.JPG';
import photograph3 from './photos/photograph3.JPG';
import photograph4 from './photos/photograph4.JPG';
import photograph5 from './photos/photograph5.JPG';
import photograph6 from './photos/photograph6.JPG';
import photograph7 from './photos/photograph7.JPG';
import photograph8 from './photos/photograph8.JPG';
import photograph9 from './photos/photograph9.JPG';
import photograph10 from './photos/photograph10.JPG';
import photograph11 from './photos/photograph11.JPG';
import photograph12 from './photos/photograph12.jpg';
import photograph14 from './photos/photograph14.jpeg';
import photograph15 from './photos/photograph15.JPG';
import photograph13 from './photos/photograph13.JPG';
import siteBg from './photos/site_bg1.JPG';



const PersonalWebsite = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredPhoto, setHoveredPhoto] = useState(null);
  
  // NEW: lightbox state
  const [lightboxPhoto, setLightboxPhoto] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const goTo = (page) => {
    setCurrentPage(page);
    // Smooth scroll to top of the page content
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };
  

  const navigationItems = [
    'Home',
    'Work Experience',
    'Education',
    'Projects',
    'Personal',
    'More'
  ];

  const photographyData = [
    { id: 1,  url: photograph1,  title: '',  description: 'Boston, Massachussetts' },
    { id: 2,  url: photograph2,  title: '',  description: 'Phoenix, Arizona' },
    { id: 3,  url: photograph3,  title: '',  description: 'Boston, Massachussetts' },
    { id: 4,  url: photograph4,  title: '',  description: 'İstanbul, Türkiye' },
    { id: 5,  url: photograph5,  title: '',  description: 'Blue Ridge Mountains, Virginia' },
    { id: 6,  url: photograph6,  title: '',  description: 'Datça, Türkiye' },
    { id: 7,  url: photograph7,  title: '',  description: 'Dalyan, Türkiye' },
    { id: 8,  url: photograph8,  title: '',  description: 'Datça, Türkiye' },
    { id: 9,  url: photograph9,  title: '',  description: 'Sedona, Arizona' },
    { id: 10, url: photograph10, title: '', description: 'Boston, Massachussetts' },
    { id: 11, url: photograph11, title: '', description: 'London, UK' },
    { id: 12, url: photograph12, title: '', description: 'Datça, Türkiye' },
    { id: 13, url: photograph13, title: '', description: 'Datça, Türkiye' },
    { id: 14, url: photograph14, title: '', description: 'Bergen, Norway' },
    { id: 15, url: photograph15, title: '', description: 'San Juan, Puerto Rico' },

  ];

  const renderPage = () => {
    switch(currentPage) {
      case 'Home':
        return (
          <div className={`min-h-screen bg-gradient-to-br from-blue-50/1 via-indigo-50/1 to-purple-100/1 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="max-w-6xl mx-auto px-8 flex flex-col justify-center min-h-screen pt-32">
              
              {/* Hero Section */}
              <div className="mb-16">
                
                {/* Name - Centered in viewport */}
                <h1 className="text-7xl lg:text-7xl font-bold bg-gradient-to-r from-blue-900 to-blue-900 bg-clip-text text-opaque mb-20 text-center">
                  Tan Aydemir
                </h1>
                
                {/* Photo and Buttons Side by Side */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
                  
                  {/* Left Side - Professional Photo */}
                  <div className="relative">
                    <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                      <img
                        src={headShot}
                        alt="Tan Aydemir - Professional Photo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Decorative gradient ring */}
                  </div>
                  
                  {/* Right Side - Buttons */}
                  <div className="flex flex-col gap-6 items-center">
                  <button
                    className="px-10 py-5 bg-gradient-to-r from-blue-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
                    onClick={() => goTo('Projects')}
                  >
                    Explore My Work
                  </button>
                    <button className="px-10 py-5 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-gray-200 hover:border-blue-300 text-lg"
                      onClick={()=> window.location.href = 'mailto:taydemir@bu.edu?subject='}>
                      Contact Me
                    </button>
                  </div>
                </div>
              </div>

              {/* About Me Section */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 mt-16">
                <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">About Me</h2>
                <p className="text-gray-600 text-lg leading-relaxed text-center max-w-4xl mx-auto">
                  I'm a recent graduate from Boston University, where I studied computer science & business administration, 
                  and developed a strong interest in software, data, and finance. Whether it's building tools to make 
                  workflows more efficient or analyzing data to uncover insights, I enjoy working on projects that have 
                  a real impact. I enjoy seeing ideas through, from the first sketch to something people can use.
                </p>
                
                {/* Skills/Interests Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">💻</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Software</h3>
                    <p className="text-gray-600">Building efficient tools and applications</p>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">📊</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Data</h3>
                    <p className="text-gray-600">Analyzing data to uncover insights</p>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-green-100 to-teal-100 rounded-xl hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">💰</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Finance</h3>
                    <p className="text-gray-600">Understanding financial systems and markets</p>
                  </div>
                </div>
              </div>

              {/* Education Highlight */}
              <div className="mt-12 bg-gradient-to-r from-red-100 to-orange-100 rounded-2xl p-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-2xl">🎓</span>
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-gray-800">Boston University</h3>
                    <p className="text-gray-600">Computer Science & Business Administration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
        case 'Work Experience':
          return (
            <div className={`min-h-screen bg-gradient-to-br from-blue-50/1 via-blue-50/1 to-blue-100/1 p-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="max-w-4xl mx-auto">
                {/* <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent mb-8 text-center">
                  Work Experience
                </h1> */}
        
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-center justify-center mb-6">
                    <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Work Experience</h2>
                  </div>
        
                  {/* Cards */}
                  <div className="space-y-4">
                    {/* Intel */}
                    <div className="p-6 rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-6">
                      {/* Bigger logo box (still contained) */}
                      <div className="flex-shrink-0 w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-2xl bg-white border border-blue-100 overflow-hidden grid place-items-center p-2">
                        <img
                          src={intelSymbol}
                          alt="Intel logo"
                          className="object-contain max-w-full max-h-full"
                        />
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xl font-bold text-gray-900">Automation Intern @ Intel</h4>
                        <p className="text-gray-700 leading-relaxed mt-1">
                          Built and enhanced an internal AI chatbot at Intel, streamlining support for
                          3,000+ employees and handling 7,500+ daily requests. Improved context awareness
                          with Intel-specific acronym handling and authored onboarding docs for 300+ new
                          hires. Presented tool across 30+ departments, driving a 30% boost in efficiency.
                        </p>
                      </div>
                    </div>
                  </div>


        
                    {/* DFDS */}
                    <div className="p-6 rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-6">
                        {/* Bigger logo box (contained) */}
                        <div className="flex-shrink-0 w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-2xl bg-white border border-blue-100 overflow-hidden grid place-items-center p-2">
                          <img
                            src={dfdsSymbol}
                            alt="DFDS logo"
                            className="object-contain max-w-full max-h-full"
                          />
                        </div>

                        {/* Text */}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xl font-bold text-gray-900">Integration Development Intern @ DFDS</h4>
                          <p className="text-gray-700 leading-relaxed mt-1">
                            Automated XML error handling with 500+ lines of Java, helping 15 team members
                            troubleshoot shipping issues faster. Managed real-time route data for 11 vendors in
                            MySQL Server and streamlined GitHub workflows to support a smooth merger with a buyer firm.
                          </p>
                        </div>
                      </div>
                    </div>

        
                    {/* CREAVIT */}
                    <div className="p-6 rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-6">
                        {/* Bigger logo box (contained) */}
                        <div className="flex-shrink-0 w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-2xl bg-white border border-blue-100 overflow-hidden grid place-items-center p-2">
                          <img
                            src={creavitSymbol}
                            alt="Creavit logo"
                            className="object-contain max-w-full max-h-full"
                          />
                        </div>

                        {/* Text */}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xl font-bold text-gray-900">Software Development Intern @ Creavit</h4>
                          <p className="text-gray-700 leading-relaxed mt-1">
                          Developed Python-based client solutions for 60+ users by automating keyword search and data routing
                          via Jira, streamlining workflow distribution. Implemented secure data transfer protocols and access
                          controls, proactively preventing 7 potential security incidents.
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          );
        
      
          case 'Education':
            return (
              <div className={`min-h-screen bg-gradient-to-br from-blue-50/1 via-blue-50/1 to-blue-100/1 p-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="max-w-5xl mx-auto">
                  {/* <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent mb-8 text-center">
                    Education
                  </h1> */}
          
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-center justify-center mb-6">
                    <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Education</h2>
                  </div>
          
                    {/* Main education card */}
                    <div className="p-6 rounded-2xl border border-blue-50 bg-gradient-to-br from-blue-50 to-gray-50 hover:shadow-lg transition-shadow">
                      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                        {/* School logo (contained, bigger, responsive) */}
                        <div className="flex-shrink-0 w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-2xl bg-white border border-blue-100 overflow-hidden grid place-items-center p-3">
                          <img
                            src={buSymbol}
                            alt="Boston University logo"
                            className="object-contain max-w-full max-h-full"
                          />
                        </div>
          
                        {/* Text content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-2xl font-extrabold text-gray-900">Boston University</h3>
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-white-700 border border-blue-200">
                              Boston, MA
                            </span>
                            {/* Update your dates here if needed */}
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-white-700 border border-blue-200">
                              2021
                            </span>
                          </div>
          
                          <div className="mt-3 space-y-1">
                            <p className="text-gray-800 font-semibold">Bachelor of Arts in Computer Science</p>
                            <p className="text-gray-700">Minor in Business Administration and Management</p>
                          </div>
          
                          <div className="mt-4 flex flex-wrap gap-2">
                            {[
                              'Kilachand Honors College',
                              'Presidential Scholar',
                              "Dean’s List (8 consecutive semesters)"
                            ].map((t) => (
                              <span
                                key={t}
                                className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-white-700 border border-blue-200"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
          
                          <div className="mt-6">
                          <h4 className="text-lg font-bold text-gray-900">Teaching Assistant (3 years)</h4>
                            <ul className="mt-2 ml-5 md:ml-6 list-disc text-gray-700 space-y-1 marker:text-blue-500">
                              <li>
                                <span className="font-semibold">Programming for Investments —  </span>
                                Python (NumPy, pandas); models & algos; historical backtests; metrics: Sharpe/drawdowns.
                              </li>
                              <li>
                                <span className="font-semibold">Introduction to Finance —  </span>
                                Bonds (pricing/yield), equities & securities; portfolio risk/return; time-series: returns/volatility.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
          
                  </div>
                </div>
              </div>
            );
          
      
        case 'Projects':
          return (
            <div className={`min-h-screen bg-gradient-to-br from-blue-50/1 via-blue-50/1 to-blue-100/1 p-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="max-w-6xl mx-auto">
                {/* <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent mb-8 text-center">
                  Projects
                </h1> */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500">
                <div className="flex items-center justify-center mb-6">
                  <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Projects</h2>
                </div>

                  
                  {/* Projects Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
                    
                    {/* Project 1 */}
                    <div 
                      className="group p-6 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-300"
                      onClick={() => window.open('https://github.com/tan-aydemir/dormquery-agent/tree/main', '_blank')}
                    >
                      <div className="flex items-center mb-4">
                        <span className="text-3xl mr-3">💻</span>
                        <h3 className="text-xl font-bold text-gray-800">DormQuery Agent</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">
                      A smart building analytics tool that combines graph modeling, time-series sensor simulation, and LLM-powered natural 
                      language querying to deliver intuitive insights into room conditions, AC unit coverage, and occupancy trends
                      </p>
                      <div className="flex items-center text-blue-600 group-hover:text-blue-800 transition-colors duration-300">
                        <span className="text-sm font-semibold">View on GitHub →</span>
                      </div>
                    </div>
  
                    {/* Project 2 */}
                    <div 
                      className="group p-6 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-green-300"
                      onClick={() => window.open('https://github.com/tan-aydemir/Latent-Semantic-Analysis-Search-Engine-WebPage' , '_blank')}
                    >
                      <div className="flex items-center mb-4">
                        <span className="text-3xl mr-3">📊</span>
                        <h3 className="text-xl font-bold text-gray-800">LSA Search Engine</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">
                      This project implements a basic search engine using Latent Semantic Analysis. It allows users to query a predefined dataset and retrieve the most relevant documents based on cosine similarity. 
                      The web application includes a responsive user interface and visualization for query results.
                      </p>
                      <div className="flex items-center text-green-600 group-hover:text-green-800 transition-colors duration-300">
                        <span className="text-sm font-semibold">View on GitHub →</span>
                      </div>
                    </div>
  
                    {/* Project 3 */}
                    <div 
                      className="group p-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-purple-300"
                      onClick={() => window.open('https://github.com/tan-aydemir/quantitative-finance/tree/main/backtesting-interest-driven-trading-strategy', '_blank')}
                    >
                      <div className="flex items-center mb-4">
                        <span className="text-3xl mr-3">🎯</span>
                        <h3 className="text-xl font-bold text-gray-800">MacroRateTrading</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">
                      A rule-based trading framework that utilizes long-term interest rate movements to generate buy/sell signals, apply transaction costs, 
                      and evaluate strategy, market, and abnormal returns through comparative performance analysis
                      </p>
                      <div className="flex items-center text-purple-600 group-hover:text-purple-800 transition-colors duration-300">
                        <span className="text-sm font-semibold">View on GitHub →</span>
                      </div>
                    </div>
  
                    {/* Project 4 */}
                    <div 
                      className="group p-6 bg-gradient-to-br from-red-100 to-orange-100 rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-red-300"
                      onClick={() => window.open('https://github.com/tan-aydemir/quantitative-finance/tree/main/black-scholes-merton-option-pricing', '_blank')}
                    >
                      <div className="flex items-center mb-4">
                        <span className="text-3xl mr-3">⚡</span>
                        <h3 className="text-xl font-bold text-gray-800">Black-Scholes-Merton Option Pricing Model</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">
                      A comprehensive Python implementation of the Black-Scholes-Merton model for pricing European options, computing Greeks, 
                      generating sensitivity tables, and estimating implied volatility using numerical methods.
                      </p>
                      <div className="flex items-center text-red-600 group-hover:text-red-800 transition-colors duration-300">
                        <span className="text-sm font-semibold">View on GitHub →</span>
                      </div>
                    </div>

                    {/* Project 5 */}
                    <div 
                      className="group p-6 bg-gradient-to-br from-blue-100 to-black-100 rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-red-300"
                      onClick={() => window.open('https://github.com/tan-aydemir/CS506-Final-Project_Resume_Evaluation_Agent', '_blank')}
                    >
                      <div className="flex items-center mb-4">
                        <span className="text-3xl mr-3">⚡</span>
                        <h3 className="text-xl font-bold text-gray-800">Resume Evaluation Agent</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">
                      A machine learning system that analyzes resumes to assess candidate profiles and predict potential future job titles and industries, 
                      enabling users to pre-screen their CVs and explore career trajectories
                      </p>
                      <div className="flex items-center text-red-600 group-hover:text-red-800 transition-colors duration-300">
                        <span className="text-sm font-semibold">View on GitHub →</span>
                      </div>
                    </div>

                    {/* Project 6 */}
                    <div 
                      className="group p-6 bg-gradient-to-br from-red-100 to-gray-100 rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-red-300"
                      onClick={() => window.open('https://github.com/tan-aydemir/Hypothesis-Testing-and-Confidence-Intervals-in-Linear-Regression', '_blank')}
                    >
                      <div className="flex items-center mb-4">
                        <span className="text-3xl mr-3">⚡</span>
                        <h3 className="text-xl font-bold text-gray-800">Regression Inference Simulator</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">
                      An interactive web application that extends linear regression analysis with hypothesis testing and confidence intervals, 
                      enabling users to simulate datasets, test parameter significance, and visualize the impact of randomness on regression estimates.
                      </p>
                      <div className="flex items-center text-red-600 group-hover:text-red-800 transition-colors duration-300">
                        <span className="text-sm font-semibold">View on GitHub →</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
      
      case 'Personal':
        return (
          <div className={`min-h-screen bg-gradient-to-br from-blue-50/1 via-blue-50/1 to-blue-100/1 p-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="max-w-6xl mx-auto">
              {/* <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent mb-8 text-center">
                Personal
              </h1> */}
              
              {/* Outside of Code Section */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Outside of Code</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Tennis */}
                  <div className="group p-6 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xl">🎾</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Tennis</h3>
                    </div>

                    {/* Photo with hover overlay */}
                    <div className="relative rounded-xl overflow-hidden border border-green-200 cursor-pointer">
                      <img
                        src={sportsPhoto}
                        alt="Tennis"
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Dark overlay appears on hover */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Text slides in on hover */}
                      <div className="absolute inset-0 p-5 flex items-end text-white">
                        <p className="opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-sm leading-relaxed">
                          I played tennis for over 16 years, competing in national and international tournaments.
                          Being part of the Olympic Preparation Team gave me valuable experience in high-level training and
                          contributed to my sense of discipline and focus.
                        </p>
                      </div>
                    </div>
                  </div>

                  

                  {/* Dogs */}
                  <div className="group p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xl">🐕</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Dogs</h3>
                    </div>

                    {/* Photo with hover overlay */}
                    <div className="relative rounded-xl overflow-hidden border border-blue-200 cursor-pointer">
                      <img
                        src={dogsPhoto}
                        alt="My dogs"
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Dark overlay appears on hover */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Text slides in on hover */}
                      <div className="absolute inset-0 p-5 flex items-end text-white">
                        <p className="opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-sm leading-relaxed">
                          I have four dogs — a Shih Tzu, a Doberman, an Akbash, and a Cocker Spaniel.
                          Whenever I'm home, I love taking them out for long walks. 
                        </p>
                      </div>
                    </div>
                  </div>


                  {/* Guitar */}
                    <div className="group p-6 bg-gradient-to-br from-purple-100 to-violet-100 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-xl">🎸</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Guitar</h3>
                      </div>

                      {/* Photo with hover overlay */}
                      <div className="relative rounded-xl overflow-hidden border border-purple-200 cursor-pointer">
                        <img
                          src={guitarPhoto}
                          alt="Guitar"
                          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Dark overlay appears on hover */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Text slides in on hover */}
                        <div className="absolute inset-0 p-5 flex items-end text-white">
                          <p className="opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-sm leading-relaxed">
                            I have been playing guitar for over 7 years - my dream guitars include the Fender Player Stratocaster and Goldtop Gibson Les Paul
                          </p>
                        </div>
                      </div>
                    </div>


                  {/* Traveling */}
                    <div className="group p-6 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-xl">✈️</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Traveling</h3>
                      </div>

                      {/* Photo with hover overlay */}
                      <div className="relative rounded-xl overflow-hidden border border-teal-200 cursor-pointer">
                        <img
                          src={travelPhoto}
                          alt="Travel / Bergen"
                          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Dark overlay appears on hover */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Text slides in on hover */}
                        <div className="absolute inset-0 p-5 flex items-end text-white">
                          <p className="opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-sm leading-relaxed">
                            I love exploring new places and cultures. My favorite destinations: 🇳🇴, 🇫🇮, 🇵🇷, and 🇬🇧. 
                          </p>
                        </div>
                      </div>
                    </div>


                  {/* Music */}
                  <div className="group p-6 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xl">🎵</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Music</h3>
                    </div>

                    {/* Photo with hover overlay */}
                    <div className="relative rounded-xl overflow-hidden border border-blue-200 cursor-pointer">
                      <img
                        src={concertSymbol}
                        alt="Music"
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Dark overlay appears on hover */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Text slides in on hover */}
                      <div className="absolute inset-0 p-5 flex items-end text-white">
                        <p className="opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-sm leading-relaxed">
                          I love 70s and 80s music. The Beatles, Pink Floyd, Queen, and Fleetwood Mac are some of my favorite bands of all time.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Photography */}
                  <div className="group p-6 bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xl">📷</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Photography</h3>
                    </div>

                    {/* Photo with hover overlay */}
                    <div className="relative rounded-xl overflow-hidden border border-rose-200 cursor-pointer">
                      <img
                        src={photographyPic}
                        alt="Photography"
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Dark overlay appears on hover */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Text slides in on hover */}
                      <div className="absolute inset-0 p-5 flex items-end text-white">
                        <p className="opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-sm leading-relaxed">
                          I enjoy photographing nature, and I've included some of my favorite shots in the section below.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Photography Gallery */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center">
                  <span className="mr-3 text-rose-600 text-4xl">📷</span>
                  Photography
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {photographyData.map((photo) => (
                    <div
                      key={photo.id}
                      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                      onMouseEnter={() => setHoveredPhoto(photo.id)}
                      onMouseLeave={() => setHoveredPhoto(null)}
                      onClick={() => setLightboxPhoto(photo)}  // NEW: open lightbox on click
                    >
                      <div className="aspect-w-4 aspect-h-3 relative">
                        <img
                          src={photo.url}
                          alt={photo.title}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        
                        {/* Overlay */}
                        <div className={`absolute inset-0 bg-black bg-opacity-60 transition-all duration-500 ${
                          hoveredPhoto === photo.id ? 'opacity-100' : 'opacity-0'
                        }`}>
                          <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                            <h3 className="text-xl font-bold mb-2 transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                              {photo.title}
                            </h3>
                            <p className="text-sm leading-relaxed transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0 delay-100">
                              {photo.description}
                            </p>
                          </div>
                        </div>
                        
                        {/* Hover border effect */}
                        <div className="absolute inset-0 border-4 border-white border-opacity-0 group-hover:border-opacity-100 transition-all duration-500 rounded-2xl"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
        case 'More':
          return (
            <div className={`min-h-screen bg-gradient-to-br from-blue-50/1 via-blue-50/1 to-blue-100/1 p-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="max-w-4xl mx-auto">
        
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500">
                  <div className="flex items-center justify-center mb-6">
                    <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Additional Information</h2>
                  </div>
        
                  {/* Page chip */}
        
                  {/* Cards: Contact + Awards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Contact */}
                    <div className="p-6 bg-gradient-to-br from-teal-100 to-blue-100 rounded-xl hover:scale-[1.01] transition-transform duration-300">
                      <div className="flex items-center mb-4">
                        <h3 className="text-xl font-bold text-gray-800">Contact</h3>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li>
                          <a
                            href="mailto:taydemir@bu.edu"
                            className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 hover:underline"
                          >
                            <Mail className="w-5 h-5" aria-hidden="true" />
                            taydemir@bu.edu
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com/tan-aydemir"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 hover:underline"
                          >
                            <Github className="w-5 h-5" aria-hidden="true" />
                            GitHub
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/in/tan-aydemir/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 hover:underline"
                          >
                            <Linkedin className="w-5 h-5" aria-hidden="true" />
                            LinkedIn
                          </a>
                        </li>
                      </ul>

                    </div>
        
                    {/* Awards */}
                    <div className="p-6 bg-gradient-to-br from-teal-100 to-blue-100 rounded-xl hover:scale-[1.01] transition-transform duration-300">
                      <div className="flex items-center mb-4">
                        <h3 className="text-xl font-bold text-gray-800">Awards</h3>
                      </div>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Boston University Presidential Scholar</li>
                        <li>Intel Recognition Prize</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Global background image */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${siteBg})` }}
        />
        {/* Soft overlay so text stays readable; tweak opacity/color to taste */}
        <div className="absolute inset-0 bg-white/10" />
        {/* or a blue tint: <div className="absolute inset-0 bg-blue-50/60" /> */}
      </div>

      {/* Navigation Header */}
      <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center items-center py-4">
            <div className="flex space-x-2">
              {navigationItems.map((item, index) => (
                <button
                  key={item}
                  onClick={() => setCurrentPage(item)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    currentPage === item
                      ? 'bg-gradient-to-r from-blue-500 to-blue-500 text-white shadow-lg shadow-blue-300/25 scale-105'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800 hover:shadow-md'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="relative overflow-hidden">
        {/* Background Animation */}
        {/* <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-pink-200/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div> */}
        
        <div className="relative z-10">
          {renderPage()}

          {/* NEW: Lightbox modal (click-to-enlarge) */}
          {lightboxPhoto && (
            <div
              className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setLightboxPhoto(null)}
            >
              {/* Let the image dictate width; keep caption attached */}
              <div
                className="relative inline-flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/70 text-white text-xl"
                  onClick={() => setLightboxPhoto(null)}
                  aria-label="Close"
                >
                  ×
                </button>

                {/* Key part: no fixed width; contain within viewport */}
                <img
                  src={lightboxPhoto.url}
                  alt={lightboxPhoto.title}
                  className="block w-auto h-auto max-w-[92vw] max-h-[85vh] object-contain"
                />

                <div className="p-4 border-t border-gray-100 w-full">
                  <h3 className="text-lg font-semibold text-gray-900">{lightboxPhoto.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{lightboxPhoto.description}</p>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default PersonalWebsite;
