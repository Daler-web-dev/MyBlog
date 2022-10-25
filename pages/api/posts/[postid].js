import data from '../data'


// api/post
export default function handler(req, res) {
    const {postid} = req.query
    const {Posts} = data

    if(postid) {
        const post = Posts.find(item => item.id == postid)
        return res.status(200).json(post)
    }

    return res.status(404).json({error: "post not found"})
}