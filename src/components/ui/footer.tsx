import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent px-8 py-4 ">
      <p className="text-[0.625rem] opacity-75">
        © {currentYear} - <strong>FSW Ecommerce</strong>
      </p>
    </footer>
  );
};

export default Footer;
