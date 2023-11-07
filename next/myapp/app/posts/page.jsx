/* En react:
useState
useEffect
*/
/* Pero en next puedo hacer peticiones de datos desde el server (de forma asíncrona) */
import PostCard from '../../components/PostCard'

async function loadPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data
}

//renderiza
async function PostPages() {
  
    const posts = await loadPosts()

    return <div>
        {
            posts.map(post => (
                <PostCard post={post} key={post.id}/>
            ))
        }
    </div>
    
}

export default PostPages