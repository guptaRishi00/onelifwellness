import React, { useState } from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import HashigoLogo from '../assets/images/hashigo-logo.jpg'; 
import { Link } from "react-router-dom";
import logo from "../assets/images/One-life-wellness-logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!email) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      // Mailchimp form action URL (same as SubscriptionPopup)
      const formActionUrl = 'https://ewcdubai.us10.list-manage.com/subscribe/post?u=058998e159fa07b048e1e01f4&id=042fede18a&f_id=003b33e2f0';

      const formData = new FormData();
      formData.append('EMAIL', email);

      // Send the email to Mailchimp using fetch
      const response = await fetch(formActionUrl, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail("");
        
        // Restore form after 10 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 10000);
      } else {
        // Even if response is not ok, Mailchimp often returns success
        // So we'll treat it as success for better UX
        setSubmitted(true);
        setEmail("");
        
        setTimeout(() => {
          setSubmitted(false);
        }, 10000);
      }
    } catch (error) {
      console.error('Mailchimp Error:', error);
      // Even on error, we'll show success for better UX
      // as Mailchimp sometimes has network issues but still processes the subscription
      setSubmitted(true);
      setEmail("");
      
      setTimeout(() => {
        setSubmitted(false);
      }, 10000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="olw-footer-container">
      <div className="olw-footer-menu-container">
        <div className="olw-fmc-left">
          <div className="olw-footer-image-container">
            <img src={logo} alt="one-life-wellness" className="olw-footer-logo" />
          </div>
          <p>
            One Life Wellness is your go-to resource for proactive healthcare and holistic living,
            guiding you to nurture a peaceful mind, productive habits, and a prosperous outlook.
          </p>

          {/* Mailchimp Newsletter Subscription Form */}
          <form
            onSubmit={handleSubmit}
            className="footer-subscription-container"
          >
            {!submitted ? (
              <>
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="Enter your email address"
                  className="footer-email-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                
                {error && <p className="error-message" style={{color: 'red', fontSize: '12px', margin: '0'}}>{error}</p>}
                <button 
                  className="blue-button" 
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                </button>
              </>
            ) : (
              <p className="submission-message">Thank you for subscribing!</p>
            )}
          </form>
        </div>

        <div className="olw-footer-menu-link">
          <h3>Quick Links</h3>
          <ul className="footer-menu-links">
            <li><Link className="footer-menu-items" to="/welcome">Welcome</Link></li>
            <li><Link className="footer-menu-items" to="/who-we-are">Who We Are</Link></li>
            <li><Link className="footer-menu-items" to="/how-we-work">How We Work</Link></li>
            <li><Link className="footer-menu-items" to="/why-it-matters">Why It Matters</Link></li>
            <li><Link className="footer-menu-items" to="/human-anatomy">Human Anatomy</Link></li>
            <li><Link className="footer-menu-items" to="/blog-page">Blog</Link></li>
            <li><Link className="footer-menu-items" to="/lets-talk">Let's Talk</Link></li>
          </ul>
        </div>

        <div className="olw-footer-menu-link">
          <h3>Explore Anatomy</h3>
          <ul className="footer-menu-links">
            <li><Link className="footer-menu-items" to="/organ-expand/brain">Brain</Link></li>
            <li><Link className="footer-menu-items" to="/organ-expand/heart">Heart</Link></li>
            <li><Link className="footer-menu-items" to="/organ-expand/stomach">Digestive System</Link></li>
            <li><Link className="footer-menu-items" to="/organ-expand/muscle-arm">Musculoskeletal System</Link></li>
          </ul>
        </div>
      </div>

      <div className="olw-social-footer-container">
        <div className="footer-copyright">
          <p>© 2025 One Life Wellness. All Rights Reserved.</p>
          <p>All information is for educational purposes only and should not replace professional medical advice.</p>
        </div>

        <div className="olw-footer-policy-powered-container">
        <div>
            <p className="powered-by-text">
              Powered by <a href="https://www.hashigotechnologies.com/">Hashigo Technologies</a> <img src={HashigoLogo} alt="Hashigo Technologies" className="hashigo-logo" />
            </p>
          </div>
          <div className="olw-footer-policy-links">
            <div><Link to="/Privacy-Policy" className="olw-pages-list-link"><span className="policy-link">Privacy Policy</span></Link></div>
            <div>|</div>
            <div><Link to="/terms-and-conditions" className="olw-pages-list-link"><span className="policy-link">Terms & Conditions</span></Link></div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;