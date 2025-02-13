import "./App.css";
import ConfettiAnimation from "./confetti";

const YesModal = ({ onClose }) => {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
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

export default YesModal;
