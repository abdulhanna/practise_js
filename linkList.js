//CREATION OF LINKLIST

class List{
    constructor(data){n
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
    removeNode(index){
        let counter = 1;
        let lead = this.head;
        if(index === 1){
            this.head = this.head.next;
        }else{
            while(counter < index -1){
                lead = lead.next;
                counter++
            }
            let newNode = lead.next.next
            lead.next = newNode
            console.log(lead)
        }
        
    }
}
const list = new List(100)
list.appendNode(200)
list.appendNode(300)
list.appendNode(400)
console.log(list.head,'list')   