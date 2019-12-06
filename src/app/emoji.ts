export class Emoji {
    
    constructor(
        public name: string,
        public url: string,
        // enable values for status 0 - deleted, 1 - unchecked, 2 - liked
        public status: number 
        ) {}
}
