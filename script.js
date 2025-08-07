class HashMap {
    constructor(size = 16) {
        this.loadFactor = 16 * 0.8
        this.capacity = size
        this.array = new Array(size).fill(null).map(()=> [])
    }
    hash(key) {
      let hashCode = 0;
          
      const primeNumber = 3;
      for (let i = 0; i < key.length; i++) {
         hashCode = primeNumber * hashCode + key.charCodeAt(i);
      }
    
      return hashCode % 16;
    } 
    set(key, value) {
        let index = this.hash(key)
        let bucket = this.array[index]
        for(let pair of bucket) {
            if(pair.key === key) {
                pair.value = value
                return
            }
        }
        bucket.push({key, value})
    }
    get(key) {
        let index = this.hash(key)
        let bucket = this.array[index]
        
        for(let pair of bucket) {
             if(pair.key === key) {
                return pair.value
            } 
        }
        return null
        
    }
    has(key) {
        let index = this.hash(key)
        let bucket = this.array[index]
        
        for(let pair of bucket) {
             if(pair.key === key) {
                return true
            } 
        }
        return false
    }
    remove(key) {
        let index = this.hash(key)
        let bucket = this.array[index]
        
        for(let i = 0; i < bucket.length; i++) {
             if(bucket[i].key=== key) {
                bucket.splice(i, 1)
                return true
            } 
        }
        return false
    }
    length() {
        return this.count
    }
    clear() {
        this.array = []
        this.count = 0
    }
    keys() {
        let keys = []
        for(let bucket of this.array) {
            for(let pair of bucket) {
                keys.push(pair.key)
            }
        }
        return keys
    }
    values() {
        let values = []
        for(let bucket of this.array) {
            for(let pair of bucket) {
                values.push(pair.value)
            }
        }
        return values
    }
    entries() {
        let entries = []
        for(let bucket of this.array) {
            let entry = []
            for(let pair of bucket) {
                
                entry.push(pair.key, pair.value)
            }
            entries.push(entry)
        }
        return entries
    }
}