"use client"
// React Client Component
async function PostCard({ post }) {

    return <div>
        {
            <div>
                <h3>{post.id}. {post.title}</h3>
                <p>{post.body}</p>
                <button onClick={() => {
                    alert('Click ok!')
                 }}>
                    Click
                </button>
            </div>
        }
    </div>

}

export default PostCard