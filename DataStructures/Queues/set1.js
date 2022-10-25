//First in First out
//With Array

//1st way
var q = [];
q.push("First");
q.push("second");
q.push("thirfd");

q.shift();
//Removing from the  first is reindexing all rest of the elemnt

//2nd way
q = [];

q.unshift("First");
q.unshift("Second");
q.unshift("Third");

q.pop();
