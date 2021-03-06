/* 
Start here and work your way down the nested components.
Not all files in the project need code added.
Look at each file to see what props need to be passed.
*/

// Import the state hook
import React, {useState} from "react";
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
import Posts from './components/Posts/Posts.js'
import SearchBar from './components/SearchBar/SearchBar.js'
// Import the dummyData
import dummyData from './dummy-data.js'
import "./App.css";

const App = () => {
  // Create a state called 'posts' to hold the list of posts, initializing to dummyData.
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.
  const [posts, setPosts] = useState([...dummyData])
  const updateSearch = evt => {
    console.log('updateSearch()')
    console.log(evt.target.value)
    if (evt.target.value.length === 0){
      console.log('no characters')
      setPosts([...dummyData])
    } else {
      let postsFiltered = dummyData.filter(v => v.username.includes(evt.target.value))
      console.log(postsFiltered)
      setPosts(postsFiltered)
      console.log(posts)
    }
  }
  const likePost = postId => {
    for (let i = 0; i < posts.length; i++){
      if (posts[i].id === postId){
        let postsClone = [...posts]
        postsClone[i].likes++
        dummyData[i].likes++
        setPosts(postsClone)
        console.log(posts)
      }
    }
    // This function is passed into nested components using props, to allow them to update application state.
    // It takes a post id as its only argument. The idea is to increase the 'likes' count of the post with the given `id`.
    // We will update the posts slice of state using `setPosts`, passing as the new state the invocation of `posts.map()`.
    // The callback passed into `posts.map()` performs the following logic:
    //  - if the `id` of the post matches `postId`, return a new post object containing an increased 'likes' count.
    //  - otherwise just return the post object unchanged.
  };
  

  return (
    <div className="App">
      {/* Add SearchBar and Posts here to render them */}
      <SearchBar updateSearch={updateSearch}/>
      <Posts likePost={likePost} posts={dummyData}/>
      {/* Check the implementation of each component, to see what props they require, if any! */}
    </div>
  );
};

export default App;
