
import * as express from "express";
import path = require("path")
import { Response, Request } from "express";
import { TicTacToeRouter } from "./Routes/tictactoeRoute";
import { CheckWriterRouter } from "./Routes/checkWriterRouter";
import { TicTacToeService } from "./Services/tictactoeService";
import bodyParser = require("body-parser");
import { CheckWriterService } from "./Services/checkWriterService";
import { CalculatorService } from "./Services/calculatorService";
import { CalculatorRouter } from "./Routes/calculatorRoute";
import http = require('http');


const app = express()
const port = process.env.PORT || 3000

const ticTacToeService = new TicTacToeService()
const ticTacToeRouter = new TicTacToeRouter(ticTacToeService);

const checkWriterService = new CheckWriterService();
const checkWriterRouter = new CheckWriterRouter(checkWriterService);

const calculatorService = new CalculatorService();
const calculatorRouter = new CalculatorRouter(calculatorService);

app.use('/api', bodyParser.json())

// APIs for bootcamp
app.post('/api/calculator', (req: Request, res: Response) => calculatorRouter.addNumbers(req, res))

// APIs for tick tack toe game 
app.get('/api/ttt/game', (req: Request, res: Response) => ticTacToeRouter.getGame(req, res) )
app.post('/api/ttt/makemove', (req: Request, res: Response) => ticTacToeRouter.makeMove(req, res))
app.delete('/api/ttt', (req: Request, res: Response) => ticTacToeRouter.resetGame(req, res))

// APIs for interview
app.post('/api/checkwriter', (req: Request, res: Response) => checkWriterRouter.getValue(req, res))

// Default route used to serve the frontend
app.use('/', express.static(path.join(__dirname, '../client')));

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
});

// Start listening on the port
server.listen(port, () => console.log(`App listening at http://localhost:${port}`))
