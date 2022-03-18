const myMath={
    calcsum(a,b){
        return (a+b)
    },
    factorial(n){
        let result=1;
        for(let x=1; x<=n; x++){
            result=result*x;
            // tai
            // result *=x
        }
        return result
    }
        

}
//let a=myMath.calcsum(5,6);
//console.log(a)
module.exports = myMath;