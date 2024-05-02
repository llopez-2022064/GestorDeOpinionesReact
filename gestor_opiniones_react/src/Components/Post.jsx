export const Post = ({ posts = [] }) => {
    return (
        <>
            {
                posts.map((post) => (
                    <div key={post._id} className="mt-4 d-flex ms-4">
                        <div className="card">
                            <h5 className="card-title">{post.title}</h5>
                            <div className="card-body">
                                {post.content}
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}