import React, { useCallback, useEffect, useState } from "react";
import OptionsModal from "./OptionsModal";
import UserCard from "./UserCard";

function Post({
  postId,
  postOwner,
  logo,
  img,
  isVerified,
  liked,
  isInBookmark,
  likes,
  postTime,
  postOwnerComment,
}) {
  const handleImageDblClick = (e) => {
    setisLiked(true);
    console.log(e.target.parentNode)
    let flexParent = document.createElement("div")
    let element = document.createElement("i");

    flexParent.className="like-container"
    element.className = "fas fa-heart on-like";

    flexParent.appendChild(element)
    e.target.parentNode.appendChild(flexParent);
    setTimeout(() => {
      e.target.parentNode.removeChild(flexParent);
    }, 1000);
  };

  const [comment, setComment] = useState("");
  const [ownerCommentBoundary, setownerCommentBoundary] = useState(68);
  const [isBookmark, setIsBookmark] = useState(isInBookmark);
  const [isLiked, setisLiked] = useState(liked);
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    postOwnerComment &&
      postOwnerComment.indexOf("\n") > -1 &&
      setownerCommentBoundary(postOwnerComment.indexOf("\n")) &&
      postOwnerComment.replace("\n", <br />);

    
  }, [postOwnerComment, isBookmark, isInBookmark, postId]);

  const handleOwnerCommentBoundary = () => {
    setownerCommentBoundary(postOwnerComment.length);
  };

  const handleBookmark = useCallback(() => {
    setIsBookmark((prevState) => {
      
      if (prevState !== true && !isBookmark === true) {
        let bookmarkNotification = document.querySelector("#bookmark-notification-"+postId)
        let opacity=0;
        bookmarkNotification.style.display="flex"
        bookmarkNotification.style.opacity=0
        
        const opacityIncreaser = () => {
          opacity+=0.125125
          bookmarkNotification.style.opacity=opacity
        }
        const opacityDecreaser = () => {
          opacity-=0.125125
          bookmarkNotification.style.opacity=opacity
        }
          
        let increaseOpacityInterval = setInterval(opacityIncreaser,20)
        
        setTimeout(()=>{
          clearInterval(increaseOpacityInterval)
          let decreaseOpacityInterval = setInterval(opacityDecreaser,20)
          setTimeout(() => {
            clearInterval(decreaseOpacityInterval)
            bookmarkNotification.style.display="none"
          }, 3000);
        },1000)
        
      }
      return !isBookmark;
    });
  }, [isBookmark, postId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You commented : " + comment);
  };
  return (<>
     <OptionsModal openModal={openModal} setOpenModal={setOpenModal} postId={postId}/>
    <div className="post">
      <div className="post-header">
        <div className="post-avatar-canvas">
          <img src={logo} alt="avatar" className="post-avatar" />
        </div>
        <div className="post-owner">
          <a href="/">{postOwner}</a>
          <UserCard avatar={logo} />
          {isVerified && <span className=" icons badge-verified"></span>}
        </div>
        <i className="post-options-logo" onClick={setOpenModal}>...</i>
        
      </div>
      <div className={"post-body post-body-" + postId}>
        <div className="post-image-container">

        <img
          src={img}
          alt="post"
          className="post-image"
          onDoubleClick={handleImageDblClick}
          />
            </div>
        <div id={"bookmark-notification-"+postId} className="post-bookmark-notification">
          <p>Your item has been saved.</p>
          <button className="post-button">View your saved posts</button>
        </div>
        <div className="post-icons">
          <i
            onClick={() => setisLiked(!isLiked)}
            className={
              isLiked
              ? "fas fa-heart like post-icon"
              : "far fa-heart like post-icon"
            }
            ></i>

          <svg
            aria-label="Comment"
            className="post-icon"
            fill="#262626"
            height="24"
            role="img"
            viewBox="0 0 48 48"
            width="24"
            >
            <path
              clip-rule="evenodd"
              d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
              fill-rule="evenodd"
              ></path>
          </svg>
          <i class="far fa-paper-plane post-icon"></i>
          <i
            className={
              isBookmark
              ? "post-bookmark-icon fas fa-bookmark"
              : "post-bookmark-icon far fa-bookmark"
            }
            onClick={handleBookmark}
            ></i>
        </div>
        <a href="/" className="post-likes">
          <span>{likes}</span> likes
        </a>
        <div href="/" className="post-owner-comment">
          <a href="/">React</a>
          {postOwnerComment && (
            <span>
              {postOwnerComment.slice(0, ownerCommentBoundary)}
              {postOwnerComment.length > ownerCommentBoundary && (
                <>
                  <span onClick={()=>setOpenModal(true)}>...</span>
                  <button onClick={handleOwnerCommentBoundary}>more</button>
                </>
              )}
            </span>
          )}
        </div>
        <p className="post-time">{postTime.toISOString().split("T")[0]}</p>
      </div>
      <form action="post" className="post-footer" onSubmit={handleSubmit}>
        <button className="post-emoji">
          <svg
            aria-label="Emoji"
            fill="#262626"
            height="24"
            role="img"
            viewBox="0 0 48 48"
            width="24"
            >
            <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path>
            <path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path>
          </svg>
        </button>
        <textarea
          name="comment"
          className="post-comment"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          autoComplete="off"
          placeholder="Add a comment..."
          ></textarea>
        <button
          type="submit"
          className="post-button"
          disabled={comment.length === 0}
          >
          Post
        </button>
      </form>
    </div>
          </>
  );
}

export default Post;
