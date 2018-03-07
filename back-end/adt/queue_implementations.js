class CircularArrayQueue{
    constructor(size){
        this.dataStructure = new CircularArray(size);
        this.dataStructure.draw();
    }
    enqueue(element){
        if (this.dataStructure.getNumElements() < this.dataStructure.getSize()){
            let avail = (this.dataStructure.getHead() + this.dataStructure.getNumElements()) % this.dataStructure.getSize();
            this.dataStructure.setValue(avail, element);
            outputLabel.innerText = "Element inserted";
        }else{
            outputLabel.innerText = "Queue is full";
        }
        this.dataStructure.draw();
    }
    dequeue(){
        if (this.dataStructure.isEmpty()){
            outputLabel.innerText = "Queue is empty";
            return;
        }
        let element = this.dataStructure.getElement(this.dataStructure.getHead());
        this.dataStructure.setValue(this.dataStructure.getHead(), null);
        this.dataStructure.setHead((this.dataStructure.getHead() + 1) % this.dataStructure.getSize());
        this.dataStructure.draw();
    }
    peek(){
        if (this.dataStructure.isEmpty()) {
            outputLabel.innerText = "Queue is empty";
            return;
        }
        outputLabel.innerText = this.dataStructure.getElement(this.dataStructure.getHead());
        this.dataStructure.draw();
    }
}

class DoublyLinkedListQueue{
    constructor(){
        this.dataStructure = new DoublyLinkedList();
        this.dataStructure.draw();
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