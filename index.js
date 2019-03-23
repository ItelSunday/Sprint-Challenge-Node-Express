// play this: https://www.youtube.com/watch?v=d-diB65scQU
// code away! 
// require ('dotenv').config();

const server = require('./api/server.js');

// make the port dynamic
const port = process.env.PORT || 4000;
server.listen(port, () => {
    console.log(`\n*** Server Running on http://localhost:${port} ***\n`)
});


