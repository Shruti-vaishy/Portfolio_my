import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Eye, Moon, Sun, Mail, Github, Linkedin, ExternalLink, Code, Book, DollarSign, Car, Shirt, Award, Brain, Database, Wrench, Languages, Layers, Link } from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "EBook Directory",
      description: "A comprehensive web application for browsing, uploading, and managing eBooks with user-friendly interface and advanced search functionality.",
      icon: <Book className="w-6 h-6" />,
      tech: ["React", "Node.js", "MongoDB", "Express", "Multer"],
      color: "from-blue-500 to-cyan-500",
      githubLink: "https://github.com/Shruti-vaishy/E-Book-Store",
      demoLink: "https://e-bookdirectory.onrender.com/registration"
    },
    {
      title: "Currency Converter",
      description: "Real-time currency converter with live exchange rates, API integration, and responsive design for seamless user experience across devices.",
      icon: <DollarSign className="w-6 h-6" />,
      tech: ["JavaScript", "REST API", "CSS3", "HTML5"],
      color: "from-green-500 to-emerald-500",
      githubLink: "https://github.com/Shruti-vaishy/Currency_convertor",
      demoLink: "https://currency-convertor-pearl-theta.vercel.app"
    },
    {
      title: "Ride It",
      description: "Ride-sharing application prototype featuring user authentication, map-based filtering, and real-time ride matching capabilities.",
      icon: <Car className="w-6 h-6" />,
      tech: ["React", "Maps API", "Express", "Socket.io"],
      color: "from-purple-500 to-pink-500",
      githubLink: "https://github.com/Shruti-vaishy/uber-clone-frontend",
      demoLink: "https://github.com/Shruti-vaishy/uber-clone-backend"
    },
    {
      title: "Fashion IQ",
      description: "AI-powered fashion recommendation application using machine learning and computer vision to provide personalized style suggestions.",
      icon: <Shirt className="w-6 h-6" />,
      tech: ["ML", "Computer Vision", "React", "Python"],
      color: "from-orange-500 to-red-500",
      // githubLink: "https://github.com/Shruti-vaishy/fashion-iq",
      // demoLink: "https://fashion-iq-demo.vercel.app"
    }
  ];

  const techStack = {
    Languages: {
      icon: <Languages className="w-6 h-6" />,
      items: ["Java", "JavaScript", "HTML", "CSS", "Python"],
      colors: ["bg-orange-100 text-orange-800", "bg-yellow-100 text-yellow-800", "bg-red-100 text-red-800", "bg-blue-100 text-blue-800"]
    },
    Frameworks: {
      icon: <Layers className="w-6 h-6" />,
      items: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "System Design"],
      colors: ["bg-cyan-100 text-cyan-800", "bg-teal-100 text-teal-800", "bg-green-100 text-green-800", "bg-gray-100 text-gray-800", "bg-red-100 text-red-800"]
    },
    Database: {
      icon: <Database className="w-6 h-6" />,
      items: ["MongoDB", "PostgreSQL", "Google Cloud Platform"],
      colors: ["bg-green-100 text-green-800", "bg-blue-100 text-blue-800", "bg-red-100 text-red-800"]
    },
    Tools: {
      icon: <Wrench className="w-6 h-6" />,
      items: ["Git", "GitHub", "Postman", "Vercel", "Docker"],
      colors: ["bg-orange-100 text-orange-800", "bg-gray-100 text-gray-800", "bg-orange-100 text-orange-800", "bg-black text-white", "bg-red-100 text-red-800"]
    }
  };

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      description: "Fundamental understanding of AWS Cloud concepts, services, and terminology.",
      icon: "☁️"
    },
    {
      title: "Salesforce Developer Certified",
      issuer: "Salesforce",
      description: "Expertise in developing custom applications on the Salesforce platform.",
      icon: "⚡"
    }
  ];

  const dsaTopics = ["Dynamic Programming", "Recursion", "Trees", "Graphs"];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Shruti Vaishy
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="hover:text-purple-600 transition-colors"> About</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-purple-600 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-purple-600 transition-colors">Contact</button>
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" /> }
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 dark:from-purple-800 dark:via-pink-800 dark:to-blue-800 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <div className="w-full h-full rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <span className="text-4xl font-bold">SV</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
              Shruti Vaishy
            </h1>
            <p className="text-xl md:text-2xl mb-4 opacity-90 animate-slide-up delay-100">
              MERN Stack Developer | React Enthusiast | Problem Solver
            </p>
            <p className="text-lg md:text-xl mb-8 opacity-80 max-w-2xl mx-auto animate-slide-up delay-200">
              I build efficient algorithms and modern web applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-300">
              <button className="group bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 hover:shadow-lg flex items-center justify-center">
                <a href="https://drive.google.com/uc?export=download&id=1_mShE77DgiHBliMySEFZYnNhbnmv2Rm2" target="_blank" rel="noopener noreferrer" className="w-5 h-5 mr-2 group-hover:animate-bounce">
                  <Download className="w-5 h-5" />
                </a>
                Download Resume
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
              >
                <Eye className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                View Projects
              </button>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 opacity-70" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                I'm a final-year B.Tech Computer Science student at PSIT Kanpur with a CGPA of 8.55. 
                My journey in tech is driven by a passion for creating clean, responsive, and engaging web applications 
                while solving complex algorithmic challenges.
              </p>
              <p className="text-lg leading-relaxed">
                I specialize in Java for Data Structures and Algorithms, and React for frontend web development. 
                My approach combines strong problem-solving skills with modern web technologies to build 
                applications that are both efficient and user-friendly.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full">
                  <Award className="w-5 h-5 mr-2 text-purple-600" />
                  <span>B.Tech CSE</span>
                </div>
                <div className="flex items-center bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full">
                  <span className="text-purple-600 mr-2">⭐</span>
                  <span>8.55 CGPA</span>
                </div>
                <div className="flex items-center bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full">
                  <Brain className="w-5 h-5 mr-2 text-purple-600" />
                  <span>500+ Problems Solved</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-30 animate-pulse delay-1000"></div>
                <div className="absolute inset-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full opacity-40 animate-pulse delay-2000"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="w-20 h-20 text-purple-600 opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Tech Stack</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {Object.entries(techStack).map(([category, data], index) => (
              <div key={category} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-purple-600 mr-3">
                    {data.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category}</h3>
                </div>
                <div className="space-y-3">
                  {data.items.map((item, itemIndex) => (
                    <div key={item} className={`px-3 py-2 rounded-lg text-sm font-medium transition-transform hover:scale-105 ${
                      darkMode 
                        ? 'bg-gray-600 text-gray-200' 
                        : data.colors[itemIndex] || 'bg-gray-100 text-gray-800'
                    }`}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} text-white mr-4`}>
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-purple-600 transition-colors">{project.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span key={tech} className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-purple-600 hover:text-purple-800 transition-colors group"
                    >
                      <Github className="w-4 h-4 mr-2 group-hover:animate-spin" />
                      Code
                    </a>
                    <a 
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-purple-600 hover:text-purple-800 transition-colors group"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DSA Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">DSA & Problem Solving</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-purple-600">Problem Solving Stats</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Total Problems Solved</span>
                    <span className="text-3xl font-bold text-green-600">500+</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-4">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full animate-pulse" style={{width: '85%'}}></div>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Platforms: LeetCode, GeeksforGeeks, InterviewBit
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Strong Areas</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {dsaTopics.map((topic, index) => (
                  <div key={topic} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center">
                    <div className="text-2xl mb-2">
                      {index === 0 && '🔄'}
                      {index === 1 && '♻️'}
                      {index === 2 && '🌳'}
                      {index === 3 && '🕸️'}
                    </div>
                    <h4 className="font-semibold">{topic}</h4>
                  </div>
                ))}
              </div>
              <div className="flex space-x-4">
                <button className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors transform hover:scale-105">
                  <a href="https://leetcode.com/shrutivaishy/" target="_blank" rel="noopener noreferrer"></a>
                  <span className="mr-2">🚀</span>LeetCode
                </button>
                <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors transform hover:scale-105">
                  <Code className="w-4 h-4 mr-2" />GeeksforGeeks
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Certifications</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={cert.title} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-start mb-4">
                  <div className="text-3xl mr-4">{cert.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                    <p className="text-purple-600 font-medium">{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 dark:from-purple-800 dark:via-pink-800 dark:to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
            <p className="text-xl mt-4 opacity-90">Ready to collaborate on your next project</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="mailto:shrutivaishy610@email.com" className="group bg-white/10 backdrop-blur-md p-8 rounded-xl hover:bg-white/20 transition-all transform hover:scale-105 hover:shadow-2xl text-center">
              <Mail className="w-8 h-8 mx-auto mb-4 group-hover:animate-bounce" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="opacity-80">shrutivaishy610@email.com</p>
            </a>
            <a href="https://github.com/Shruti-vaishy" target="_blank" rel="noopener noreferrer" className="group bg-white/10 backdrop-blur-md p-8 rounded-xl hover:bg-white/20 transition-all transform hover:scale-105 hover:shadow-2xl text-center">
              <Github className="w-8 h-8 mx-auto mb-4 group-hover:animate-spin" />
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="opacity-80">github.com/Shruti-vaishy</p>
            </a>
            <a href="https://linkedin.com/in/shruti-vaishy/" target="_blank" rel="noopener noreferrer" className="group bg-white/10 backdrop-blur-md p-8 rounded-xl hover:bg-white/20 transition-all transform hover:scale-105 hover:shadow-2xl text-center">
              <Linkedin className="w-8 h-8 mx-auto mb-4 group-hover:animate-pulse" />
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="opacity-80">linkedin.com/in/shruti-vaishy</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="opacity-80">&copy; 2025 Shruti Vaishy. Built with passion and code. ❤️</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .delay-100 {
          animation-delay: 0.1s;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;