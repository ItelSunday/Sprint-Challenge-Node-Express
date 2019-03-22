const projectRouters = require('../project/projectRouter');

const project = server => {
    server.use('/api/project', projectRouters);
}

module.exports = {
    projectRouters: project
}