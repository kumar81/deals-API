import React from 'react';

class Header extends React.Component{

  render() {
    return (
      <div className='row full-width'>
        <div className='banner-image'>
          <img src='hack-day-banner.jpeg' alt='Hack day' />
        </div>
      </div>
    );
  }
}

export default Header;
