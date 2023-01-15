import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
          <div className="footer-left">
            <img src="bcclogo.jpeg" alt="Logo" className="footer-logo" />
            <ul className="footer-list">
              <li className="footer-list-item">Courses</li>
              <li className="footer-list-item">Careers</li>
              <li className="footer-list-item">FAQs</li>
              <li className="footer-list-item">Contact Us</li>
            </ul>
          </div>
          <div className="footer-right">
            <ul className="footer-list">
              <li className="footer-list-item">28 Cola St, Accra, Ghana </li>
              <li className="footer-list-item">+233 26 301 1390 (Admissions/General Enquiries)</li>
              <li className="footer-list-item">+233 30 225 1150 (Data Science)</li>
            </ul>
          </div>
        </footer>
      );
    };

export default Footer