import { AnimatePresence, motion } from 'framer-motion';
import { NavLink, Outlet } from "react-router-dom";

const App = () => {
  const navList = [
    { title: "Home", path: "/" },
    { title: "Basic Animation", path: "basic" },
    { title: "Count Animation", path: "count-animate" },
    { title: "Animation Variants", path: "variants" },
    { title: "Button Tap", path: "button-tap" },
    { title: "Keyframe Animation", path: "keyframe" },
    { title: "Text Motion", path: "text-motion" },
    { title: "Transition Type", path: "transition-type" },
    { title: "Scroll Reveal", path: "scroll-reveal" },
    { title: "Stagger Animation Function", path: "stagger-animation" },
  ];

  return (
    <div className="flex relative">
      <div className="w-1/4 shadow-xl h-[100vh] fixed">
        <ul className="my-8">
          {
            navList.map((item, index) => (
              <motion.li
                key={index}
                initial={{ x: -500 }}
                animate={{ x: 0 }}
                transition={{ duration: 1, delay: index * 0.25 }}
              >
                <NavLink className={({ isActive }) =>
                  isActive ? "active" : ""
                } to={item.path}>{item.title}</NavLink>
              </motion.li>
            ))
          }
        </ul>
      </div>

      <div className="flex items-center justify-center w-3/4 min-h-[100vh] bg-slate-50 absolute left-[25%]">
        
        <AnimatePresence mode='wait'>
        <Outlet />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;