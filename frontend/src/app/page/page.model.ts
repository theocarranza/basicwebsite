export class Page {
    constructor(
        public header: string,
        public subtitle: string,
        public description: string,
        public url: string,
        public image: string,
        public list: Object[],
    ) { }
}
