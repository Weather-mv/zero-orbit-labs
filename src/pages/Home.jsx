import React, { useState } from 'react'
import './Home.css'

const Home = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Add your form submission logic here (API call, etc.)
    console.log('Form submitted:', formData)
    
    // Show success message or handle response
    alert('Thank you for your message! We will get back to you soon.')
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    })
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
        
        <aside className="social-links" aria-label="Social media links">
          <button 
            onClick={() => handleSocialClick('email')}
            className="social-button"
            aria-label="Send us an email"
            title="Email us"
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
        
        <div className="email">
          <a href="mailto:hello@zeroorbitlabs.in">hello@zeroorbitlabs.in</a>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="video-section">
        <h2>VIDEO</h2>
        {/* Placeholder for video content */}
      </section>

      {/* Clients Section */}
      <section id="clients" className="clients-section">
        <h2>CLIENTS</h2>
        {/* Placeholder for client logos */}
      </section>

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


<section id="custom" className="custom-section">
  <h2>CUSTOM</h2>
  <p className="custom-subtitle">NEED MORE?</p>
  <p className="custom-description">
    We'll create a Program that's just right for you. Precision-crafted solutions tailored to your unique brand needs. Elevating your digital experience and evolving your digital marketing strategies to drive radical results.
  </p>
  <button className="btn-primary" onclick="handleLetsTalk()" aria-label="Contact us for custom solutions">
    Let's Talk
  </button>
</section>

      {/* Works Section */}
      <section id="works" className="works-section">
        <h2>WORKS</h2>
        <p>Where creativity meets execution</p>
        <p>
          Every project we create is built on a balance of creativity, functionality, 
          and storytelling. From innovative web platforms to impactful brand 
          identities and engaging videos, our work reflects our passion for helping 
          businesses, creators, and brands connect with their audience. Explore 
          our portfolio to see how we transform ideas into meaningful digital 
          experiences.
        </p>
        <div className="works-grid">
          <article className="work-item">
            <h3>Pheonix Citadell</h3>
            <p>We created a doodle animation promo video for Phoenix Citadel, 
            designed to engage audiences with a fun, creative, and visually 
            compelling storytelling style.</p>
          </article>
          <article className="work-item">
            <h3>Growwed</h3>
            <p>We partnered with Growwed to create website and products, 
            delivering a clean, modern, and engaging solution that reflects the 
            brand's vision of growth and connection.</p>
          </article>
          <article className="work-item">
            <h3>Runfire Protection</h3>
            <p>We created 3D promotional videos for Runfire Protection System, 
            showcasing their products and solutions in a visually engaging 
            and highly detailed manner to highlight functionality and safety 
            features</p>
          </article>
          <article className="work-item">
            <h3>Aditya Fire system</h3>
            <p>We produced 3D promotional videos for Aditya Fire Protection 
            System, highlighting their products and safety solutions with 
            visually detailed and engaging animations to effectively 
            communicate functionality and reliability.</p>
          </article>
          <article className="work-item">
            <h3>Vector Skill Academy</h3>
            <p>We designed and developed an EdTech website for Vector Skill Academy, 
            creating a user-friendly and engaging platform that simplifies learning, 
            enhances accessibility, and reflects the brand's focus on skill 
            development.</p>
          </article>
          <article className="work-item">
            <h3>Fair Share Bill Splitter</h3>
            <p>We developed FairShare, a bill-splitting app that simplifies group 
            payments and expense tracking. The app features an intuitive 
            interface, seamless calculations, and real-time updates to make 
            sharing costs effortless and transparent.</p>
          </article>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="whyus" className="why-choose-section">
        <h2>WHY CHOOSE US?</h2>
        <p>We are more than a service provider — we are your creative and technical partner.</p>
        <ul className="why-choose-content">
          <li className="why-choose-item">
            <h3>All-in-One Studio – Tech, Design & Video under one roof</h3>
          </li>
          <li className="why-choose-item">
            <h3>Tailored Solutions – Every project customized to your goals</h3>
          </li>
          <li className="why-choose-item">
            <h3>Creative + Functional – Balance of aesthetics and performance</h3>
          </li>
          <li className="why-choose-item">
            <h3>Story-Driven Approach – We design experiences, not just deliverables</h3>
          </li>
          <li className="why-choose-item">
            <h3>End-to-End Support – From idea to launch, we stay with you</h3>
          </li>
        </ul>
      </section>

      {/* Our Process Section */}
      <section id="process" className="process-section">
        <h2>OUR PROCESS</h2>
        <p>
          We follow an automation-driven workflow that blends creativity, 
          technology, and efficiency. From ideation to execution, we 
          streamline every step using smart tools and custom-built 
          automations, ensuring faster delivery, consistent quality, and 
          scalable results.
        </p>
        <ol className="process-steps">
          <li className="step">IMAGINE</li>
          <li className="step">CREATE</li>
          <li className="step">LAUNCH</li>
        </ol>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq-section">
        <h2>FAQ</h2>
        <ul className="faq-content">
          <li className="faq-item">
            <h3>All-in-One Studio – Tech, Design & Video under one roof</h3>
          </li>
          <li className="faq-item">
            <h3>Tailored Solutions – Every project customized to your goals</h3>
          </li>
          <li className="faq-item">
            <h3>Creative + Functional – Balance of aesthetics and performance</h3>
          </li>
          <li className="faq-item">
            <h3>Story-Driven Approach – We design experiences, not just deliverables</h3>
          </li>
          <li className="faq-item">
            <h3>End-to-End Support – From idea to launch, we stay with you</h3>
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>CONTACT US</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="firstName"
            placeholder="First Name" 
            value={formData.firstName}
            onChange={handleInputChange}
            required
            aria-label="First name"
          />
          <input 
            type="text" 
            name="lastName"
            placeholder="Last Name" 
            value={formData.lastName}
            onChange={handleInputChange}
            required
            aria-label="Last name"
          />
          <input 
            type="email" 
            name="email"
            placeholder="Email" 
            value={formData.email}
            onChange={handleInputChange}
            required
            aria-label="Email address"
          />
          <textarea 
            name="message"
            placeholder="How can we help you?"
            value={formData.message}
            onChange={handleInputChange}
            required
            aria-label="Your message"
          ></textarea>
          <button type="submit" aria-label="Submit contact form">Submit</button>
        </form>
      </section>

      {/* Let's Chat Section */}
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
      </section>
    </div>
  )
}

export default Home