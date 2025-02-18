import { useState, useRef, useEffect } from "react";
import YesModal from "./yesModal";
import RoseIcon from "./Assets/roseIcon.png";

const App = () => {
  const [canDisplayModal, setCanDisplayModal] = useState(false);

  const btnWrapperRef = useRef();
  const noBtnRef = useRef();

  const toggleModal = () => setCanDisplayModal(true);

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHNxbHQwaXF5NmYycDBjdWpqbmYwMjd0czRzMHdvZno4N2tpYTl4cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IzXiddo2twMmdmU8Lv/giphy.gif";
  }, []);

  useEffect(() => {
    if (btnWrapperRef.current && noBtnRef.current) {
      const wrapper = btnWrapperRef.current.getBoundingClientRect();
      const btn = noBtnRef.current.getBoundingClientRect();

      const handleMouseOver = () => {
        const left =
          Math.floor(Math.random() * (wrapper.width - btn.width)) + 1;
        const top =
          Math.floor(Math.random() * (wrapper.height - btn.height)) + 1;

        noBtnRef.current.style.left = `${left}px`;
        noBtnRef.current.style.top = `${top}px`;
      };

      const currentNoBtn = noBtnRef.current;

      currentNoBtn.addEventListener("mouseover", handleMouseOver);

      return () => {
        currentNoBtn.removeEventListener("mouseover", handleMouseOver);
      };
    }
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="mainHeaderContainer landingHeader">
          <h1>Will You Be My Valentine?</h1>
          <img src={RoseIcon} alt="rose" className="imgStyle" />
        </div>
        <div className="svgContainer">
          <img
            src="https://i.pinimg.com/originals/19/16/a8/1916a8aff754c9a8455688c7c8a1cee5.gif"
            alt="pic"
          />
        </div>
        <div className="btnContainer" id="btnContainer" ref={btnWrapperRef}>
          <button className="btn yesBtn" id="yesBtn" onClick={toggleModal}>
            YES
          </button>
          <button className="btn noBtn" id="btn" ref={noBtnRef}>
            NO
          </button>
        </div>
      </div>
      {canDisplayModal && (
        <YesModal onClose={() => setCanDisplayModal(false)} />
      )}
    </div>
  );
};

export default App;
