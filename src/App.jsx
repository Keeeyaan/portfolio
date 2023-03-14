import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Footer,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(!theme);
  };

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#f9f7fe] dark:bg-primary">
        <div className="dark:bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
          <Hero />
        </div>
        <About />
        {/* <Experience /> */}
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas theme={theme} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
