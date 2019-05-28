class ProteinTranslation {
    static proteins( input:string ): array {
        let output: string[] = [];
        const values = input.match(/.{3}/g);

        values.some(e => {
            switch (e) {
                case 'AUG':
                    output.push('Methionine');
                    break;
                case 'UUU':
                case 'UUC':
                    output.push('Phenylalanine');
                    break;
                case 'UUA':
                case 'UUG':
                    output.push('Leucine');
                    break;
                case 'UCU':
                case 'UCC':
                case 'UCA':
                case 'UCG':
                    output.push('Serine');
                    break;
                case 'UAU':
                case 'UAC':
                    output.push('Tyrosine');
                    break;
                case 'UGU':
                case 'UGC':
                    output.push('Cysteine');
                    break;
                case 'UGG':
                    output.push('Tryptophan');
                    break;
                case 'UAA':
                case 'UAG':
                case 'UGA':
                    // Yes, we want to stop
                    return true;
            }
            return false;
        });

        return output;
    }
}

export default ProteinTranslation
