import { useState, useEffect } from "react";

const RedirectComponent = ({ url }) => {
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    setRedirecting(true);
    setTimeout(() => {
      window.open(url, '_self');
    }, 100);
  }, [url]);

  return redirecting ? null : <div>Please wait ...</div>;
};

export default RedirectComponent;