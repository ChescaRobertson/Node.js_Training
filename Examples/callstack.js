// Message 1
console.log('Starting Timeouts');

// set Timeout 1
setTimeout(() => {
  console.log('First callback');
}, 3000);

// set Timeout 2
setTimeout(() => {
  console.log('Second callback');
}, 0);

// Message 2
console.log('Finished Timeouts');

// main() added to callstack
// message 1 runs on the callstack and is removed
// set Timeout 1 added to callstack
// set Timeout 1 registered on Node APIs - waits for 3 seconds
// set Timeout 1 removed from the call stack
// set Timeout 2 added to call stack
// set Timeout 2 registered on Node APIs - doesn't have to wait
// set Timeout 2 removed from call stack
// set Timeout 2 gets added to callback queue - waits for call stack to be empty
// Event Loop checks if call stack is empty
// Message 2 runs on call stack and is removed
// main() is completed and removed from call stack
// Event Loop finds call stack is empty
// Event Loops runs callback() to add set Timeout 2 to the call stack
// After 3 seconds set Timeout 1 gets added to the callback queue
// Event Loops runs callback() to add set Timeout 1 to the call stack
// set Timeout 1 runs on the call stack and is removed
