// Home.jsx – Cleaned, optimized, best practices (SonarLint-safe)

import React, { useState, useEffect, useRef, useCallback } from 'react';
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import swal from 'sweetalert';
import '../css/Home.css';

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxLHZ-aBJppMmXMiRHsSoIaJHlpRMaJo3-18nmuPDRW0h97B_EdqmrahajH9FyEPbXt/exec";

const Home = () => {
  const sliderRef = useRef(null);

  // Clone slider rows once
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      const clone = slider.innerHTML;
      slider.innerHTML = clone + clone + clone;
    }
  }, []);

  // Form state -----------------------
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const prepareFormData = useCallback(() => {
    const fd = new FormData();
    Object.entries(formData).forEach(([k, v]) => fd.append(k, v));
    return fd;
  }, [formData]);

  const sendForm = useCallback(async (data) => {
    await fetch(scriptURL, {
      method: "POST",
      mode: "no-cors",
      body: data
    });
  }, []);

  const resetForm = useCallback(() => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  }, []);

  // Submit handler (clean)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, message } = formData;

    if (!firstName || !lastName || !email || !message) {
      swal("Error", "Please fill in all fields.", "error");
      return;
    }

    setIsSubmitting(true);
    try {
      const fd = prepareFormData();
      await sendForm(fd);
      swal("Done", "Submitted Successfully.", "success");
      resetForm();
    } catch (err) {
      swal("Error", "Something went wrong!", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Scroll helpers
  const scrollToSection = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, []);

  const handleLetsTalk = () => scrollToSection("contact");

  // Social redirect
  const handleSocialClick = useCallback((platform) => {
    const urls = {
      email: 'mailto:hello@zeroorbitlabs.in',
      linkedin: 'https://www.linkedin.com/company/zeroorbitlabs',
      twitter: 'https://twitter.com/zeroorbitlabs',
      instagram: 'https://www.instagram.com/zeroorbitlabs'
    };
    const url = urls[platform];
    if (url) {
      window.open(url, platform === 'email' ? '_self' : '_blank', 'noopener');
    }
  }, []);

  // Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) =>
          entry.isIntersecting
            ? entry.target.classList.add("animate")
            : entry.target.classList.remove("animate")
        ),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const sections = document.querySelectorAll(".animate-on-scroll");
    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  // FAQ ---------------------------------
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  const handleFAQKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFAQ(index);
    }
  };

  return (
    <div className="home-container">

      {/* HERO ---------------------------------------------- */}
      <section id="hero" className="hero-section">
        <nav className="nav" aria-label="Main navigation">
          <button className="nav-button" onClick={() => scrollToSection("hero")}>
            Home
          </button>
          <button className="nav-button" onClick={() => scrollToSection("solutions")}>
            Solutions
          </button>
          <button className="nav-button" onClick={() => scrollToSection("works")}>
            Work
          </button>
          <button className="nav-button" onClick={() => scrollToSection("contact")}>
            Contact
          </button>
        </nav>

        <div className="hero-content">
          <span className="highlight">Transforming</span>
          <h1 className="hero-title">ideas into impact</h1>

          <div className="buttons">
            <button className="btn-primary" onClick={handleLetsTalk}>
              Let's Talk
            </button>
          </div>

          <aside className="social-links">
            <button className="social-button" onClick={() => handleSocialClick("email")}>
              <MailOutlineIcon fontSize="large" />
            </button>
            <button className="social-button" onClick={() => handleSocialClick("linkedin")}>
              <LinkedInIcon fontSize="large" />
            </button>
            <button className="social-button" onClick={() => handleSocialClick("twitter")}>
              <XIcon fontSize="large" />
            </button>
            <button className="social-button" onClick={() => handleSocialClick("instagram")}>
              <InstagramIcon fontSize="large" />
            </button>
          </aside>

          <div className="categories">
            <span className="cat-item">Tech</span>
            <span className="cat-item">Media</span>
            <span className="cat-item">Design</span>
          </div>

          <p className="hero-description">
            We are a multidisciplinary studio delivering tech solutions, design solutions,
            and video productions that help businesses grow, creators innovate, and brands
            connect with their audience.
          </p>
        </div>

        <div className="email">
          <a href="mailto:hello@zeroorbitlabs.in">hello@zeroorbitlabs.in</a>
        </div>
      </section>

      {/* PROJECT CTA -------------------------------------- */}
      <div className="project-card animate-on-scroll">
        <h2>Discuss your project idea</h2>
        <button className="btn-start" onClick={handleLetsTalk}>
          Start your project now →
        </button>
      </div>

      {/* CLIENTS ------------------------------------------ */}
      <section className="clients-section animate-on-scroll" id="clients">
        <h2>CLIENTS</h2>

        <div className="clients-slider-container">
          <div className="clients-slider" ref={sliderRef}>
            <div className="client-logo">
              <img src="../src/assets/AFPS.png" alt="AFPS" />
            </div>
            <div className="client-logo">
              <img src="../src/assets/PC.png" alt="PC" />
            </div>
            <div className="client-logo">
              <img src="../src/assets/RSS.png" alt="RSS" />
            </div>
            <div className="client-logo">
              <img src="../src/assets/fab.png" alt="FAB" />
            </div>
            <div className="client-logo">
              <img src="../src/assets/wonderlab.png" alt="Wonderlab" />
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS ---------------------------------------- */}
      <section id="solutions" className="solutions-section animate-on-scroll">
        <div className="solutions-container">
          <h2>SOLUTIONS</h2>

          <div className="solutions-intro">
            <div className="intro-tag">WE ARE FOCUSED ON AUTOMATION</div>
            <p className="intro-text">
              At Zero Orbit Labs, we bring together technology, design, and storytelling
              to deliver comprehensive experiences.
            </p>
          </div>

          <div className="solutions-grid">
            {/* Design */}
            <article className="solution-card" data-category="design">
              <div className="card-header">
                <span className="card-number">01</span>
                <h3 className="card-title">Design</h3>
              </div>
              <p className="card-description">
                From brand identity to UI/UX and marketing creatives…
              </p>
              <div className="card-services">
                <div className="service-tag">Brand Identity</div>
                <div className="service-tag">UI/UX Design</div>
                <div className="service-tag">Social Media</div>
              </div>
              <div className="card-icon">🎨</div>
            </article>

            {/* Development */}
            <article className="solution-card" data-category="development">
              <div className="card-header">
                <span className="card-number">02</span>
                <h3 className="card-title">Development</h3>
              </div>
              <p className="card-description">
                Modern web development, automation tools…
              </p>
              <div className="card-services">
                <div className="service-tag">Web Apps</div>
                <div className="service-tag">Custom Tools</div>
                <div className="service-tag">E-Commerce</div>
              </div>
              <div className="card-icon">💻</div>
            </article>

            {/* Video */}
            <article className="solution-card" data-category="video">
              <div className="card-header">
                <span className="card-number">03</span>
                <h3 className="card-title">Video Production</h3>
              </div>
              <p className="card-description">
                Promotional films, motion graphics…
              </p>
              <div className="card-services">
                <div className="service-tag">Product Videos</div>
                <div className="service-tag">3D Videos</div>
                <div className="service-tag">Social Content</div>
              </div>
              <div className="card-icon">🎬</div>
            </article>
          </div>
        </div>
      </section>

      {/* CUSTOM SECTION ----------------------------------- */}
      <section id="custom" className="custom-section animate-on-scroll">
        <h2>CUSTOM</h2>
        <p className="custom-subtitle">NEED MORE?</p>
        <p className="custom-description">
          We'll create a program tailored to your brand needs.
        </p>
        <button className="btn-custom" onClick={handleLetsTalk}>
          Let's Talk
        </button>
      </section>

      {/* WHY CHOOSE US ----------------------------------- */}
      <section className="why-choose-us animate-on-scroll">
        <div className="container">
          <h1 className="title">WHY CHOOSE US?</h1>
          <p className="description">
            We combine expertise in tech, design, and video…
          </p>

          <div className="features-list">
            <div className="feature-item"><p>All-in-One Studio</p></div>
            <div className="feature-item"><p>Tailored Solutions</p></div>
            <div className="feature-item"><p>Creative + Functional</p></div>
            <div className="feature-item"><p>Story-Driven Approach</p></div>
            <div className="feature-item"><p>End-to-End Support</p></div>
          </div>
        </div>
      </section>

      {/* OUR PROCESS -------------------------------------- */}
      <section className="our-process animate-on-scroll">
        <div className="container">
          <h1 className="title">OUR PROCESS</h1>
          <p className="description">
            Automation-driven workflow blending creativity & technology.
          </p>
        </div>

        <div className="process-steps">
          <div className="step-item step-1">
            <div className="step-number">01</div>
            <div className="step-content">
              <h2 className="step-title">IMAGINE</h2>
              <p className="step-desc">Concept & visualization</p>
            </div>
            <div className="step-icon">💡</div>
          </div>

          <div className="step-item step-2">
            <div className="step-number">02</div>
            <div className="step-content">
              <h2 className="step-title">CREATE</h2>
              <p className="step-desc">Build with tools & automation</p>
            </div>
            <div className="step-icon">✨</div>
          </div>

          <div className="step-item step-3">
            <div className="step-number">03</div>
            <div className="step-content">
              <h2 className="step-title">LAUNCH</h2>
              <p className="step-desc">Deployment & scale</p>
            </div>
            <div className="step-icon">🚀</div>
          </div>
        </div>
      </section>

      {/* FAQ ------------------------------------------------ */}
      <section className="faq-section animate-on-scroll">
        <div className="container">
          <h1 className="title">FAQ</h1>

          <div className="faq-list">

            {/* FAQ 1 */}
            <div className={`faq-item ${openIndex === 0 ? "active" : ""}`}>
              <button
                className="faq-header"
                onClick={() => toggleFAQ(0)}
                onKeyDown={(e) => handleFAQKeyDown(e, 0)}
                aria-expanded={openIndex === 0}
              >
                <div className="faq-icon">{openIndex === 0 ? '✕' : '—'}</div>
                <h3 className="faq-question">
                  1. What services does Zero Orbit Labs offer?
                </h3>
                <div className="faq-toggle">{openIndex === 0 ? '✕' : '+'}</div>
              </button>

              {openIndex === 0 && (
                <div className="faq-answer">
                  <p>
                    We provide design, development, video production & automation solutions.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className={`faq-item ${openIndex === 1 ? "active" : ""}`}>
              <button
                className="faq-header"
                onClick={() => toggleFAQ(1)}
                onKeyDown={(e) => handleFAQKeyDown(e, 1)}
                aria-expanded={openIndex === 1}
              >
                <div className="faq-icon">{openIndex === 1 ? '✕' : '—'}</div>
                <h3 className="faq-question">
                  2. What makes Zero Orbit Labs different?
                </h3>
                <div className="faq-toggle">{openIndex === 1 ? '✕' : '+'}</div>
              </button>

              {openIndex === 1 && (
                <div className="faq-answer">
                  <p>
                    Our workflow is powered by automation & custom-built tools for faster output.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className={`faq-item ${openIndex === 2 ? "active" : ""}`}>
              <button
                className="faq-header"
                onClick={() => toggleFAQ(2)}
                onKeyDown={(e) => handleFAQKeyDown(e, 2)}
                aria-expanded={openIndex === 2}
              >
                <div className="faq-icon">{openIndex === 2 ? '✕' : '—'}</div>
                <h3 className="faq-question">
                  3. Do you build custom tools or products?
                </h3>
                <div className="faq-toggle">{openIndex === 2 ? '✕' : '+'}</div>
              </button>

              {openIndex === 2 && (
                <div className="faq-answer">
                  <p>
                    Yes. We build custom software, automation tools, and digital products.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div className={`faq-item ${openIndex === 3 ? "active" : ""}`}>
              <button
                className="faq-header"
                onClick={() => toggleFAQ(3)}
                onKeyDown={(e) => handleFAQKeyDown(e, 3)}
                aria-expanded={openIndex === 3}
              >
                <div className="faq-icon">{openIndex === 3 ? '✕' : '—'}</div>
                <h3 className="faq-question">4. How do I get started?</h3>
                <div className="faq-toggle">{openIndex === 3 ? '✕' : '+'}</div>
              </button>

              {openIndex === 3 && (
                <div className="faq-answer">
                  <p>
                    Contact us with your requirements — we'll guide you from there.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 5 */}
            <div className={`faq-item ${openIndex === 4 ? "active" : ""}`}>
              <button
                className="faq-header"
                onClick={() => toggleFAQ(4)}
                onKeyDown={(e) => handleFAQKeyDown(e, 4)}
                aria-expanded={openIndex === 4}
              >
                <div className="faq-icon">{openIndex === 4 ? '✕' : '—'}</div>
                <h3 className="faq-question">5. Do you provide ongoing support?</h3>
                <div className="faq-toggle">{openIndex === 4 ? '✕' : '+'}</div>
              </button>

              {openIndex === 4 && (
                <div className="faq-answer">
                  <p>
                    Yes, we provide long-term support, maintenance & optimization.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT ----------------------------------------- */}
      <section id="contact" className="contact-us animate-on-scroll">
        <div className="contact-container">
          <div className="contact-header">
            <h1 className="title">CONTACT US</h1>
            <p className="subtitle">
              Drop us a message and we’ll get back to you within 24 hours.
            </p>
          </div>

          <div className="contact-content">

            {/* Left cards */}
            <div className="contact-info">
              <div className="info-card">
                <div className="info-icon">📧</div>
                <h3>Email</h3>
                <a href="mailto:hello@zeroorbitlabs.com">hello@zeroorbitlabs.com</a>
              </div>

              <div className="info-card">
                <div className="info-icon">💬</div>
                <h3>Let's Talk</h3>
                <p>Mon-Fri, 9AM–6PM IST</p>
              </div>

              <div className="info-card">
                <div className="info-icon">📍</div>
                <h3>Location</h3>
                <p>Indore, India</p>
              </div>
            </div>

            {/* Form */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    required
                    disabled={isSubmitting}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    required
                    disabled={isSubmitting}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  disabled={isSubmitting}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  maxLength={500}
                  required
                  disabled={isSubmitting}
                  className="form-textarea"
                />
                <span className="char-count">{formData.message.length} / 500</span>
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                <span className="btn-text">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
                <span className="btn-icon">→</span>
              </button>
            </form>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
