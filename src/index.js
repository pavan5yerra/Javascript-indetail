//recusrion think of call stack
const data = "Yerra Pavan"
function reverseString(data){
//base condition
    if(data==""){
        return ""
    }
    return reverseString(data.slice(1))+ data.charAt(0)
}
//console.log(reverseString(data))


//*****palindrome *****
const paldata = "racecar";
function isPalindrome(data){
//base condition 
  if(data.length==0 || data.length==1){
      return true
  }
//alogorithm  or small thing to do
 if(data.charAt(0)==data.charAt(data.length-1)){
        return  isPalindrome(data.slice(1,data.length-1))
    }   

    return false
}
//console.log(isPalindrome(paldata))


//*****converting  decimal to binary*****


function convertToBinary(decimal,binary=""){
    if(decimal==0){
        return binary
    }
    binary=(decimal%2).toString()+binary
  return convertToBinary(Math.floor(decimal/2),binary)
   
}
// console.log(convertToBinary(222))
// console.log(convertToBinary(2))


//**** sum of naturals ****/

function sumOfNaturals(inputNumber){
    if(inputNumber<=1){
        return inputNumber
    }

    return  inputNumber+sumOfNaturals(inputNumber-1)
}
// console.log(sumOfNaturals(10))

//****  Binary Search ****/

let array = [1,2,3,4,5,6,7,8,10];

function binarySearch(arr,left,right,element){
    if(left>right){
        return -1
    }

    let mid = Math.floor((left+right)/2)

    if(arr[mid]==element){
        return true
    }

    if(arr[mid]>element){
        return  binarySearch(arr,left,mid-1,element) 
    }

    return binarySearch(arr,mid+1,right,element)    
    
}

//console.log(binarySearch(array,0,array.length-1,11))

//Fibnocci

function fibnocci(number,memo = {}){
    let n1;
    if(number==1 || number==0){
        return number
    }

    //memoization
        if(memo[number.toString()]){
             n1=memo[number.toString()]
        }
        else{
            n1=fibnocci(number-1,memo);
            memo[`${number}`]=n1        
         }
         return n1+fibnocci(number-2,memo)
   
}
 //console.log(fibnocci(9))


 ///*****Merge sort */

array = [100,1,5,2,64,-1,6,10,8,7];

 function mergeSort(arr){
     
     //arraylength
    let arrLength = arr.length;
    //base condition
    if(arrLength<2){
        return
    }

    //finding mid
    let mid = Math.floor((arrLength)/2)
    
    //creating arrays
    let leftarr = arr.slice(0,mid)
    let rightarr = arr.slice(mid,arrLength)

    //recursion
     mergeSort(leftarr);
     mergeSort(rightarr);
     arr = merge(leftarr,rightarr,arr)
     console.log(arr)
 }

function merge(left,right,arr){
    //temporary variable
     let [temp,i,j,k]=[arr,0,0,0];

     //length of array
     let leftlength = left.length;
     let rightlength  = right.length;

    // condtions for sorting
     while(i<leftlength && j<rightlength ){
         if(left[i]>=right[j]){
             temp[k]=right[j]
             j++;
         }
         else{
            temp[k]=left[i]
             i++;
         }
         k++
     }

     // condtions for leftout array elements
     while(i<leftlength){
         temp[k]=left[i]
             i++;
             k++
     }
     while(j<rightlength){
         temp[k]=right[j]
             j++;
             k++
     }
    
    return temp
}

//mergeSort(array)



/* ********Linked List reversal***************/

function Node(val) {
    this.val=val;
    this.next=null;
    this.setNext = function(node){
        this.next=node;
    }
    this.getNext = function(){
        return this.next;
    }
}

//creating Nodes
const node1 = new Node(3);
const node2 = new Node(6);
const node3 = new Node(2);
const node4 = new Node(11);
const node5 = new Node(9);

//linking the node as linked list
node1.setNext(node2);
node2.setNext(node3);
node3.setNext(node4);
node4.setNext(node5);


function printLinkedList(node){
    let tmp = node
    while(tmp.next!=null){
        console.log(tmp.val)
        tmp = tmp.getNext()
    }
    if(tmp.next==null){
        console.log(tmp.val)
    }
}

//reversal of linkedlist
function reverseLinkedList(node) {
    if(node.next==null || node==null){
        return node
    }
    const temp = reverseLinkedList(node.next)
    node.next.next=node;
    node.next=null;
    return temp;
} 

//printLinkedList(node1)
const reverselink = reverseLinkedList(node1)
//printLinkedList(reverselink)


//**************Merger Two sorted linked linkedlist*******************
const node11 = new Node(1);
const node12 = new Node(8);
const node13 = new Node(22);
const node14 = new Node(40);

const node15 = new Node(4);
const node16 = new Node(11);
const node17 = new Node(16);
const node18 = new Node(20);


//linking the node as  first linked list
node11.setNext(node12);
node12.setNext(node13);
node13.setNext(node14);

//linking the node as  second linked list
node15.setNext(node16);
node16.setNext(node17);
node17.setNext(node18);



//merging two linked list
// printLinkedList(node11)
// printLinkedList(node15)
function mergeSortedLinkedList (A,B) {
    if(A==null) {
        console.log(B)
        return B
    }
    if(B==null) {
        console.log(A)
        return A
    }
    if(A.val<=B.val){
       A.next= mergeSortedLinkedList(A.next,B)
       console.log(A)
        return A;
    }
    else{
        B.next=mergeSortedLinkedList(A,B.next);
        console.log(B) 
        return B;
    }

}
// const mergenode= mergeSortedLinkedList(node11,node15)
// printLinkedList(mergenode)



//double linked list 
function DoubleLinkedList(data){
    this.left=null;
    this.data=data;
    this.right=null;
    this.setLeft = function(left){
        this.left=left;
    }
    this.setRight = function(right){
        this.right=right;
    }
}
const dnode100 = new DoubleLinkedList(100)
const dnode80 = new DoubleLinkedList(80)
const dnode50 = new DoubleLinkedList(50)
const dnode30 = new DoubleLinkedList(30)
const dnode60 = new DoubleLinkedList(60)
const dnode90 = new DoubleLinkedList(90)
const dnode85 = new DoubleLinkedList(85)
const dnode95 = new DoubleLinkedList(95)

dnode100.setLeft(null);
dnode100.setRight(dnode80);

dnode80.setLeft(dnode100);
dnode80.setRight(dnode50);

dnode50.setLeft(dnode80);
dnode50.setRight(dnode30)

dnode30.setLeft(dnode50);
dnode30.setRight(dnode60)

dnode60.setLeft(dnode30);
dnode60.setRight(dnode90)

dnode90.setLeft(dnode60);
dnode90.setRight(dnode85)

dnode85.setLeft(dnode90);
dnode85.setRight(dnode95);

dnode95.setLeft(dnode85);
dnode95.setRight(null);


function printDoubleLinkedList(node){
             //printing left to right
            if(node.right==null){
                console.log(node.data)
                return 
             }
            console.log(node.data)
            printDoubleLinkedList(node.right);

            }

printDoubleLinkedList(dnode100);