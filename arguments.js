function func1(a, b, c) {
    console.log(arguments.length);
}
// When called with five arguments
func1(1, 2, 3, 4, 5); // Logs 5
// When called with one argument
func1(1); // Logs 1

function argumentsLength(...args) {
    return args.length;
}
// Usage
console.log(argumentsLength(1, 2, 3)); 
