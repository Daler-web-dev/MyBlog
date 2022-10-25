const baseURL = '/api/posts'

// endpoint: api/post 
export const getPost = async (id) => {
    const res = await fetch(`${baseURL}`)
    const posts = await res.json()

    if(id) {
        return posts.find(item => item.id == id)
    }

    return posts
}


