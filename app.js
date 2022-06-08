function Fibonacci(){
    this.looping = function(n){
        var a = 0, b = 1, f = 1;
        for(var i = 2; i <= n; i++) {
            f = a + b; // f = 0 + 1 / f=1+1 / f
            a = b;  // a = 1 / a=1 /
            b = f;  // b = 1 / b=2 /
        }
        return f;  // f = 1 /f=2
    }
    this.recursive = function(n) {
        if(n <= 2) {
            return i;
        } else {
            return this.recursive(n - 1) + this.recursive(n - 2);
        }
    }
}

/*

recursive(4) + recursive(3)
(recursive(3) + recursive(2)) + (recursive(2) + recursive(1))
((recursive(2) + recursive(1) + 1) + (1 + 1))
((1 + 1) + 1) + (1 + 1)
= 5 

*/