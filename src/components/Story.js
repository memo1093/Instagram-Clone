import React, { useEffect, useRef, useState } from "react";

function Story({ img }) {
  const [images, setImages] = useState([]);
  const [scrollPosx, setScrollPosx] = useState(0)/**For checking the scrollpos */

  useEffect(() => {
    
    if (images.length < 30) {
      for (let i = 0; i < 30; i++) {
        setImages((prevState) => [
          ...prevState,
          <div className="story-component">
            <div width="60" height="60" className="story-canvas">
              
            <img className="story-image" src={img} alt="test"></img>
            </div>
            <p className="story-owner">React</p>
          </div>,
        ]);
      }
    }
    
    
  }, [images.length, img,scrollPosx]);
  const increaseOffset=300
  const decreaseOffset=-300
  const scroll=(scrollOffset)=>{
    const storyBoard = document.querySelector(".story-board")
    storyBoard.scrollLeft+=scrollOffset
    storyBoard.scrollLeft+scrollOffset<=storyBoard.scrollWidth-scrollOffset&&setScrollPosx(storyBoard.scrollLeft+scrollOffset)
    
    
    console.log("state: "+scrollPosx+ "\nrealScrollPosX: "+storyBoard.scrollLeft+"\nscrollWidth :"+storyBoard.scrollWidth)
  }
 

  return (
    <div className="story">
      <div className="story-board-container">
        <div className="story-board">{images.map((image) => image)}</div>
       
        {scrollPosx-decreaseOffset>=decreaseOffset&&(
          <i
            className="story-board-icon-left fas fa-chevron-circle-left"
            onClick={() =>   scroll(decreaseOffset)
            }
          ></i>
        )}
        {(
          <i
            className="story-board-icon-right fas fa-chevron-circle-right"
            onClick={() => scroll(increaseOffset) }
          ></i>
        )}
      </div>
    </div>
  );
}

export default Story;
