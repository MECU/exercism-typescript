export default class Triangle {

    sides: number[];

    constructor(...sides: number[]) {
        this.sides = sides;
    }

    private validate() {
        this.sides.forEach(e => {
            if (e <= 0) {
                throw new Error('Side cannot be zero');
            }
        });

        if (this.sides[0] + this.sides[1] < this.sides[2] ||
            this.sides[1] + this.sides[2] < this.sides[0] ||
            this.sides[2] + this.sides[0] < this.sides[1]
        ) {
            throw new Error('Illegal triangle');
        }
    };

    kind() {
        this.validate();

        if (this.sides[0] === this.sides[1] &&
            this.sides[1] === this.sides[2]
        ) {
            return 'equilateral'
        }

        if (this.sides[0] === this.sides[1] ||
            this.sides[1] === this.sides[2] ||
            this.sides[0] === this.sides[2]
        ) {
            return 'isosceles'
        }

        return 'scalene'
    }
}
