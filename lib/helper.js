const baseURL = '/api/posts'

// endpoint: api/post 
export const getPost = async (id) => {
    const res = await fetch(`http://localhost:3000/api/posts`)
    const posts = await res.json()

    if(id) {
        return posts.find(item => item.id == id)
    }

    return posts
}


