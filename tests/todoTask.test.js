const mongoose = require('mongoose');

const dbHandler = require('./db-handler');
const todoTaskService = require('../services/TodoTask');
const todoTaskModel = require('../models/TodoTask');

// Connect to a new in-memory database before running any tests.
beforeAll(async() => await dbHandler.connect());

// Clear all test data after every test.
afterEach(async() => await dbHandler.clearDatabase());

// Remove and close the db and server.
afterAll(async() => await dbHandler.closeDatabase());



describe('todoTask ', () => {

    // Tests that a valid todo task can be created through the todoTaskService without throwing any errors.
    it('can be created correctly', async() => {
        expect(async() => await todoTaskService.create({
                content: 'teste'
            }))
            .not
            .toThrow();
    });

    it('should retrieve the correct product if id matches', async() => {

        await todoTaskModel.create({
            content: 'teste'
        }).then(res => {
            expect(todoTaskService.findById(res._id))
                .resolves
                .toBe(res)
        })

    });


});