declare class thaiXUnicool<T> {
    private data;
    private dataRemap;
    constructor(data: T[]);
    getAll: () => this;
    getUniversity: () => this;
    filter: (query: (data: T) => Boolean) => this;
    find: (query: (data: T) => Boolean) => this;
    map: <U>(callback: (data: T, index: number, array: T[]) => U) => thaiXUnicool<U>;
    all: () => T[];
}
export default thaiXUnicool;
