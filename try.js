function countPositivesSumNegatives(input) {
   let result= input && input.length ? [input.filter(i => i >0).length , input.filter(i => i <0).reduce((a,b)=>a+b, 0)]:[]
   console.log(result)
   return result;
  }
countPositivesSumNegatives([1,4,6,3,-7,-3,-56,1,2,-20]);

 
function capitalize(par){
   let sentence = par && par.split(' ') 
   let arr= []
   for(let i in sentence){
      arr.push(sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1))
   }
   let result = arr.join(' ')
   console.log(result)
   return result;
   
}
capitalize('Good Everning my team')

getCount('hello there are you going to help me this father') 