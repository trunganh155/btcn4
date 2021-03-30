const users = [{
    id: 1,
    username: '18600022',
    password: '$2b$10$nnxdsq.NeimA2vJffmu32eE1Vz6Whz8dLw2zKiaHBRFY9l0MNUAwe',
    //password: 'kocopass',
}];

exports.findByUsername = function (username) {
    return users.find(u => u.username === username);
};

exports.findById = function (id) {
    return users.find(u => u.id === id);
};
