// Immediately Invoked Function Expressions (IIFE)


(function chai() {
    //named IIFE
    console.log(`DB CONNECTED`);
})();
/* (function Defination)(function running) use `IIFE` to remove polution of globle scope's variables or function. */ 

((name) => {
    console.log(`db connected 2 ${name}`);
} )('agraj');