const util = require('util');

const verboselog = ( args, message ) => {
    if(message) {
        console.log('\x1b[36m%s\x1b[4m\x1b[0m',message )
    }
    console.log(util.inspect(args, {showHidden:true, depth:null, colors:true}) );
};

module.exports = verboselog;