const RequestGallery = ({propStatus}) => {
    if (propStatus === 'idle') {
      return <h4>Input movie name</h4>;
    }

    if (propStatus === 'pending') {
      return <div>Panding</div>;
    }

    if (propStatus === 'rejected') {
      return <div>Error </div>;
    }
  };

  export default RequestGallery;

