import React from 'react';
import loadingSvg from 'images/loading.svg';

const Loading = () => {
  return (
    <div className="d-flex justify-content-center p-10">
      <img src={loadingSvg} width="100" />
    </div>
  );
};

export default Loading;