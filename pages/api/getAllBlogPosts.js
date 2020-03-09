const data = require('../../data');

export default (req, res) => {

    res.status(200).json({
        blogPosts:data.map( d => d.id )
    });

};
