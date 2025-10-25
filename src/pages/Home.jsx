import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#solutions">Solutions</a>
          <a href="#works">Work</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="hero-content">
          <h1>
            <span className="highlight">Transforming</span>
            <br />
            ideas into impact
          </h1>
          <div className="categories">
            <span>Design</span>
            <span>Media</span>
            <span>Tech</span>
          </div>
          <p>
            We are a multidisciplinary studio delivering tech solutions, design solutions, and video productions 
            that help businesses grow, creators innovate, and brands connect with their audience.
          </p>
          <div className="buttons">
            <button className="btn-primary">Let's Talk</button>
          </div>
        </div>
        <div className="social-links">
          <a href="#">📧</a>
          <a href="#">📘</a>
          <a href="#">🐦</a>
        </div>
        <div className="email">hello@zeroorbitlabs.in</div>
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

      {/* Solutions Section */}
      <section id="solutions" className="solutions-section">
        <h2>SOLUTIONS</h2>
        <p>We are focused on automation</p>
        <div className="solution-columns">
          <div className="design-solution-column">
            <h3>Design</h3>
            <p>
              From brand identity to UI/UX and marketing creatives, we design 
              visuals that are not only aesthetically appealing but also 
              strategically crafted to connect with your audience.
            </p>
            <ul>
              <li>Brand Identity & Logo Design</li>
              <li>Print & Publication Design</li>
              <li>UI/UX & Web Design</li>
              <li>Infographic Design</li>
              <li>Social Media Design</li>
              <li>3D Visualization & Product Mockups</li>
            </ul>
          </div>
          <div className="dev-solution-column">
            <h3>Development</h3>
            <p>
              We deliver modern web development, custom software, 
              and powerful digital tools designed to streamline 
              workflows, enhance user experience, and drive business 
              growth.
            </p>
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
          <div className="video-solution-column">
            <h3>Video Production</h3>
            <p>
              We create promotional films, animations, and storytelling 
              videos that bring ideas to life, showcase products 
              effectively, and build strong brand presence across 
              platforms.
            </p>
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
        </div>
        <p className="mission">
          We are more than a service provider — we are your creative and 
          technical partner. At Zero Orbit Labs, we combine expertise in 
          technology, design, and video production to deliver solutions that 
          are innovative, functional, and impactful. Our approach is minimal 
          yet powerful, ensuring every project is tailored to your goals, crafted 
          with precision, and designed to make a lasting impression.
        </p>
      </section>

      {/* Custom Section */}
      <section id="custom" className="custom-section">
        <h2>CUSTOM</h2>
        <p>NEED MORE?</p>
        <p>
          We aren't a Program that's just right for you. Precision-crafted solutions tailored to your unique 
          brand needs. Elevating your digital experience and evolving your digital marketing strategies to drive 
          radical results.
        </p>
        <button className="btn-primary">Let's Talk</button>
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
          <div className="work-item">
            <h3>Pheonix Citadell</h3>
            <p>We created a doodle animation promo video for Phoenix Citadel, 
            designed to engage audiences with a fun, creative, and visually 
            compelling storytelling style.</p>
          </div>
          <div className="work-item">
            <h3>Growwed</h3>
            <p>We partnered with Growwed to create website and products, 
            delivering a clean, modern, and engaging solution that reflects the 
            brand’s vision of growth and connection.</p>
          </div>
          <div className="work-item">
            <h3>Runfire Protection</h3>
            <p>We created 3D promotional videos for Runfire Protection System, 
            showcasing their products and solutions in a visually engaging 
            and highly detailed manner to highlight functionality and safety 
            features</p>
          </div>
          <div className="work-item">
            <h3>Aditya Fire system</h3>
            <p>We produced 3D promotional videos for Aditya Fire Protection 
            System, highlighting their products and safety solutions with 
            visually detailed and engaging animations to effectively 
            communicate functionality and reliability.</p>
          </div>
          <div className="work-item">
            <h3>Vector Skill Academy</h3>
            <p>We designed and developed an EdTech website for Vector Skill Academy, 
            creating a user-friendly and engaging platform that simplifies learning, 
            enhances accessibility, and reflects the brand’s focus on skill 
            development.</p>
          </div>
          <div className="work-item">
            <h3>Fair Share Bill Splitter</h3>
            <p>We developed FairShare, a bill-splitting app that simplifies group 
            payments and expense tracking. The app features an intuitive 
            interface, seamless calculations, and real-time updates to make 
            sharing costs effortless and transparent.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="whyus" className="why-choose-section">
        <h2>WHY CHOOSE US?</h2>
        <p>We are more than a service provider — we are your creative and technical partner.</p>
        <div className="why-choose-content">
          <div className="why-choose-item">
            <span>•</span>
            <h3>All-in-One Studio – Tech, Design & Video under one roof</h3>
          </div>
          <div className="why-choose-item">
            <span>•</span>
            <h3>Tailored Solutions – Every project customized to your goals</h3>
          </div>
          <div className="why-choose-item">
            <span>•</span>
            <h3>Creative + Functional – Balance of aesthetics and performance</h3>
          </div>
          <div className="why-choose-item">
            <span>•</span>
            <h3>Story-Driven Approach – We design experiences, not just deliverables</h3>
          </div>
          <div className="why-choose-item">
            <span>•</span>
            <h3>End-to-End Support – From idea to launch, we stay with you</h3>
          </div>
        </div>
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
        <div className="process-steps">
          <div className="step">1) IMAGINE</div>
          <div className="step">2) CREATE</div>
          <div className="step">3) LAUNCH</div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq-section">
        <h2>FAQ</h2>
        <div className="faq-content">
          <div className="faq-item">
            <span>•</span>
            <h3>All-in-One Studio – Tech, Design & Video under one roof</h3>
          </div>
          <div className="faq-item">
            <span>•</span>
            <h3>Tailored Solutions – Every project customized to your goals</h3>
          </div>
          <div className="faq-item">
            <span>•</span>
            <h3>Creative + Functional – Balance of aesthetics and performance</h3>
          </div>
          <div className="faq-item">
            <span>•</span>
            <h3>Story-Driven Approach – We design experiences, not just deliverables</h3>
          </div>
          <div className="faq-item">
            <span>•</span>
            <h3>End-to-End Support – From idea to launch, we stay with you</h3>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>CONTACT US</h2>
        <form className="contact-form">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="How can we help you?"></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

      {/* Let's Chat Section */}
      <section id="chat" className="chat-section">
        <h2>LET'S CHAT</h2>
        <div className="chat-links">
          <div className="social-icons">
            <a href="#">📘</a>
            <a href="#">📧</a>
            <a href="#">🐦</a>
          </div>
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