import Article from "./Article"

function ArticleList({posts}) {
    console.log(posts)
    const articles = posts.map((post) => {
        return <Article key={post.id} post = {post} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes}/>
    })

    return (
        <div>
            <main>
                {articles}
            </main>
        </div>
    )
}

export default ArticleList;