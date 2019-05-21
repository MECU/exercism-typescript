export default class DifferenceOfSquares {
    public difference: number;
    public squareOfSum: number;
    public sumOfSquares: number;

    constructor(private input: number) {
        this.squareOfSum = this.calcSquareOfSum();
        this.sumOfSquares = this.calcSumOfSquares();
        this.difference = this.squareOfSum - this.sumOfSquares;
    }

    calcSquareOfSum(): number {
        let value: number = 1;
        for (let i = 2; i <= this.input; ++i) {
            value += i;
        }

        return value ** 2;
    }

    calcSumOfSquares(): number {
        let value: number = 1;
        for (let i = 2; i <= this.input; ++i) {
            value += i ** 2;
        }

        return value;
    }
}
