const RequestGallery = ({ propStatus }) => {
  if (propStatus === 'idle') {
    return <h3>Input movie name</h3>;
  }

  if (propStatus === 'pending') {
    return <h3>Panding</h3>;
  }

  if (propStatus === 'rejected') {
    return <h3>Error</h3>;
  }
};

export default RequestGallery;
