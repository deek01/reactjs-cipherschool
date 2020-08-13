// Stack class 
class Stack { 

	// Array is used to implement stack 
	constructor() 
	{ 
		this.items = []; 
	} 
push(element) 
{ 
	
	this.items.push(element); 
} 
pop() 
{ 
	
	if (this.items.length == 0) 
		return "Underflow"; 
	return this.items.pop(); 
} 
printStack() 
{ 
	var str = ""; 
	for (var i = 0; i < this.items.length; i++) 
		str += this.items[i] + " "; 
	return str; 
} 
} 
var stack = new Stack();
console.log(stack.pop()); 
