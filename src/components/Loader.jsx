import React from 'react'

function Loader() {
  return (
    <div className='loader-wrapper js-loader'>
    <span className='loader'></span>
    </div>
    )
  }

  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
      document.querySelector('.js-loader').classList.add('loader-wrapper--none');
    }, 800);
  });

  export default Loader
