import React from 'react';

import Title from '../../component/title/title';
  
export const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Title heading="Whoops! 404- Page Not Found" />
      <p className="text-center font-weight-bold px-4">We can't find the page you're looking for. <br />Please select one of the menu options above to go back.</p>
    </div>
  )
}

export default NotFound;