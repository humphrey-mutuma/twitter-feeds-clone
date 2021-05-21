import React from "react";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import { Link } from "@material-ui/core";

import "./Treading.css";
import TreadingStories from "./treadingChildren/TreadingStories";
import TreadingWhoToFollow from "./treadingChildren/TreadingWhoToFollow";
import TreadingTopicsToFollow from "./treadingChildren/TreadingTopicsToFollow";

const Treading = () => {
  return (
    <div className="treading">
      <header className="treading__search">
        <div className="treading__searchDiv">
          <SearchRoundedIcon />
          <input type="text" placeholder="Search Twitter" />
        </div>
      </header>
      {/* treads for you */}
      <section className="treading__stories">
        <header style={{ padding: "10px" }}>
          <h2>Treading stories</h2>
        </header>
        <TreadingStories />
        <TreadingStories />
        <TreadingStories />
        <TreadingStories />
        <TreadingStories />
      </section>
      <section className="treading__whoToFollow">
        <header style={{ padding: "10px" }}>
          <h2>Who to follow</h2>
        </header>
        <TreadingWhoToFollow />
        <TreadingWhoToFollow />
      </section>
      <section className="treading__topicsToFollow">
        <header style={{ padding: "10px" }}>
          <h2>Treading topics to follow</h2>
        </header>

        <TreadingTopicsToFollow />
        <TreadingTopicsToFollow />
        <TreadingTopicsToFollow />
      </section>
      {/* footer section */}
      <footer className="treading__footer">
        <span>
          <Link to="/">Terms of Service</Link>
        </span>
        <span>
          <Link to="/">Privacy Policy</Link>
        </span>
        <span>
          <Link to="/">Cookie Policy</Link>
        </span>
        <span>
          <Link to="/">Ads info</Link>
        </span>
        <span>
          <Link to="/">More ...</Link>
        </span>
        <span> &copy; 2021 Twitter, inc.</span>
      </footer>
    </div>
  );
};

export default Treading;
