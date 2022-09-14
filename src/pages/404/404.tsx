import React from 'react';
  
export const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center mt-5 py-2">Whoops! <br />404- Page Not Found</h1>
      <p className="text-center font-weight-bold px-4">We can't find the page you're looking for. <br />Please select one of the menu options above to go back.</p>
    </div>
  )
}

export default NotFound;