"use client"

//posterior
import Link from 'next/link'

/* React Client Component (initial)
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
*/

/* React Client Component (after Link) */
async function PostCard({ post }) {

    return <div>
        {
            <div>
                <Link href={`/posts/${post.id}`}>
                    <h3>{post.id}. {post.title}</h3>
                </Link>
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