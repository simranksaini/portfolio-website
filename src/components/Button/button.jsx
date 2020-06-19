import React from "react";
import emoji from "react-easy-emoji";
import "./button.css";
const Button = ({text, className, href, newTab, type}) => {
  return (
    <div className={className}>
      <a class="main-button" href={href} target={newTab && "_blank"}>
        {type === "resume" ? emoji("📝 ") : emoji("👩‍💻 ")}
        {text}
      </a>
    </div>
  );
};

export default Button;
