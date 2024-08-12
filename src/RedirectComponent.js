import { useEffect } from 'react';

const RedirectComponent = ({ url }) => {
  useEffect(() => {
    window.location.href = url;
  }, [url]);

  return null;
};

export default RedirectComponent;
