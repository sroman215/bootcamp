import { Response, Request } from "express";
import { Adder } from "../Models/Adder";
import { CalculatorService } from "../Services/calculatorService";



export class CalculatorRouter {
    
    constructor(private calcService: CalculatorService) { }

    public addNumbers(req: Request, res: Response) {
        const adder: Adder = <Adder> req.body;
        res.status(200).json(this.calcService.addNumbers(adder.num1, adder.num2))
    }
}