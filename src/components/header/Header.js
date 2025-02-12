import React from 'react';
import Typewriter from 'typewriter-effect';

export default function Header() {
  return (
    <div className='header-wraper'>
      <div className='main-info'>
        <h1 className='header-h1'>
          <Typewriter
            className='typerwriter'
            options={{
              strings: ['Bienvenidxs a mi portfolio '],
              autoStart: true,
              loop: true,
              delay: 100,
            }}
          />
        </h1>
      </div>
    </div>
  );
}
