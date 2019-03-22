const projectRouters = require('./projectRouters');

const project = server => {
    server.use('/api/project', projectRouters);
}

module.exports = {
    projectRouters: project
}