console.log('works')

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item) {
        this.data[this.length] = item;
        this.length ++;
    }

    get(index) {
        return this.data[index];
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length --;
        return lastItem;
    }

    shift() {
        const firstItem = this.data[0];
        delete this.data[0];
        this.length --;
        const newData = {};
        Object.keys(this.data).forEach(key => {
            newData[key - 1] = this.data[key];
        })

        this.data = newData;

        return firstItem;
    }

    deleteByIndex(index) {
        const deletedItem = this.data[index];
        delete this.data[index];
        this.length--;
        const newData = {}
        Object.keys(this.data).forEach(key => {
            if (key > index) {
                newData[key - 1] = this.data[key]
            } else {
                newData[key] = this.data[key]
            }
        });
        this.data = newData;
        return deletedItem;
    }
}

const myNewArray = new MyArray();






