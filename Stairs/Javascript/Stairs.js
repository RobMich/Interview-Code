console.log(ClimbStairs(1)); // 1 : [1]
console.log(ClimbStairs(2)); // 2 : [1,1], [2]
console.log(ClimbStairs(3)); // 3 : [1,1,1], [1,2], [2,1]
console.log(ClimbStairs(4)); // 5 : [1,1,1,1], [1,1,2], [1,2,1], [2,1,1], [2,2]
console.log(ClimbStairs(5)); // 8 : [1,1,1,1,1], [2,1,1,1], [1,2,1,1], [1,1,2,1], [1,1,1,2], [2,2,1], [2,1,2], [1,2,2]
console.log(ClimbStairs(6)); // Ahh!  Fibonacci aequence FIB(n) = Fib(n-1) + Fib(n-2)
console.log(ClimbStairs(7));
console.log(ClimbStairs(8));
console.log(ClimbStairs(9));
console.log(ClimbStairs(10));


function ClimbStairs(numStairs) {
    if (numStairs === 0 || numStairs === 1) return 1;

    // calculate a fibonacci sequence
    let stair1 = 1;
    let next = 2;
    for (i=3; i<=numStairs; i++) {
        let fib = stair1 + next;
        stair1 = next;
        next = fib;
    }

    return next;
}