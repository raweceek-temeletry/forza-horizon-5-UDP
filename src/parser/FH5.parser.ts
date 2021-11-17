import { Parser } from 'binary-parser'

export class FH5Parser extends Parser {
    fromBuffer(buffer: Buffer) {
        return this.parse(buffer);
    }
}