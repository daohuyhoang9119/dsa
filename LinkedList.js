//linked list

class Node{
    constructor(data,next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    //insert first node

    inserFirstNode(data){
        //create a new node
      let node = new Node(data);
      
      //store current node if List have head node
      let current;

      //if list is empty
      if(this.head === null){
          this.head = node;

      }else {
          current = this.head;

          while(current.next){
              current = current.next;
          }

          current.next = node;
      }
      this.size++;
    }

    //inser at index
    insertAtIndex(data,index){
        
        if(index < 0 || index > this.size){
            console.log('error index');
        }else{
            let node = new Node(data);
            let cur, prev;
            cur = this.head;

            if(index === 0){
                node.next = this.head;
                this.head = node;

            }else{
                cur = this.head;
                let i = 0;

                while(i < index){
                    i++;
                    prev = cur;
                    cur = cur.next;
                }
                node.next = cur;
                prev.next = node;
            }
            this.size ++;


        }

        
        
    }

    //inser last node

    //inset at index

    //get at index


    //remove at index

    //clear list
    clearList(){
        this.size === 0;
    }


    //print list
    printList(){
        let cur = this.head;
        let str = '';
        while(cur){
            str += cur.data + ' ';
            cur = cur.next;
        }
        console.log(str);
    }

}

const ll = new LinkedList();

ll.inserFirstNode(100);
ll.inserFirstNode(19);
ll.inserFirstNode(20);
ll.printList();
ll.insertAtIndex(1,0);
ll.printList();
ll.insertAtIndex(2,2);
ll.printList();