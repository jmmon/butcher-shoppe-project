import { useEffect } from "react";
import {useLocation} from "wouter";
 
export default function LinkScrollToTop({ children, exclude = [] }) {
  const [location,] = useLocation();
 
  useEffect(() => {
    // exclude = ['/contact'];
    if (!exclude.includes(location)) window.scrollTo(0, 0);
  }, [location]);
 
  return children;
}
