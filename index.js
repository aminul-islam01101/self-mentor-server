import cors from 'cors';
import express from 'express';

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('server is running on update dev');
});

app.listen(port, () => {
    console.log('Server running on port', port);
});
