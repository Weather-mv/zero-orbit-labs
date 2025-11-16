import React, { useState } from 'react'
import '../css/Home.css'

const Home = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };


  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }




  // Handle "Let's Talk" button clicks
  const handleLetsTalk = () => {
    scrollToSection('contact')
  }

  // Handle social media clicks
  const handleSocialClick = (platform) => {
    const urls = {
      email: 'mailto:hello@zeroorbitlabs.in',
      facebook: 'https://facebook.com/zeroorbitlabs', // Replace with actual URL
      twitter: 'https://twitter.com/zeroorbitlabs' // Replace with actual URL
    }
    
    if (urls[platform]) {
      window.open(urls[platform], platform === 'email' ? '_self' : '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <nav className="nav" aria-label="Main navigation">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="nav-button"
            aria-label="Navigate to home section"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('solutions')} 
            className="nav-button"
            aria-label="Navigate to solutions section"
          >
            Solutions
          </button>
          <button 
            onClick={() => scrollToSection('works')} 
            className="nav-button"
            aria-label="Navigate to work section"
          >
            Work
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="nav-button"
            aria-label="Navigate to contact section"
          >
            Contact
          </button>
        </nav>
        
        <div className="hero-content">
           <span className="highlight">Transforming</span>
          <h1>
            ideas into impact
          </h1>
             <div className="buttons">
            <button 
              className="btn-primary" 
              onClick={handleLetsTalk}
              aria-label="Contact us"
            >
              Let's Talk
            </button>
          </div>

           <aside className="social-links" aria-label="Social media links">
          <button 
            onClick={() => handleSocialClick('email')}
            className="social-button"
            aria-label="Send us an email"
            title="Email us"z
          >
            📧
          </button>
          <button 
            onClick={() => handleSocialClick('facebook')}
            className="social-button"
            aria-label="Visit our Facebook page"
            title="Facebook"
          >
            📘
          </button>
          <button 
            onClick={() => handleSocialClick('twitter')}
            className="social-button"
            aria-label="Visit our Twitter page"
            title="Twitter"
          >
            🐦
          </button>
        </aside>

        
          <div className="categories">
            <span>Tech</span>
            <span>Media</span>
            <span>Design</span>
          </div>
          <p>
            We are a multidisciplinary studio delivering tech solutions, design solutions, and video productions 
            that help businesses grow, creators innovate, and brands connect with their audience.
          </p>
       
        </div>
        
    
        
        <div className="email">
          <a href="mailto:hello@zeroorbitlabs.in">hello@zeroorbitlabs.in</a>
        </div>
      </section>

      {/* Project Card*/}

      <div className="project-card">
    <h2>Discuss your project idea</h2>
    <button className="btn-start">
      Start your project now →
    </button>
     </div>

      {/* Video Section */}
      <section id="video" className="video-section">
        <h2>VIDEO</h2>
        {/* Placeholder for video content */}
      </section>

      {/* Clients Section */}
      <section className="clients-section">
    <h2>CLIENTS</h2>
    <div className="clients-slider-container">
      <div className="clients-slider">
  
        <div className="client-logo">
          <img src="../src/assets/Vector Skill Academy.svg" alt="" />
        </div>
        <div className="client-logo">
          <div className="shape-2"></div>
        </div>
        <div className="client-logo">
          <div className="shape-3"></div>
        </div>
        <div className="client-logo">
          <div className="shape-4"></div>
        </div>
      </div>
    </div>
  </section>

      {/* Solutions Section */}

 <section id="solutions" className="solutions-section">
  <h2>SOLUTIONS</h2>
  

  <div className="solutions-header">
    <div className="solutions-header-left">
      <h3>WE ARE<br />FOCUSED ON<br />AUTOMATION</h3>
    </div>
    <div className="solutions-header-right">
      <p>
        At Zero Orbit Labs, we bring together technology, design, and storytelling to deliver comprehensive experiences. Our solutions are built to help businesses scale, creators innovate, and brands connect meaningfully with their audience. From building powerful web platforms and crafting impactful designs to producing compelling video content, we provide everything you need to stand out in the digital world.
      </p>
    </div>
  </div>


  <article className="solution-item design">
    <div className="solution-content">
      <h3>Design</h3>
      <p>
        From brand identity to UI/UX and marketing creatives, we design visuals that are not only aesthetically appealing but also strategically crafted to connect with your audience.
      </p>
    </div>
    <div className="solution-list">
      <ul>
        <li>Brand Identity & Logo Design</li>
        <li>Print & Publication Design</li>
        <li>UI/UX & Web Design</li>
        <li>Infographic Design</li>
        <li>Social Media Design</li>
        <li>3D Visualization & Product Mockups</li>
      </ul>
    </div>
  </article>


  <article className="solution-item development">
    <div className="solution-content">
      <h3>Development</h3>
      <p>
        We deliver modern web development, custom software, and powerful digital tools designed to streamline workflows, enhance user experience, and drive business growth.
      </p>
    </div>
    <div className="solution-list">
      <ul>
        <li>Web Design & Development</li>
        <li>Software & Application Development</li>
        <li>Custom Tools & Plugin Development</li>
        <li>E-Commerce Development</li>
        <li>API Development & Integration</li>
        <li>CMS Development</li>
        <li>Maintenance & Support Services</li>
      </ul>
    </div>
  </article>

  <article className="solution-item video">
    <div className="solution-content">
      <h3>Video Production</h3>
      <p>
        We create promotional films, animations, and storytelling videos that bring ideas to life, showcase products effectively, and build strong brand presence across platforms.
      </p>
    </div>
    <div className="solution-list">
      <ul>
        <li>Promotional Videos</li>
        <li>Motion Graphics & Visual Effects</li>
        <li>Explainer Videos</li>
        <li>Product Demonstration Videos</li>
        <li>Client Testimonial Videos</li>
        <li>Social Media Content Videos</li>
        <li>Animated Videos (2D/3D)</li>
        <li>Brand Films & Storytelling</li>
        <li>Event Coverage & Highlights</li>
      </ul>
    </div>
  </article>
</section>

    {/* Custom Solutions Section */}
<section id="custom" className="custom-section">
  <h2>CUSTOM</h2>
  <p className="custom-subtitle">NEED MORE?</p>
  <p className="custom-description">
    We'll create a Program that's just right for you. Precision-crafted solutions tailored to your unique brand needs. Elevating your digital experience and evolving your digital marketing strategies to drive radical results.
  </p>
  <button className="btn-primary" onClick={handleLetsTalk} aria-label="Contact us for custom solutions">
    Let's Talk
  </button>
</section>

      {/* Works Section */}
      <div id='works' className="works-container">

    <header className="works-header">
      <h1>WORKS</h1>
      <div className="works-intro">
        <div className="works-intro-left">
          <h2>WHERE<br/>CREATIVITY<br/>MEETS<br/>EXECUTION</h2>
        </div>
        <div className="works-intro-right">
          <p>
            Every project we create is built on a balance of creativity, functionality, and storytelling. From innovative web platforms to impactful brand narratives and cutting-edge video work, we bring your vision to life with precision, passion, and a commitment to delivering results that make an impact.
          </p>
        </div>
      </div>
    </header>


    <article className="project-item">
      <div className="project-content">
        <h3>Pheonix Citadell</h3>
        <p>
          We created a doodle animation promo video for Phoenix Citadell Insurance to leverage business sales in a fun, colorful, and visually appealing way.
        </p>
      </div>
      <div className="project-image">
        <div className="project-image-placeholder">Project Image</div>
      </div>
    </article>

   <article className="project-item">
      <div className="project-content">
        <h3>Growwed</h3>
        <p>
          We partnered with Growwed to create website and products, delivering a clean, modern, and engaging solution that reflects the beauty and fun of Growwed live.
        </p>
      </div>
      <div className="project-image">
        <div className="project-image-placeholder">Project Image</div>
      </div>
    </article>


    <article className="project-item">
      <div className="project-content">
        <h3>Runfire Protection</h3>
        <p>
          We created an promotional video for Runfire Protection covers a dynamic and engaging presentation that highlights the company's fire safety services and state-of-the-art products, designed to convey trust, reliability and safety.
        </p>
      </div>
      <div className="project-image">
        <div className="project-image-placeholder">Project Image</div>
      </div>
    </article>


    <article className="project-item">
      <div className="project-content">
        <h3>Aditya Fire system</h3>
        <p>
          We produced 3D promotional video for Aditya Fire Protection that showcases their state-of-the-art fire safety solutions with stunning visuals and engaging animation to effectively communicate functionality and reliability.
        </p>
      </div>
      <div className="project-image">
        <div className="project-image-placeholder">Project Image</div>
      </div>
    </article>

    <article className="project-item">
      <div className="project-content">
        <h3>Vector Skill Academy</h3>
        <p>
          We developed and designed an e-learning & tech academy creating a user-friendly and engaging platform that simplifies learning, enhances accessibility, and reflects the brand's focus on skill advancement.
        </p>
      </div>
      <div className="project-image">
        <div className="project-image-placeholder">Project Image</div>
      </div>
    </article>

    <article className="project-item">
      <div className="project-content">
        <h3>Fair Share Bill Splitter</h3>
        <p>
          We developed FairShare, a bill-splitting app built using Ionic and Angular development, designed to effortlessly manage group expenses, streamline cost-sharing, and keep finances transparent.
        </p>
      </div>
      <div className="project-image">
        <div className="project-image-placeholder">Project Image</div>
      </div>
    </article>

      {/* Why Choose Us Section */}
    <section className="why-choose-us">
      <div className="container">
        <h1 className="title">WHY CHOOSE US?</h1>
        
        <p className="description">
          We are more than a service provider — we are your creative and 
          technical partner. At Zero Orbit Labs, we combine expertise in 
          technology, design, and video production to deliver solutions that 
          are not only visually stunning but also highly functional. Simple 
          yet powerful, ensuring every project is tailored to your goals, crafted 
          with precision, and designed to make a lasting impression.
        </p>

        <div className="features-list">
          <div className="feature-item">
            <p>All-in-One Studio – Tech, Design & Video under one roof</p>
          </div>
          
          <div className="feature-item">
            <p>Tailored Solutions – Every project customized to your goals</p>
          </div>
          
          <div className="feature-item">
            <p>Creative + Functional – Balance of aesthetics and performance</p>
          </div>
          
          <div className="feature-item">
            <p>Story-Driven Approach – We design experiences, not just deliverables</p>
          </div>
          
          <div className="feature-item">
            <p>End-to-End Support – From idea to launch, we stay with you</p>
          </div>
        </div>
      </div>
    </section>

      {/* Our Process Section */}
      <section className="our-process">
      <div className="container">
        <h1 className="title">OUR PROCESS</h1>
        
        <p className="description">
          We follow an automation-driven workflow that blends creativity, 
          technology, and efficiency. From ideation to execution, we 
          streamline every step using smart tools and custom-built 
          automations, ensuring faster delivery, consistent quality, and 
          scalable results.
        </p>
      </div>

      <div className="process-steps">
        <div className="step-item step-1">
          <div className="step-overlay"></div>
          <h2 className="step-title">1) IMAGINE</h2>
        </div>
        
        <div className="step-item step-2">
          <div className="step-overlay"></div>
          <h2 className="step-title">2) CREATE</h2>
        </div>
        
        <div className="step-item step-3">
          <div className="step-overlay"></div>
          <h2 className="step-title">3) LAUNCH</h2>
        </div>
      </div>
    </section>

      {/* FAQ Section */}
        <section className="faq-section">
      <div className="container">
        <h1 className="title">FAQ</h1>

        <div className="faq-list">
          <div className={`faq-item ${openIndex === 0 ? 'active' : ''}`}>
            <div className="faq-header" onClick={() => toggleFAQ(0)}>
              <div className="faq-icon">{openIndex === 0 ? '✕' : '—'}</div>
              <h3 className="faq-question">
                All-in-One Studio – Tech, Design & Video under one roof
              </h3>
              <div className="faq-toggle">{openIndex === 0 ? '✕' : '+'}</div>
            </div>
            {openIndex === 0 && (
              <div className="faq-answer">
                <p>
                  We used to be like every other agency, that is, until we changed to be like no other agency (7 years ago). Everything we do centers around a love for growth. It's super intentional, purposeful. With the goal of you not needing us ever again and fully able to grow on your own with the values.
                </p>
              </div>
            )}
          </div>

          <div className={`faq-item ${openIndex === 1 ? 'active' : ''}`}>
            <div className="faq-header" onClick={() => toggleFAQ(1)}>
              <div className="faq-icon">—</div>
              <h3 className="faq-question">
                Tailored Solutions – Every project customized to your goals
              </h3>
              <div className="faq-toggle">+</div>
            </div>
            {openIndex === 1 && (
              <div className="faq-answer">
                <p>Your answer content goes here.</p>
              </div>
            )}
          </div>

          <div className={`faq-item ${openIndex === 2 ? 'active' : ''}`}>
            <div className="faq-header" onClick={() => toggleFAQ(2)}>
              <div className="faq-icon">—</div>
              <h3 className="faq-question">
                Creative + Functional – Balance of aesthetics and performance
              </h3>
              <div className="faq-toggle">+</div>
            </div>
            {openIndex === 2 && (
              <div className="faq-answer">
                <p>Your answer content goes here.</p>
              </div>
            )}
          </div>

          <div className={`faq-item ${openIndex === 3 ? 'active' : ''}`}>
            <div className="faq-header" onClick={() => toggleFAQ(3)}>
              <div className="faq-icon">—</div>
              <h3 className="faq-question">
                Story-Driven Approach – We design experiences, not just deliverables
              </h3>
              <div className="faq-toggle">+</div>
            </div>
            {openIndex === 3 && (
              <div className="faq-answer">
                <p>Your answer content goes here.</p>
              </div>
            )}
          </div>

          <div className={`faq-item ${openIndex === 4 ? 'active' : ''}`}>
            <div className="faq-header" onClick={() => toggleFAQ(4)}>
              <div className="faq-icon">—</div>
              <h3 className="faq-question">
                End-to-End Support – From idea to launch, we stay with you
              </h3>
              <div className="faq-toggle">+</div>
            </div>
            {openIndex === 4 && (
              <div className="faq-answer">
                <p>Your answer content goes here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>

      {/* Contact Section */}
       <section id='contact' className="contact-us">
      <div className="container">
        <h1 className="title">CONTACT US</h1>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="form-input"
            required
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="form-input"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />

          <textarea
            name="message"
            placeholder="How can we help you?"
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
            rows="5"
            required
          />

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </section>

      {/* Let's Chat Section
      <section id="chat" className="chat-section">
        <h2>LET'S CHAT</h2>
        <div className="chat-links">
          <aside className="social-icons" aria-label="Social media links">
            <button 
              onClick={() => handleSocialClick('facebook')}
              className="social-button"
              aria-label="Visit our Facebook page"
              title="Facebook"
            >
              📘
            </button>
            <button 
              onClick={() => handleSocialClick('email')}
              className="social-button"
              aria-label="Send us an email"
              title="Email us"
            >
              📧
            </button>
            <button 
              onClick={() => handleSocialClick('twitter')}
              className="social-button"
              aria-label="Visit our Twitter page"
              title="Twitter"
            >
              🐦
            </button>
          </aside>
          <div className="company-info">
            <p>Company</p>
            <p>reach out</p>
          </div>
        </div>
      </section>*/}
    </div>
    </div> 
  )
}

export default Home;  