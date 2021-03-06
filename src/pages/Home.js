import React, { useEffect, useState } from 'react';
import Posts from '../components/Posts';
import axios from 'axios'

/*
LINK TO DEPLOYED WEBSITE
Unique Deploy URL: https://60d297f560ab1547e9aaae38--assignment6-arsh.netlify.app/
Website URL: https://assignment6-arsh.netlify.app/
*/
function Home() {
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });

  useEffect( () => {
   async function fetchData() {
    setAppState({ loading: true });
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    const res = await axios.get(apiUrl);
    console.log(res)
    setAppState({ loading: false, posts: res.data.slice(0,5)} );
   }
   fetchData();
  }, [setAppState]);

  return (
      <Posts isLoading={appState.loading} posts={appState.posts}/>
  );

}
export default Home;
