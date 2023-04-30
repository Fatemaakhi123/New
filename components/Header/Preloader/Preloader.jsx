import React, { useEffect } from 'react';
import $ from 'jquery';
const Preloader = () => {
  useEffect(() => {
       $(".preloader").show();

      setTimeout(function() {
          $(".preloader").fadeOut();
        }, 300);
 
  }, []);

  return (
    <div className="preloader" >
      <img src="assets/images/logo/preloader.png" alt="preloader icon" />
    </div>
  )
}

export default Preloader;

