import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="mailto:ee.irfansmail@gmail.com" target="_blank" rel="noopener noreferrer">
          Email
        </a>
        &bull;
        <a href="https://linkedin.com/in/extremesecret0" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        &bull;
        <a href="https://github.com/vxedit" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Irfan Sipai. Built with React.</p>
    </footer>
  );
};

export default Footer;