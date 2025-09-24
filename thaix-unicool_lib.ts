class thaiXUnicool<T> {
      
      private data : T[];
      private dataRemap : T[];
      
      constructor (data: T[]) {
            this.data = data
            this.dataRemap = [...this.data]
      }

      getAll = () => {
            this.dataRemap = [...this.data]
            return this;
      }

      getUniversity = () => {
            this.dataRemap = [...this.data]
            return this;
      }

      filter = (query : (data: T) => Boolean) => {
            this.dataRemap = this.dataRemap.filter(query)
            return this
      }

      find = (query: (data: T) => Boolean) => {
            const found = this.dataRemap.find(query)
            this.dataRemap = found ? [found] : []
            return this
      }

      map = <U>(callback: (data: T, index: number, array: T[]) => U) => {
            const mapped = this.dataRemap.map(callback);
            return new thaiXUnicool<U>(mapped);
      }

      all = () => {
            return this.dataRemap;
      }
}

export default thaiXUnicool