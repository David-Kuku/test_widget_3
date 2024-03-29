import React, { useEffect, useState } from 'react';
import './App.css';
import DummyComponent from './DummyComponent';
import ModalComp from './ModalComp';

// Render each post
// function renderPost(post){
//   const { data: { title, url, author, id } } = post
//   const authorUrl = `https://www.reddit.com/u/${author}`

//   return (
//     <div className="reddit_widget__post" key={id}>
//       <div className="reddit_widget__posted_by">
//         posted by <a href={authorUrl} className="reddit_widget__posted_by" target="_blank" rel="noopener noreferrer">u/{author}</a>
//       </div>
//       <a href={url} className="reddit_widget__title" target="_blank" rel="noopener noreferrer">{title}</a>
//     </div>
//   )
// }

// // Filter, since reddit always returns stickied posts up top
// function nonStickiedOnly(post){
//   return !post.data.stickied
// }

function App({ domElement }) {
  const subreddit = domElement.getAttribute("data-subreddit")
  const [loading, setLoading] = useState();
  const [error, setError] = useState('');
  const [data, setData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    // Fetch data from reddit
    setLoading(true)
    fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data.data.children.slice(0, 10));
      })
      .catch((e) => {
        console.log(e)
        setLoading(false);
        setError('error fetching from reddit');
      });
  }, [subreddit])

  if (subreddit === "javascript") {
    return (
      <div>
        <button onClick={() => setModalIsOpen(true)} style={{backgroundColor: 'green', color: 'white', padding: '10px 20px', borderRadius: '5px'}}>Click to pop up checkout</button>

        <ModalComp modalIsOpen = {modalIsOpen} setModalIsOpen={setModalIsOpen}>
          <DummyComponent data={data} error={error} loading={loading} subreddit={subreddit} />
        </ModalComp>
      </div>
    )
  }
  return (
    <DummyComponent data={data} error={error} loading={loading} subreddit={subreddit} />
  );
}

export default App;