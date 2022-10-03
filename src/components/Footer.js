import React from "react";

const Footer = () => {
  return (
    <>
      &copy; {new Date().getFullYear()} Bill Wong.&nbsp;
      <a
        href="https://github.com/billwonggg/recipe-search"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </>
  );
};

export default Footer;
