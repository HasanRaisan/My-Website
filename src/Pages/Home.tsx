import React, { useState, useEffect } from 'react';
import ExperienceList from '../Components/ExperienceList';
import SendEamil from '../Components/SendEmail'
import { Link } from 'react-router-dom';


import SwitchThem from '../Components/SwitchThem'

const Home = () => {


  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };


  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
  <div className="layout-container flex h-full grow flex-col">
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col w-full max-w-5xl flex-1">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 px-4 sm:px-6 py-3 sticky top-5 bg-background-dark/80 backdrop-blur-sm z-50 rounded-lg">
          <div className="flex items-center gap-4 text-white">
            <a className="flex items-center gap-4" href="#home">
              <span className="material-symbols-outlined text-primary text-2xl">
                {" "}
                terminal{" "}
              </span>
              <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] font-mono">
                Hasan Raisan
              </h2>
            </a>
          </div>
          <nav className="hidden md:flex flex-1 justify-end">
            <div className="flex items-center gap-6">
              <a
                className="text-white hover:text-primary text-sm font-medium leading-normal transition-colors"
                href="#about"
              >
                About
              </a>
              <a
                className="text-white hover:text-primary text-sm font-medium leading-normal transition-colors"
                href="#skills"
              >
                Skills
              </a>
              <a
                className="text-white hover:text-primary text-sm font-medium leading-normal transition-colors"
                href="#portfolio"
              >
                Portfolio
              </a>
              <a
                className="text-white hover:text-primary text-sm font-medium leading-normal transition-colors"
                href="#experience"
              >
                Experience
              </a>
              <a
                className="text-white hover:text-primary text-sm font-medium leading-normal transition-colors"
                href="#blog"
              >
                Blog
              </a>
              <a
                className="text-white hover:text-primary text-sm font-medium leading-normal transition-colors"
                href="#contact"
              >
                Contact
              </a>
            </div>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white" id="menu-btn">
              <span className="material-symbols-outlined"> menu </span>
            </button>
          </div>
        </header>
        <div
        className={`absolute top-24 right-4 w-48 bg-background-dark/90 backdrop-blur-sm rounded-lg border border-white/10 z-50 ${isMenuOpen ? '' : 'hidden'}`}          id="mobile-menu"
        >
          <nav className="flex flex-col p-4 gap-4">
            <a
              className="text-white hover:text-primary text-sm font-medium leading-normal transition-colors"
              href="#about"
              onClick={closeMobileMenu}
            >
              About
            </a>
            <a
              className="text-white hover:text-primary text-sm font-medium leading-normal transition-colors"
              href="#skills"
              onClick={closeMobileMenu}
            >
              Skills
            </a>
            <a
              className="text-white hover:text-primary text-sm font-medium leading-normal transition-colors"
              href="#portfolio"
              onClick={closeMobileMenu}
            >
              Portfolio
            </a>
            <a
              className="text-white hover:text-primary text-sm font-medium leading-normal transition-colors"
              href="#experience"
              onClick={closeMobileMenu}
            >
              Experience
            </a>
            <a
              className="text-white hover:text-primary text-sm font-medium leading-normal transition-colors"
              href="#blog"
              onClick={closeMobileMenu}
            >
              Blog
            </a>
            <a
              className="text-white hover:text-primary text-sm font-medium leading-normal transition-colors"
              href="#contact"
              onClick={closeMobileMenu}
            >
              Contact
            </a>
          </nav>
        </div>
        <main
          className="flex flex-col justify-center text-center py-12 sm:py-20"
          id="home"
        >
          <div className="flex flex-col gap-8 px-4">
            <div className="flex flex-col gap-4 text-center">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl md:text-6xl font-mono">
                Hasan Raisan
              </h1>
              <h2 className="text-text-light text-lg sm:text-xl font-normal leading-normal">
                Full-Stack Web Developer
              </h2>
              <p className="text-accent-purple max-w-2xl mx-auto text-base sm:text-lg">
                I build maintainable, efficient, and scalable software solutions from
                concept to deployment.
              </p>
            </div>
            <div className="flex justify-center">
              <a
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-transparent border-2 border-primary text-primary text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary hover:text-white transition-colors"
                href="#portfolio"
              >
                <span className="truncate">View Portfolio</span>
              </a>
            </div>
          </div>
        </main>
        <section className="py-16 sm:py-20" id="about">
          <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-6 font-mono">
            / about-me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 items-center">
            <div
              className="w-full h-64 md:h-full bg-center bg-no-repeat bg-cover rounded-lg md:col-span-1 min-h-[300px]"
              data-alt="Professional headshot of the developer"
              style={{
                backgroundImage:
                  'url("/img/my-picture.png")'
              }}
            />
            <div className="md:col-span-2">
              <p className="text-text-light text-base font-normal leading-relaxed pb-4">
                I enjoy building the logic that powers applications. Whether I’m applying Clean Architecture in .NET, optimizing advanced SQL queries, or securing APIs, I thrive on the technical challenges happening behind the scenes.
              </p>
              <p className="text-text-light text-base font-normal leading-relaxed">
                My goal is to use my skills to create meaningful products that solve real-world problems and deliver great user experiences.
              </p>
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-20" id="skills">
          <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-6 font-mono">
            / skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
            <div className="flex flex-col gap-4">
              <h3 className="text-accent-orange font-bold text-lg">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/20 text-primary text-sm font-medium px-3 py-1 rounded-full">
                  React
                </span>
                <span className="bg-primary/20 text-primary text-sm font-medium px-3 py-1 rounded-full">
                  HTML5
                </span>
                <span className="bg-primary/20 text-primary text-sm font-medium px-3 py-1 rounded-full">
                  CSS3
                </span>
                <span className="bg-primary/20 text-primary text-sm font-medium px-3 py-1 rounded-full">
                  JavaScript
                </span>
                <span className="bg-primary/20 text-primary text-sm font-medium px-3 py-1 rounded-full">
                  TypeScript
                </span>
                <span className="bg-primary/20 text-primary text-sm font-medium px-3 py-1 rounded-full">
                  Bootstrap
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-accent-orange font-bold text-lg">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/20 text-primary text-sm font-medium px-3 py-1 rounded-full">
                  C#
                </span>
                <span className="bg-primary/20 text-primary text-sm font-medium px-3 py-1 rounded-full">
                  C++
                </span>
                <span className="bg-primary/20 text-primary text-sm font-medium px-3 py-1 rounded-full">
                  ASP.NET Core
                </span>
                <span className="bg-primary/20 text-primary text-sm font-medium px-3 py-1 rounded-full">
                  .NET Framework
                </span>
                <span className="bg-primary/20 text-primary text-sm font-medium px-3 py-1 rounded-full">
                  ADO.NET
                </span>
                <span className="bg-primary/20 text-primary text-sm font-medium px-3 py-1 rounded-full">
                  Entity Framework Core
                </span>
                <span className="bg-primary/20 text-primary text-sm font-medium px-3 py-1 rounded-full">
                  REST APIs
                </span>
                <span className="bg-primary/20 text-primary text-sm font-medium px-3 py-1 rounded-full">
                  Windows Service
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-accent-orange font-bold text-lg">
                Databases
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/20 text-primary text-sm font-medium px-3 py-1 rounded-full">
                  SQL Server
                </span>
                <span className="bg-primary/20 text-primary text-sm font-medium px-3 py-1 rounded-full">
                  T-SQL (Transact-SQL)
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-accent-orange font-bold text-lg">Tools</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/20 text-primary text-sm font-medium px-3 py-1 rounded-full">
                  Git &amp; GitHub
                </span>
                <span className="bg-primary/20 text-primary text-sm font-medium px-3 py-1 rounded-full">
                  Postman
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-20" id="portfolio">
          <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-6 font-mono">
            / portfolio
          </h2> 
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">


            <div className="bg-white/5 rounded-lg overflow-hidden group">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                data-alt="Screenshot of a modern e-commerce dashboard"
                style={{
                  backgroundImage:'url("/img/teacher-student-api.jpg")'
                }}
              />
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-white text-xl font-bold">
                  Teacher Student API - Clean Architecture
                </h3>
                <p className="text-text-light text-sm">
                  A scalable and maintainable Web API designed using Clean
                  Architecture principles, ensuring clear separation of
                  responsibilities across all layers.          
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-accent-orange text-xs font-semibold bg-accent-orange/10 px-2.5 py-1 rounded-full">
                    C#
                  </span>
                  <span className="text-accent-orange text-xs font-semibold bg-accent-orange/10 px-2.5 py-1 rounded-full">
                    .NET Core
                  </span>
                  <span className="text-accent-orange text-xs font-semibold bg-accent-orange/10 px-2.5 py-1 rounded-full">
                    EF Core
                  </span>
                  <span className="text-accent-orange text-xs font-semibold bg-accent-orange/10 px-2.5 py-1 rounded-full">
                    SQL Server
                  </span>
                </div>
                <a
                  className="mt-4 flex items-center gap-2 text-primary hover:underline font-mono text-sm"
                  href="https://github.com/HasanRaisan/CleanArchitecture_TeacherStudentAPI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.218.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.745 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  <span>View Repository</span>
                </a>
              </div>
            </div>





            <div className="bg-white/5 rounded-lg overflow-hidden group">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                data-alt="Screenshot of a project management application"
                style={{
                  backgroundImage: 'url("/img/driving-vehicle-license.png")'
                }}
              />
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-white text-xl font-bold">
                  Driving Vehicle License Department (DVLD)
                </h3>
                
                <p className="text-text-light text-sm">
                  A desktop system designed for the issuance and renewal of
                  various types of driver's licenses, within an environment that
                  facilitates handling driver data.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-accent-orange text-xs font-semibold bg-accent-orange/10 px-2.5 py-1 rounded-full">
                    C#
                  </span>
                  <span className="text-accent-orange text-xs font-semibold bg-accent-orange/10 px-2.5 py-1 rounded-full">
                    .NET Windows Forms
                  </span>
                  <span className="text-accent-orange text-xs font-semibold bg-accent-orange/10 px-2.5 py-1 rounded-full">
                    SQL Server
                  </span>
                </div>
                <a
                  className="mt-4 flex items-center gap-2 text-primary hover:underline font-mono text-sm"
                  href="https://github.com/HasanRaisan/Driving-Vehicle-License-Department-DVLD-"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.218.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.745 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  <span>View Repository</span>
                </a>
              </div>
            </div>




            <div className="bg-white/5 rounded-lg overflow-hidden group">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                data-alt="Screenshot of a social media platform"
                style={{
                  backgroundImage:  'url("/img/bank.png")'
                }}
              />
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-white text-xl font-bold">
                  Bank Management System (BMS)
                </h3>
                <p className="text-text-light text-sm">
                C++ command-line bank system. Manages users (permissions), customers (CRUD), transfers, deposits, currency rates, and logs data.                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-accent-orange text-xs font-semibold bg-accent-orange/10 px-2.5 py-1 rounded-full">
                    C++
                  </span>
                  <span className="text-accent-orange text-xs font-semibold bg-accent-orange/10 px-2.5 py-1 rounded-full">
                    OOP
                  </span>
                  <span className="text-accent-orange text-xs font-semibold bg-accent-orange/10 px-2.5 py-1 rounded-full">
                    File Handling (I/O)
                  </span>
                  <span className="text-accent-orange text-xs font-semibold bg-accent-orange/10 px-2.5 py-1 rounded-full">
                    Command Line
                  </span>
                </div>
                <a
                  className="mt-4 flex items-center gap-2 text-primary hover:underline font-mono text-sm"
                  href="https://github.com/HasanRaisan/Bank-System"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.218.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.745 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  <span>View Repository</span>
                </a>
              </div>
            </div>











            <div className="bg-white/5 rounded-lg overflow-hidden group">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                data-alt="Screenshot of a blog website"
                style={{
                  backgroundImage: 'url("/img/student-api.png")'
                }}
              />
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-white text-xl font-bold">Student API</h3>
                <p className="text-text-light text-sm">
                  Web API utilizing a three-tier architecture for robust student data management. Implemented with ASP.NET Core and SQL Server.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-accent-orange text-xs font-semibold bg-accent-orange/10 px-2.5 py-1 rounded-full">
                    C#
                  </span>
                  <span className="text-accent-orange text-xs font-semibold bg-accent-orange/10 px-2.5 py-1 rounded-full">
                    RESTful API
                  </span>
                  <span className="text-accent-orange text-xs font-semibold bg-accent-orange/10 px-2.5 py-1 rounded-full">
                    SQL Server
                  </span>
                </div>
                <a
                  className="mt-4 flex items-center gap-2 text-primary hover:underline font-mono text-sm"
                  href="https://github.com/HasanRaisan/Student-API"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.218.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.745 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  <span>View Repository</span>
                </a>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-lg overflow-hidden group">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                data-alt="Screenshot of a weather application"
                style={{
                  backgroundImage:
                    'url("/img/windows-services.png")'
                }}
              />
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-white text-xl font-bold">
                  Windows Services
                </h3>
                <p className="text-text-light text-sm">
                  This repository features several C# (.NET Framework) Windows
                  Service projects that showcase practical background task
                  implementations.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-accent-orange text-xs font-semibold bg-accent-orange/10 px-2.5 py-1 rounded-full">
                    C#
                  </span>
                  <span className="text-accent-orange text-xs font-semibold bg-accent-orange/10 px-2.5 py-1 rounded-full">
                    Windows Services
                  </span>
                </div>
                <a
                  className="mt-4 flex items-center gap-2 text-primary hover:underline font-mono text-sm"
                  href="https://github.com/HasanRaisan/Windows-Services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.218.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.745 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  <span>View Repository</span>
                </a>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg overflow-hidden group">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                data-alt="Screenshot of a URL shortener service"
                style={{
                  backgroundImage:  'url("/img/atm.png")'
                }}
              />
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-white text-xl font-bold">ATM</h3>
                <p className="text-text-light text-sm">
                  A command-line program that simulates
                  the functions of an Automated Teller Machine (ATM), using
                  storing customer data in a plain text file.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-accent-orange text-xs font-semibold bg-accent-orange/10 px-2.5 py-1 rounded-full">
                    C++
                  </span>
                  <span className="text-accent-orange text-xs font-semibold bg-accent-orange/10 px-2.5 py-1 rounded-full">
                    OOP
                  </span>
                  <span className="text-accent-orange text-xs font-semibold bg-accent-orange/10 px-2.5 py-1 rounded-full">
                    File Handling (I/O)
                  </span>
                </div>
                <a
                  className="mt-4 flex items-center gap-2 text-primary hover:underline font-mono text-sm"
                  href="https://github.com/HasanRaisan/ATM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.218.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.745 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  <span>View Repository</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-20" id="experience">
          <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-6 font-mono">
            / experience
          </h2>
          <div className="p-4 flex flex-col gap-12">

            <ExperienceList  />
            
          </div>
        </section>
        <section className="py-16 sm:py-20" id="blog">
          <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-6 font-mono">
            / latest-posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
            <div className="flex flex-col gap-3">
              <Link to = {`/blog`} >
              <h3 className="text-white text-lg font-bold hover:text-primary cursor-pointer transition-colors">
                Advanced Database Concepts for Developers
              </h3>
              </Link>
              
              <p className="text-text-light text-sm">Advanced database needs: Covering Indexes and Partitioning for speed. Use Schema Migration (Flyway) for controlled structure, Temporal Tables for history, and Materialized Views to accelerate reports. Secure passwords with Hash & Salt.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-accent-purple text-xs font-semibold bg-accent-purple/10 px-2.5 py-1 rounded-full">
                  Database
                </span>
                <span className="text-accent-purple text-xs font-semibold bg-accent-purple/10 px-2.5 py-1 rounded-full">
                  Security
                </span>
              </div>
            </div>
            {/* <div className="flex flex-col gap-3">
              <h3 className="text-white text-lg font-bold hover:text-primary cursor-pointer transition-colors">
                Building a REST API with Node.js and Express
              </h3>
              <p className="text-text-light text-sm">
                A step-by-step guide to creating a robust and scalable RESTful
                API from scratch using the powerful combination of Node.js and
                Express.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-accent-purple text-xs font-semibold bg-accent-purple/10 px-2.5 py-1 rounded-full">
                  Node.js
                </span>
                <span className="text-accent-purple text-xs font-semibold bg-accent-purple/10 px-2.5 py-1 rounded-full">
                  API
                </span>
                <span className="text-accent-purple text-xs font-semibold bg-accent-purple/10 px-2.5 py-1 rounded-full">
                  Backend
                </span>
              </div>
            </div> */}
          </div>
        </section>
        <section className="py-16 sm:py-20" id="contact">
          <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-6 font-mono">
            / contact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
            <div className="flex flex-col gap-6">
              <p className="text-text-light">
                Have a project in mind or just want to say hi? Feel free to
                reach out. I'm always open to discussing new opportunities and
                collaborations.
              </p>
              <div
                className="flex items-center gap-4 group cursor-pointer"
                onClick={() => navigator.clipboard.writeText('hasan.raisann@email.com')}
                >
                <span className="material-symbols-outlined text-primary">
                  mail
                </span>
                <span className="text-white font-mono">
                  hasan.raisann@gmail.com
                </span>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-xs bg-white/10 px-2 py-1 rounded-md">
                  <span className="material-symbols-outlined text-sm">
                    content_copy
                  </span>{" "}
                  Copy
                </button>
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  className="text-text-light hover:text-primary transition-colors"
                  href="https://github.com/HasanRaisan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.218.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.745 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                      fillRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  className="text-text-light hover:text-primary transition-colors"
                  href="https://www.linkedin.com/in/hasan-raisan-949b84241/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      clipRule="evenodd"
                      d="M19.333 0H4.667C2.089 0 0 2.089 0 4.667v14.666C0 21.911 2.089 24 4.667 24h14.666C21.911 24 24 21.911 24 19.333V4.667C24 2.089 21.911 0 19.333 0zM8.333 19.333H5V8.333h3.333v11zm-1.667-12.5a2.083 2.083 0 110-4.167 2.083 2.083 0 010 4.167zM19.333 19.333h-3.333v-5.5c0-1.31-.025-3-1.833-3-1.833 0-2.117 1.433-2.117 2.9v5.6H7V8.333h3.167v1.442h.045c.438-.833 1.5-1.717 3.125-1.717 3.342 0 3.958 2.2 3.958 5.058v5.825z"
                      fillRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

              <SendEamil/>

          </div>
        </section>
      </div>
    </div>
    <button
          className={`fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center bg-primary/80 text-white rounded-full border border-white/10 shadow-lg transition-all duration-300 ease-in-out ${showScrollBtn ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <span className="material-symbols-outlined"> arrow_upward </span>
      </button>
  </div> 
</div>
  )
  
}

export default Home


