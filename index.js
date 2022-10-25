const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const category = require('./data/categories.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
  res.send('server Running update json');
});

app.get('/category', (req, res) => {
  res.send(category);
});
app.get('/category/:id', (req, res) => {
  const id = req.params.id;
  if (id === '08') {
      res.send(courses);
  }
  else {
      const course_category = courses.filter(n => n.category_id === id);
      res.send(course_category);
  }
})
app.get('/course/:id', (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find(n => n._id === id);
  res.send(selectedCourse);
});


app.listen(port, () => {
  console.log('Server running on port', port);
});
