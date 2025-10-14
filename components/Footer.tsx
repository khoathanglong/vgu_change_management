
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A4C7A] text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p>
          © 2025 COIL Research Initiative | For more information on this study, please{' '}
          <a href="mailto:contact@coilresearch.org" className="underline hover:text-[#009688]">
            Contact Us
          </a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
