export default class WordCount {
    count(sentence: string): Map<string, number> {
        let x: Map<string, number> = new Map<string, number>();

        sentence.replace(/[[:punct:]]/, '')
            .toLowerCase()
            .split(/\s/)
            .filter((value: string): boolean => {
                return value != ''
            })
            .forEach(value => {
                x.set(value, (x.has(value) ? x.get(values) + 1 : 1))
            });

        return x;
    }
}
