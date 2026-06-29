import { useState } from 'react'

import React from 'react';
import ComC from './ComC';

const ComA = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setShow(true);
        }}
      >
        Show Component C
      </a>

      {show && <ComC />}

    </>
  );
};

export default ComA;