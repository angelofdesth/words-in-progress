import React from 'react'
import CardGrid from '../components/CardGrid';

const tempPost1 = {
  id: "1",
  author: "angeline", 
  title: "Temporary post",
  date: "6/18/2025",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
};

const tempPost2 = {
  id: "2",
  author: "angeline", 
  title: "Temporary post 2",
  date: "6/18/2025",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
};

const tempPost3 = {
  id: "3", 
  author: "angeline", 
  title: "Temporary post 3",
  date: "6/18/2025",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
};

const tempPost4 = {
  id: "4", 
  author: "angeline", 
  title: "Temporary post 4",
  date: "6/18/2025",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
};

const recentPosts = [tempPost1, tempPost2, tempPost3, tempPost4] ;

const Home = () => {
  return (<>
        <header className="">
            <h1>welcome to my blog!</h1>
        </header>
        
        <div>
          <h2>Recent posts</h2>
          <CardGrid cards={recentPosts} /> 
        </div>
</>
  )
}

export default Home