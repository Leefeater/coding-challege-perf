const data = require('../../data');
import verboselog from 'verboselog'

export default (req, res) => {

    const id = req.headers['post-id'];

    let post = data.filter( d => d.id === id );

    res.status(200).json({
        blogPost:post[0]
    });
};

