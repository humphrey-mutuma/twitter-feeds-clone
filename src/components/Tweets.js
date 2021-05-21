import React, { useState, useEffect } from "react";
import StarOutlineSharpIcon from "@material-ui/icons/StarOutlineSharp";
import { Avatar, Button, IconButton, Input } from "@material-ui/core";
import CropOriginalSharpIcon from "@material-ui/icons/CropOriginalSharp";
import GifIcon from "@material-ui/icons/Gif";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import "./Tweets.css";
import PublicIcon from "@material-ui/icons/Public";
import PollOutlinedIcon from "@material-ui/icons/PollOutlined";
import EventOutlinedIcon from "@material-ui/icons/EventOutlined";
import Tweet from "./Tweet";

import { db } from "../firebase";

const Tweets = () => {
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]);

  const tweetHandle = (e) => {
    e.preventDefault();
    tweet &&
      db
        .collection("Tweets")
        .add({
          tweet: tweet,
        })
        .then(() => {
          alert("data sent successfully");
        })
        .catch((error) => {
          alert(error);
        });
    setTweet("");
  };

  // collect tweets
  useEffect(() => {
    db.collection("Tweets")
      .onSnapshot((snapshot) => {
        setTweets(snapshot.docs.map((doc) => doc.data()));
      })
      // .then((data) => {
      //   alert("data retrieved perfectly");
      // })
      // .catch((error) => {
      //   console.error(error);
      // });
  }, []);

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
          <IconButton className="tweets__avatar">
            <Avatar
              src="/"
              alt="Humphrey Mutuma profile"
              className="user__avatar"
            />
          </IconButton>
        </div>
        <div className="tweets__articleRight">
          {/* form to submit tweet to firestore */}
          <form onSubmit={tweetHandle}>
            <div className="tweets__input">
              <span className="tweets__inputField">
                {/* tweet form input */}
                <Input
                  value={tweet}
                  onChange={(e) => setTweet(e.target.value)}
                  placeholder="What's happening?"
                />
                {/* end of input form*/}
              </span>
              <span>
                <IconButton className="tweet__whoCanReplyIcon">
                  <span className="tweet__whoCanReplyText">
                    <PublicIcon />
                    Everyone can reply
                  </span>
                </IconButton>
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
                {/* submit button */}
                <Button
                  onSubmit={tweetHandle}
                  type="submit"
                  variant="contained"
                  className="btn__tweet"
                >
                  Tweet
                </Button>
              </div>
            </div>
          </form>
        </div>
      </article>

      {/* tweets sections */}
      <section>

        {tweets.map(({ tweet }) => (
          <Tweet tweet={tweet} />
        ))}
        {/* <Tweet /> */}

      </section>
    </div>
  );
};

export default Tweets;
