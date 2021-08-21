import React from "react";

function UserCard({ user, avatar, link }) {
  return (
    <div className="user-card-container">
      <div className="user-card-header">
        <div className="user-avatar">
          <img src={avatar} alt="logo" />
        </div>
        <div>
          <a href="/" className="user-name">
            react
          </a>
          <p className="user-shown-name">React redux</p>
          {link && (
            <a className="user-default-link" href={link}>
              {" "}
              {link}{" "}
            </a>
          )}
          <p className="user-following">Followed by you and 435 others</p>
        </div>
      </div>
      <div className="user-card-body">
        <div className="user-card-body-section-1">
          <p>
            635<span>posts</span>
          </p>
          
          <p>
            12.000<span>followers</span>
          </p>
          <p>
            35<span>following</span>
          </p>
        </div>
        <div className="user-card-body-section-2">
            <img src={avatar} alt="" className="user-last-image" /><img src={avatar} alt="" className="user-last-image" /><img src={avatar} alt="" className="user-last-image" />
        </div>
        <div className="user-card-body-section-3">
            <button className="user-actions">Message</button><button className="user-actions">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
