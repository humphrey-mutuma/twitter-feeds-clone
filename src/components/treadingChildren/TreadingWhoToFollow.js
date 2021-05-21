import React from 'react'
import { Avatar, Button } from "@material-ui/core";
import "./TreadingWhoToFollow.css";

const TreadingWhoToFollow = () => {
  return (
    <div className="TreadingWhoToFollow">
      <div>
        <Avatar />
      </div>
      <div>
        <h3>ChelseaFCBlogs</h3>
        <p>@chelseablogs</p>
      </div>
      <div>
        <Button color="primary">Follow</Button>
      </div>
    </div>
  );
}

export default TreadingWhoToFollow
