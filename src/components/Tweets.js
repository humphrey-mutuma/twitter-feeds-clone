import React from "react";
import StarOutlineSharpIcon from "@material-ui/icons/StarOutlineSharp";
import { Avatar, Button, IconButton, Input } from "@material-ui/core";
import CropOriginalSharpIcon from "@material-ui/icons/CropOriginalSharp";
import GifIcon from "@material-ui/icons/Gif";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import "./Tweets.css";
import PublicIcon from "@material-ui/icons/Public";
import PollOutlinedIcon from "@material-ui/icons/PollOutlined";
import EventOutlinedIcon from "@material-ui/icons/EventOutlined";

const Tweets = () => {
  return (
    <div className="tweets">
      <nav className="tweets__nav">
        <h1>Home</h1>
        <IconButton>
          <StarOutlineSharpIcon style={{ color: "#1DA1F2" }} />
        </IconButton>
      </nav>
      {/* tweeting section */}
      <article className="tweets__article">
        <div>
          <Avatar className="user__avatar" />
        </div>
        <div className="tweets__articleRight">
          <div className="tweets__input">
            <span>
              <Input placeholder="What's happening?" />
            </span>
            <span>
              <PublicIcon />
              Everyone can reply
            </span>
          </div>

          <div className="tweets_icons">
            <div>
              <IconButton>
                <CropOriginalSharpIcon />
              </IconButton>
              <IconButton>
                <GifIcon />
              </IconButton>
              <IconButton>
                <PollOutlinedIcon />
              </IconButton>
              <IconButton>
                <SentimentSatisfiedOutlinedIcon />
              </IconButton>
              <IconButton>
                <EventOutlinedIcon />
              </IconButton>
            </div>
            <div>
              <Button variant="contained" className="btn__tweet">
                Tweet
              </Button>
            </div>
          </div>
        </div>
      </article>
      <h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
        exercitationem minus dolor vitae quidem ex minima quos, quibusdam
        reiciendis ducimus eaque odio rerum voluptas, explicabo nemo quisquam
        perferendis error qui.
      </h1>
      <h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
        exercitationem minus dolor vitae quidem ex minima quos, quibusdam
        reiciendis ducimus eaque odio rerum voluptas, explicabo nemo quisquam
        perferendis error qui.
      </h1>
      <h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
        exercitationem minus dolor vitae quidem ex minima quos, quibusdam
        reiciendis ducimus eaque odio rerum voluptas, explicabo nemo quisquam
        perferendis error qui.
      </h1>
      <h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
        exercitationem minus dolor vitae quidem ex minima quos, quibusdam
        reiciendis ducimus eaque odio rerum voluptas, explicabo nemo quisquam
        perferendis error qui.
      </h1>

      <h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
        exercitationem minus dolor vitae quidem ex minima quos, quibusdam
        reiciendis ducimus eaque odio rerum voluptas, explicabo nemo quisquam
        perferendis error qui.
      </h1>
      <h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
        exercitationem minus dolor vitae quidem ex minima quos, quibusdam
        reiciendis ducimus eaque odio rerum voluptas, explicabo nemo quisquam
        perferendis error qui.
      </h1>
    </div>
  );
};

export default Tweets;
