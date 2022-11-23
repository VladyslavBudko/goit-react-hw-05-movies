const RequestGallery = ({propStatus}) => {
    if (propStatus === 'idle') {
      return <div>Input movie name</div>;
    }

    if (propStatus === 'pending') {
      return <div>Panding</div>;
    }

    if (propStatus === 'rejected') {
      return <div>Error </div>;
    }
  };

  export default RequestGallery;

