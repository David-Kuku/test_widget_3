import React from 'react'

// interface IProps {
//     loading: boolean
//     error: string
//     data: any
//     subreddit:string
// }
const DummyComponent = ({loading, error, data, subreddit}) => {
    function renderPost(post) {

        const { data: { title, url, author, id } } = post
        const authorUrl = `https://www.reddit.com/u/${author}`

        return (
            <div className="reddit_widget__post" key={id}>
                <div className="reddit_widget__posted_by">
                    posted by <a href={authorUrl} className="reddit_widget__posted_by" target="_blank" rel="noopener noreferrer">u/{author}</a>
                </div>
                <a href={url} className="reddit_widget__title" target="_blank" rel="noopener noreferrer">{title}</a>
            </div>
        )
    }

    // Filter, since reddit always returns stickied posts up top
    function nonStickiedOnly(post) {
        return !post.data.stickied
    }

    return (
        <div className="reddit_widget__app">
            <h1 className="reddit_widget__header">
                Latest posts in __hell0__ <a href={`https://reddit.com/r/${subreddit}`} rel="noopener noreferrer">/r/{subreddit}</a>
            </h1>
            <div className="reddit_widget__inner">
                {loading && "Loading..."}
                {error && error}
                {!!data.length && data.filter(nonStickiedOnly).map(renderPost)}
            </div>
            <p className="reddit_widget__powered_by">
                This kuku widget is powered by{" "}
                <a
                    href="https://javascriptpros.com"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    ReactPros.com
                </a>
            </p>
        </div>
    )
}

export default DummyComponent