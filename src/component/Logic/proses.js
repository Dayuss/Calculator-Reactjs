import * as math from 'mathjs'

math.config({
    number: 'BigNumber',
    precision: 64
});

export default function proses(b1, op, b2) {
    const a = math.bignumber(b1)
    const b = math.bignumber(b2)
    if (op === '×') return math.multiply(a, b).toString()
    if (op === '÷') return math.divide(a, b).toString()
    if (op === '+') return math.add(a, b).toString()
    if (op === '-') return math.subtract(a, b).toString()
}