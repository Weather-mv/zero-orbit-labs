import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-12 px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Logo and Heading */}
        <div>
          <img src="assets/0.png" alt="Zero Orbit Labs" className="w-24 mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Let's Chat</h2>
          <p className="text-sm text-gray-400">
            We’d love to hear about your project or idea. Reach out to us anytime!
          </p>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#solutions" className="hover:text-white">Solutions</a></li>
            <li><a href="#works" className="hover:text-white">Works</a></li>
            <li><a href="#clients" className="hover:text-white">Clients</a></li>
            <li><a href="#whyus" className="hover:text-white">Why Choose Us</a></li>
            <li><a href="#faq" className="hover:text-white">FAQs</a></li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-500">
          
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500">
             
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-400">
            
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-400">
         
            </a>
          </div>
        </div>

        {/* Reach Out Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Reach Out</h3>
          <p className="text-sm text-gray-400">
            Email us at <a href="mailto:hello@zeroorbitlabs.in" className="text-blue-400 hover:underline">hello@zeroorbitlabs.in</a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Zero Orbit Labs. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
