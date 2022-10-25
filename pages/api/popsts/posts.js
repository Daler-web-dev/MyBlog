import data from '../data'


// api/Posts
export default function handler(req, res) {
    const {Posts} = data
    
    
    if(Posts) return res.status(200).json(Posts)
    return res.status(404).json({error: "Data Not Found"})
}