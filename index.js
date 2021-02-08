const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const TodoTask = require("./models/TodoTask");


dotenv.config();

app.use('/static', express.static('public'));

app.use(express.urlencoded({ extended: true }));

// database connection
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log(`connected to database ${process.env.DB_CONNECT}`)
    app.listen(3000, () => console.log('Server started and listening on port 3000!'));
}); //.then((res) => {
//     console.log(res)
// });

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    TodoTask.find({}, (err, tasks) => {
        res.render("todo.ejs", { TodoTasks: tasks });
    });
});

app.post('/', async(req, res) => {
    const todoTask = new TodoTask({
        content: req.body.content
    });
    try {
        await todoTask.save();
        console.log('deu bom')
        res.redirect("/");
    } catch (err) {
        console.log(`
                    deu ruim\ n$ { err }
                    `)
        res.redirect("/");
    }
});