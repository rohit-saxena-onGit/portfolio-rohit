import { useRef } from "react";
import { Link } from "react-router-dom";

function Popup({ setShowmodel }) {
  const modalRef = useRef();

  let closeModel = (e) => {
    if (modalRef.current === e.target) {
      setShowmodel(false);
    }
  };

  return (
    <>
      <div
        ref={modalRef}
        onClick={closeModel}
        className="fixed inset-0  backdrop-blur-xs flex items-center justify-center z-12"
      >
        <div className="text-white h-90 w-90 md:w-120 bg-my-black border border-gray-500 rounded-2xl m-auto p-2 bg-black">
          <button onClick={() => setShowmodel(false)}>
            <i className="ri-close-large-fill text-2xl p-1 rounded hover:bg-light-black hover:cursor-pointer transition-all"></i>
          </button>
          <div className="flex flex-col border-t border-gray-500 text-lg font-light">
            <Link
              onClick={() => setShowmodel(false)}
              to={"/"}
              className="px-3 py-1 mt-3 rounded-md hover:bg-light-black transition-all"
              >
              Home
            </Link>
            <Link
              onClick={() => setShowmodel(false)}
              to={"/project"}
              className="hover:text-white px-3 py-1 mt-1 rounded-md hover:bg-light-black transition-all"
              >
              Projects
            </Link>
            <Link
              onClick={() => setShowmodel(false)}
              to={"/about"}
              className="px-3 py-1 mt-1 rounded-md hover:bg-light-black transition-all"
              >
              About
            </Link>
            <Link
              onClick={() => setShowmodel(false)}
              to={"/blog"}
              className="px-3 py-1 mt-1 rounded-md hover:bg-light-black transition-all"
            >
              Blog
            </Link>
          </div>

          <div className="flex flex-col border-t border-gray-500 text-lg font-light mt-3">
            
            <a
              href={"https://github.com/rohit-saxena-onGit"}
              target="_blank"
              className="px-3 py-1 mt-1 rounded-md hover:bg-light-black transition-all"
            >
              GitHub
            </a>
            <a
              href={"http://t.me/Rohitraj2003"}
              target="_blank"
              className="px-3 py-1 mt-1 rounded-md hover:bg-light-black transition-all"
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popup;