import { useEffect } from 'react';
import { navigate } from '@reach/router';

const MainRoute = () => {
  useEffect(() => {
    navigate('/');
  }, []);
  return null;
};

export default MainRoute;
