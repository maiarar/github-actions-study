const todoTaskModel = require('../models/TodoTask');

/**
 * Stores a new todoTask into the database.
 * @param {Object} todoTask todoTask object to create.
 * @throws {Error} If the todoTask is not provided.
 */
module.exports.create = async(todoTask) => {
    if (!todoTask)
        throw new Error('Missing todoTask');

    console.log("uhul post")

    await todoTaskModel.create(todoTask);
};


/**
 * Search todoTask by id.
 * @param {Object} todoTaskId todoTask object to search.
 * @throws {Error} If the todoTaskId is not provided.
 */
module.exports.findById = async(todoTaskId) => {
    if (!todoTaskId)
        throw new Error('Missing todoTaskId');
    await todoTaskModel.findById(todoTaskId).exec();
};