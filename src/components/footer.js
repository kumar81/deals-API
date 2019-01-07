import React from 'react';

class Footer extends React.Component{

  render() {
    return (
      <div className='callout large secondary'>
        <div className='row'>
          <div className='large-4 columns'>
            <h5>Vivamus Hendrerit Arcu Sed Erat Molestie</h5>
            <p>Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas
                est urna sit amet arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Sed molestie augue sit.</p>

          </div>
          <div className='large-3 large-offset-2 columns'>
            <ul className='menu vertical'>
              <li><a href='https://deals-api-77065.firebaseapp.com'>One</a></li>
              <li><a href='https://deals-api-77065.firebaseapp.com'>Two</a></li>
              <li><a href='https://deals-api-77065.firebaseapp.com'>Three</a></li>
              <li><a href='https://deals-api-77065.firebaseapp.com'>Four</a></li>
            </ul>
          </div>
          <div className='large-3 columns'>
            <ul className='menu vertical'>
              <li><a href='https://deals-api-77065.firebaseapp.com/'>One</a></li>
              <li><a href='https://deals-api-77065.firebaseapp.com/'>Two</a></li>
              <li><a href='https://deals-api-77065.firebaseapp.com/'>Three</a></li>
              <li><a href='https://deals-api-77065.firebaseapp.com/'>Four</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
