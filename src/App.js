import { useEffect, useRef, useState } from "react";
import "./App.css";
import YesModal from "./yesModal";
import RoseIcon from "./Assets/roseIcon.png";

const App = () => {
  const [canDisplayModal, setCanDisplayModal] = useState(false);

  const btnWrapperRef = useRef();
  const noBtnRef = useRef();

  useEffect(() => {
    if (btnWrapperRef.current && noBtnRef.current) {
      const wrapper = btnWrapperRef.current.getBoundingClientRect();
      const btn = noBtnRef.current.getBoundingClientRect();

      noBtnRef.current.addEventListener("mouseover", () => {
        const left =
          Math.floor(Math.random() * (wrapper.width - btn.width)) + 1;
        const top =
          Math.floor(Math.random() * (wrapper.height - btn.height)) + 1;

        noBtnRef.current.style.left = `${left}px`;
        noBtnRef.current.style.top = `${top}px`;
      });
    }
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="mainHeaderContainer">
          <h1>Will You Be My Valentine?</h1>
          <img
            src={RoseIcon}
            alt="rose"
            className="imgStyle"
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </div>
        <div className="svgContainer">
          <img
            src="https://i.pinimg.com/originals/19/16/a8/1916a8aff754c9a8455688c7c8a1cee5.gif"
            alt="pic"
          />
        </div>
        <div className="btnContainer" id="btnContainer" ref={btnWrapperRef}>
          <div
            className="btn yesBtn"
            id="yesBtn"
            onClick={() => {
              setCanDisplayModal(!canDisplayModal);
            }}
          >
            YES
          </div>
          <div className="btn noBtn" id="btn" ref={noBtnRef}>
            NO
          </div>
        </div>
      </div>
      {canDisplayModal && <YesModal />}
    </div>
  );
};

export default App;
