function LinkedList() {
  let head = null;
  
  let Node = function(data) {
    this.data = data;
    this.next = null;
  }
  
  this.push = function(data) {
    let node = new Node(data)
    if(head === null) {
      head =node
    } else {
      let currentNode = head;
      
      while(currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = node
    }
    return head;
  }
  
  this.delete = function(data) {
    let currentNode = head
    let previousNode;
    if (currentNode.data === data) {
      head = currentNode.next
    } else {
        while(currentNode.data !== data) {
          previousNode = currentNode
          currentNode = currentNode.next
          if(!currentNode) return "Data Not found"
        }
        previousNode.next = currentNode.next
    }
    return head;
  }
  this.unShift = function() {
    let currentNode = head;
    head = currentNode.next;
    return head
  }
}

let node = new LinkedList()

console.log(node.push("hi")) //Node { data: 'hi', next: null }
console.log(node.push("hello")) //Node { data: 'hi', next: Node { data: 'hello', next: null } }
console.log(node.push(100)) 
/**
 * Node {
    data: 'hi',
    next: Node { data: 'hello', next: Node { data: 100, next: null } }
  }
*/
console.log(node.unShift()) //Node { data: 'hello', next: Node { data: 100, next: null } }
console.log(node.delete('100')) //Data Not found
console.log(node.delete(100)) //Node { data: 'hello', next: null }
