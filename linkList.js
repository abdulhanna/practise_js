//CREATION OF LINKLIST

class List{
    constructor(data){
        this.head = {
            value:data,
            next:null
        },
        this.tail = this.head
        this.size = 1
    }
    appendNode(node){
        let newNode = {
            value:node,
            next :null
        }
        this.tail.next  = newNode;
        this.tail = newNode
        this.size += 1
    }
    traverseNode(){
        let counter = 0
        let currentNode = this.head
        while(counter<this.size){
            console.log(currentNode)
            currentNode = currentNode.next
            counter++
        }
    }
}
const list = new List(100)
list.appendNode(200)
list.appendNode(300)
list.appendNode(400)
console.log(list.head,'list')   