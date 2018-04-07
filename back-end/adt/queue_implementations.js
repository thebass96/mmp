class CircularArrayQueue{
    constructor(size){
        this.dataStructure = new CircularArray(size);
    }
    enqueue(element){
        if (this.dataStructure.getNumElements() < this.dataStructure.getSize()){
            this.dataStructure.setTail((this.dataStructure.getHead() + this.dataStructure.getNumElements()) % this.dataStructure.getSize());
            let avail = (this.dataStructure.getHead() + this.dataStructure.getNumElements()) % this.dataStructure.getSize();
            //console.log(avail);
            //this.adt.setElementValue(avail, element);
            this.dataStructure.setElementValue(avail, element);
            this.dataStructure.numElements += 1;
            this.dataStructure.setTail((this.dataStructure.getHead() + this.dataStructure.getNumElements()) % this.dataStructure.getSize());

            return {value: element, index: avail};
        }
        return null;
    }
    dequeue(){
        if (this.dataStructure.isEmpty()){
            return null;
        }

        let element = this.dataStructure.getElementValue(this.dataStructure.getHead());
        this.dataStructure.setElementValue(this.dataStructure.getHead(), null);

        this.dataStructure.setHead((this.dataStructure.getHead()+1)%this.dataStructure.getSize());
        this.dataStructure.numElements--;

        return {value: element, index: (this.dataStructure.getHead()-1)%this.dataStructure.getSize()};
    }
    peek(){
        if (this.dataStructure.isEmpty()) {
            return null;
        }

        return this.dataStructure.getElementValue(this.dataStructure.getHead());

    }
}

class DoublyLinkedListQueue{
    constructor(){
        this.dataStructure = new DoublyLinkedList();
    }
    push(element){
        this.dataStructure.addLast(new DoublyLinkedListNode(element, null));
    }
    pop(){
        if (this.dataStructure.isEmpty()) {
            outputLabel.innerText = "Stack is empty";
            return;
        }
        this.dataStructure.removeFirst();
        this.dataStructure.draw();
    }
    peek(){
        outputLabel.innerText = this.dataStructure.getFirst();
    }
}