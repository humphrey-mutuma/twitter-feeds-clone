import { Button } from '@material-ui/core';
import React from 'react'
import "./TreadingTopicsToFollow.css";

const TreadingTopicsToFollow = () => {
  return (
    <div className="TreadingTopicsToFollow">
      <div>
        <h4>Open Source</h4>
        <p>Technology</p>
      </div>
      <div>
        <Button>Follow</Button>
        <Button>X</Button>
      </div>
    </div>
  );
};

export default TreadingTopicsToFollow;
