// @ts-nocheck
import * as fs from 'fs'

const result = fs
    .readFileSync('input.txt', 'utf-8')
    .split('\n')
    .reduce((acc, line) => {
        const numbers = findNumbers(line);
        if (!numbers.length) {
            return acc;
        }
        const first = numbers[0];
        const last = [...numbers].pop();
        const sum = Number(first.toString() + (last !== null ? last.toString() : ""));
        return acc + sum;
    }, 0)

function findNumbers(str: string) {
    const words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const terms = [...words, ...[...Array(10)].map((_, i) => i)].map(String);
    const results: number[] = [];
    for (let i = 0; i < str.length; i++) {
        const matchIndex = terms.findIndex(t => str.substring(i).startsWith(t));
        if (matchIndex === -1) {
            continue;
        }
        const match = terms[matchIndex];
        results.push(Number(match) || words.findIndex(w => w === match) + 1)
    }
    return results;
}

console.log('Result', result)