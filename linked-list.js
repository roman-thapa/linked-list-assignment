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

    shift(value) {
        const node = new Node(value)
        if(this.isEmpty()) this.head = node
        else {
            node.next = this.head;
            this.head = node;
        }
        this.size++
    }

    print() {
        if(this.isEmpty()) {
            console.log("List is Empty")
        }
        else {
            let curr = this.head
            let listValue = ''
            while (curr) {
                listValue += `${curr.value} `
                curr = curr.next
            }
            console.log(listValue)
        }
    }
}

const list = new LinkedList()
list.print() // List is Empty

list.add(5)
list.add(10)
list.add("hi")
list.print() // 5 10 hi
list.shift(12)
list.print() // 12 5 10 hi 
console.log(list.getSize()) // 4