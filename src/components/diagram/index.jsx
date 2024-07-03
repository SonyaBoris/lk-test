import React from 'react';

export const Diagram = () => {

  return (
    <div className='relative flex items-center justify-center'>
      <div className='absolute text-center'>
        <span className='text-[34px]'>32</span>
        <p className='text-sm text-tertiary-text'>дня</p>
      </div>
      <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35.9161 140.676C45.4914 147.633 56.5773 152.225 68.2674 154.077C79.9575 155.928 91.9198 154.987 103.176 151.329C114.433 147.672 124.664 141.402 133.033 133.033C141.402 124.664 147.672 114.433 151.329 103.176C154.987 91.9198 155.928 79.9575 154.077 68.2674C152.225 56.5774 147.633 45.4915 140.676 35.9161C133.719 26.3408 124.595 18.5478 114.049 13.1745C103.504 7.80118 91.8358 5 80 4.99999" stroke="#25824F" stroke-width="10" />
        <path d="M80 4.99999C68.1643 4.99999 56.4965 7.80116 45.9507 13.1745C35.405 18.5478 26.2806 26.3407 19.3237 35.9161C12.3668 45.4914 7.77491 56.5773 5.92338 68.2674C4.07186 79.9575 5.01331 91.9198 8.67076 103.176" stroke="#FFB649" stroke-width="10" />
        <path d="M8.67075 103.176C13.5651 118.239 23.1025 131.367 35.9161 140.676" stroke="#DB4546" stroke-width="10" />
      </svg>
    </div>

  );
}

