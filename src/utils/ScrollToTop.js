import { useEffect } from "react";
import {useLocation} from "wouter";
 
function ScrollToTop({ children }) {
  const [location, setLocation] = useLocation();
 
  useEffect(() => {
    if (location !== "/contact") window.scrollTo(0, 0);
  }, [location]);
 
  return children;
}
 
export default ScrollToTop;