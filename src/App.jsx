import { useState } from "react";
import { Allroutes } from "./Allroutes";
import Navigation from "./Components/Navigation";
import Popup from "./Components/Popup";
import DotGrid from "./Animations/DotGrid";
import DarkVeil from "./Animations/DarkVeil";

function App() {
  let [showModel, setShowmodel] = useState(false);

  return (
    <>
      <div className="lg:px-60 md:px-30 px-7 bg-[#0A0A0A] text-white relative overflow-hidden">
        {/* DotGrid background */}
        <div className="fixed inset-0 z-0">
          <div className="fixed inset-0 z-0">
            <DarkVeil />
          </div>
          <DotGrid
            dotSize={5}
            gap={20}
            baseColor="rgba(250, 250, 250, 0.2)"
            activeColor="#5227FF"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>

        {/* Foreground content */}
        <div className="relative z-10">
          {showModel && <Popup setShowmodel={setShowmodel} />}
          <Navigation setShowmodel={setShowmodel} />
          <Allroutes />
        </div>
      </div>
    </>
  );
}

export default App;
