import { useState, useEffect } from "react";

const RedirectComponent = ({ url }) => {
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    setRedirecting(true);
    setTimeout(() => {
      window.location.href = url;
    }, 0);
  }, [url]);

  return redirecting ? null : <div>Please wait ...</div>;
};

export default RedirectComponent;