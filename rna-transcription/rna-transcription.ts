class Transcriptor {
    toRna( string:string  ) {
        // invalid if contains anything but ACGT
        if (string.match(/[^ACGT]/)) {{
            throw new Error('Invalid input DNA.');
        }}

        return string.replace(/G/g, 'X')
            .replace(/C/g, 'G')
            .replace(/X/g, 'C')
            .replace(/A/g, 'U')
            .replace(/T/g, 'A');
    }
}

export default Transcriptor
