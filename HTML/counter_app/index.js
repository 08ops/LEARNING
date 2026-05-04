let count = document.getElementById('count')
let saveEl = document.getElementById('save-el')

console.log(count)


let counter = 0
 
 
 function increment() {
    counter += 1
    count.innerHTML = counter
 }
 
 function decrement() {
    counter -= 1
    count.innerHTML = counter
    }
    
 function save() {

   let countStr = counter + " - "
   saveEl.innerHTML += countStr
   console.log(counter)
 }

 function reset() {
   counter = 0
   count.innerHTML = counter
 }



