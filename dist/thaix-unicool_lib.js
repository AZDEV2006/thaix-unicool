class thaiXUnicool {
    constructor(data) {
        this.getAll = () => {
            this.dataRemap = [...this.data];
            return this;
        };
        this.getUniversity = () => {
            this.dataRemap = [...this.data];
            return this;
        };
        this.filter = (query) => {
            this.dataRemap = this.dataRemap.filter(query);
            return this;
        };
        this.find = (query) => {
            const found = this.dataRemap.find(query);
            this.dataRemap = found ? [found] : [];
            return this;
        };
        this.map = (callback) => {
            const mapped = this.dataRemap.map(callback);
            return new thaiXUnicool(mapped);
        };
        this.all = () => {
            return this.dataRemap;
        };
        this.data = data;
        this.dataRemap = [...this.data];
    }
}
export default thaiXUnicool;
