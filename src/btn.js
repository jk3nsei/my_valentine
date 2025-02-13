// import { useRef } from "react";

const MouseOver = () => {
  // const myRef = useRef();

  const button = document.getElementById("btn");

  const handleClick = () => {
    if (button) {
      button.style.left = `${Math.ceil(Math.random() * 90)}%`;
      button.style.top = `${Math.ceil(Math.random() * 90)}%`;
    }
  };

  handleClick();
};

export default MouseOver;
