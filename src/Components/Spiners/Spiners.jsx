
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader'; 

const RouteChangeSpinner = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); 

    return () => clearTimeout(timer);
  }, [location]);

  return loading ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80">
      <ClipLoader size={60} color="#4F46E5" />
    </div>
  ) : null;
};

export default RouteChangeSpinner;
