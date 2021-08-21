import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Story from "./components/Story";
import Post from "./components/Post";

function App() {

  const posts=[{
    id:1,
    postOwner:"React",
    postOwnerImage:logo,
    image:logo,
    isVerified:true,
    isLiked:false,
    postTime:new Date(2021,8,15),
    postOwnerComment:"Instagram homepage clone \nLorem ipsum dolor sit amet",
    likes:"17,762",
    isInBookmark:false,
  },
  {
    id:2,
    postOwner:"Redux",
    postOwnerImage:logo,
    image:logo,
    isVerified:false,
    isLiked:false,
    postTime:new Date(2021,8,12),
    postOwnerComment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquam ratione, mollitia sapiente asperiores quas hic delectus corporis, nulla possimus debitis a nihil autem ipsa! Similique obcaecati dolorum libero numquam.",
    likes:"20,728",
    isInBookmark:false
  }
]



  return (
    <div>
      
      <header>
        <Navbar logo={logo} />
      </header>
      <main>
        <section>
          <Story img={logo} />
        </section>
        <section className="posts">
          {posts.map(post=>
            <Post
            postId={post.id}
            postOwner={post.postOwner}
            logo={post.postOwnerImage}
            img={post.image}
            isVerified={post.isVerified}
            liked={post.isLiked}
            isInBookmark={post.isInBookmark}
            likes={post.likes}
            postTime={post.postTime}
            postOwnerComment={post.postOwnerComment}
            />)}
          
          
        </section>
      </main>
    </div>
  );
}

export default App;
