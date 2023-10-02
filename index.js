function LinkedList() {
    let head = null;
    
    let Node = function(data) {
      this.data = data;
      this.next = null;
    }
    
    this.add = function(data) {
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
          }
          
          previousNode.next = currentNode.next
      }
      return head;
    }
  }
  
  let node = new LinkedList()
  
  console.log(node.add("hi"))
  console.log(node.add("hello"))
  console.log(node.add(100))
  console.log(node.delete('hello'))
  