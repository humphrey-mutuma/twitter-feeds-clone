import { Avatar, IconButton, Link } from "@material-ui/core";
import MoreHorizSharpIcon from "@material-ui/icons/MoreHorizSharp";
import "./Tweet.css";
import ReplyIcon from "@material-ui/icons/Reply";
import SyncSharpIcon from "@material-ui/icons/SyncSharp";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";

const Tweet = ({tweet}) => {
  return (
    <div className="tweet_main">
      <div className="tweet__avatar">
        <IconButton className="tweet__avatar">
          <Avatar src="/" alt="Username" />
        </IconButton>

      </div>
      <div className="tweet__contents">
        <header>
          <div>
            <p>
              <strong>
                <Link className="tweet__userlink" to="/"> Humphrey Mutuma</Link>
              </strong>
              <span className="tweet__username">@HumphreyMutuma7</span>
              <span className="tweet__timeSent">.10m</span>
            </p>
          </div>
          <div>
            <IconButton>
              <MoreHorizSharpIcon />
            </IconButton>
          </div>
        </header>
        <main className="tweet__text">
          <p>
            {tweet}
          </p>
          <br />
          {/* add image if uploaded */}
        </main>
        <footer className="tweet__footer">
          <ul>
            <li>
              <IconButton className="tweet__replyIcon">
                <ReplyIcon />
              </IconButton>
            </li>
            <li>
              <IconButton className="tweet__retweetIcon">
                <SyncSharpIcon />
              </IconButton>
            </li>
            <li>
              <IconButton className="tweet__likeIcon">
                <FavoriteBorderRoundedIcon />
              </IconButton>
            </li>
            <li>
              <IconButton className="tweet__shareIcon">
                <ShareOutlinedIcon />
              </IconButton>
            </li>
            <li></li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Tweet;
