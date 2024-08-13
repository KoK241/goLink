const RedirectComponent = ({ url }) => {
  return <meta httpEquiv="refresh" content={`0;URL=${url}`} />;
};

export default RedirectComponent;
