const a = 'a'.charCodeAt(0) + 26;
const A = 'A'.charCodeAt(0) + 26;

export default class RotationalCipher {

    static rotate(input: string, shift: number): string {
        return input.split('').map(el => {
            let newChar = el.charCodeAt(0);

            if (el.match(/[a-zA-Z]/)) {
                newChar += shift;

                let offset = A;
                if (el.match(/[a-z]/)) {
                    offset = a;
                }
                if (newChar >= offset) {
                    newChar -= 26;
                }
            }

            return String.fromCharCode(newChar)
        }).join('');
    }
}
