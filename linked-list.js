class Node {
    constructor(value) {
        this.value= value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0; 
    }

    isEmpty() {
        return this.size===0
    }
    getSize() {
        return this.size
    }

    add(value) {
        const node = new Node(value)
        if(this.isEmpty()) this.head = node
        else {
            let current = this.head;
            while(current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size++
    }
}

const list = new LinkedList()

