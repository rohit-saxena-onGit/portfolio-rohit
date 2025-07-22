import { useState } from "react";
import { Allroutes } from "./Allroutes";
import Navigation from "./Components/Navigation";
import Popup from "./Components/Popup";

function App() {
    let [showModel, setShowmodel] = useState(false);

  return (
    <>
      <div className="lg:px-60 md:px-30 px-7 bg-[#0A0A0A] text-white">
        {showModel && <Popup setShowmodel={setShowmodel}/>}
        <Navigation setShowmodel={setShowmodel}/>

        <Allroutes />
      </div>
    </>
  );
}

export default App;
