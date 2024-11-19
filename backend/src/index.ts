import express, { Request, Response } from 'express';
import cors from 'cors';  // Import the cors package
import todoRoutes from './routes/todos';

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());  // Enable CORS for all routes
app.use(express.json());
app.use('/todos', todoRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
