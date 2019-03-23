const projectRouters = require('../project/projectRouter');
const actionRouters = require('../actions/actionRouter');

const project = server => {
    server.use('/api/project', projectRouters);
}

const actions = server => {
    server.use('/api/actions', actionRouters);
}

module.exports = {
    projectRouters: project,
    actionRouters: actions
}