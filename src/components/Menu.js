import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";

import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
import { Avatar, Button, IconButton } from "@material-ui/core";
import MoreHorizSharpIcon from "@material-ui/icons/MoreHorizSharp";

import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li>
          <IconButton>
            <TwitterIcon style={{ color: "#1DA1F2", fontSize: "2rem" }} />
          </IconButton>
        </li>
        <li>
          <IconButton className="iconButton">
            <HomeIcon />
            <span className="menu_span">Home</span>
          </IconButton>
        </li>
        <li>
          <IconButton className="iconButton">
            <SyncAltIcon />
            <span className="menu_span">Explore</span>
          </IconButton>
        </li>
        <li>
          <IconButton className="iconButton">
            <NotificationsNoneIcon />
            <span className="menu_span">Notifications</span>
          </IconButton>
        </li>
        <li>
          <IconButton className="iconButton">
            <MailOutlineIcon />
            <span className="menu_span">Messages</span>
          </IconButton>
        </li>
        <li>
          <IconButton className="iconButton">
            <BookmarkBorderIcon />
            <span className="menu_span">Bookmarks</span>
          </IconButton>
        </li>
        <li>
          <IconButton className="iconButton">
            <ListAltIcon />
            <span className="menu_span">Lists</span>
          </IconButton>
        </li>
        <li>
          <IconButton className="iconButton">
            <PersonOutlineIcon />
            <span className="menu_span">Profile</span>
          </IconButton>
        </li>
        <li>
          <IconButton className="iconButton">
            <AddCircleOutlineIcon />
            <span className="menu_span">More</span>
          </IconButton>
        </li>
        <li>
          <Button variant="contained" className="btn_tweet">
            Tweet
          </Button>
        </li>

        <li className="menu__profile iconButton">
          <div>
            <Avatar alt="Humphrey" src="/" />
          </div>
          <div>
            <p>
              <strong>Humphrey Mutuma</strong>
            </p>
            <p>@HumphreyMutuma</p>
          </div>
          <div>
            <MoreHorizSharpIcon />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
