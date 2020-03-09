const data = require('../../data');
import uuid from 'uuid';
const fs = require('fs');
import verboselog from 'verboselog';


export default (req, res) => {
    const ids = data.map( d => d.id );

    res.status(200).json({
        blogPosts:ids
    });
};

