//Hash Functions - Sepearte Chaining
class HashTable {
  constructor(size = 4) {
    this.keyMap = new Array(size);
  }
  hashF(key) {
    let total = 0;
    let weiredPrime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * weiredPrime + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let hashval = this.hashF(key);
    let keyLst = [];
    keyLst.push(key);
    keyLst.push(value);
    if (this.keyMap[hashval] == null) {
      this.keyMap[hashval] = new Array();
    }
    this.keyMap[hashval].push(keyLst);
  }

  get(key) {
    let hashval = this.hashF(key);
    if (this.keyMap[hashval]) {
      for (var Arrkey of this.keyMap[hashval]) {
        if (Arrkey[0] === key) {
          return Arrkey[1];
        }
      }
      return undefined;
    }
    return undefined;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (valuesArr.includes(this.keyMap[i][j][1])) {
            continue;
          }
          valuesArr.push(this.keyMap[i][j][1]);
        }
      }
    }
    return valuesArr;
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (keysArr.includes(this.keyMap[i][j][0])) {
            continue;
          }
          keysArr.push(this.keyMap[i][j][0]);
        }
      }
    }
    return valuesArr;
  }
}

let hashT = new HashTable();
hashT.set("Pink", "Pink1");
hashT.set("Red", "Red2");
hashT.set("Orange", "Orange3");
hashT.set("Brown", "Brown5");
console.log(hashT.keys());
