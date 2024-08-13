import { useEffect } from "react";

const RedirectComponent = ({ url }) => {
  useEffect(() => {
    window.location.href = url;
  }, [url]);

  return <div>Please wait ...</div>;
};

export default RedirectComponent;
