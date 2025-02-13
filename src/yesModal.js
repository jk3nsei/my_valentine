import { useState } from "react";
import "./App.css";
import ConfettiAnimation from "./confetti";

const YesModal = () => {
  const [openModal, setOpenModal] = useState(true);

  const renderModal = () => {
    return (
      <div id="myModal" class="modal">
        <div class="modal-content">
          <span
            class="close"
            onClick={() => {
              setOpenModal(!openModal);
            }}
          >
            &times;
          </span>
          <div className="mainContainer">
            <div className="headingsContainer">
              <h1>Congratulations!!!</h1>
            </div>
            <div className="textContainer">
              <span className="mainMsg">You are officially a valentine!</span>
              <img
                src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHNxbHQwaXF5NmYycDBjdWpqbmYwMjd0czRzMHdvZno4N2tpYTl4cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IzXiddo2twMmdmU8Lv/giphy.gif"
                alt="bears hugging"
              />
            </div>
          </div>
          <div className="psMsg">
            PS. I would like to take you to dinner at like 8:30pm?
          </div>
        </div>
        <ConfettiAnimation />
      </div>
    );
  };

  return openModal && renderModal();
};

export default YesModal;
