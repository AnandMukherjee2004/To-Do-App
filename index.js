let btn = document.querySelector('button');
let listItems = document.querySelector("li")
let inp = document.querySelector("input")

btn.addEventListener("click", function(){
    // console.log(inp.value);
    if(inp.value == ''){
        alert("you need to enter a task to add")
    }
    else{
        let task = document.createElement("li");
        task.innerText = inp.value;
    
        let cross = document.createElement("button");
        cross.classList.add("delete");
        cross.innerText = "x"
    
        task.appendChild(cross);
        ul.appendChild(task);
    }

    inp.value = "";

})

let ul = document.querySelector("ul")

ul.addEventListener("click", function(event){

    let elem = event.target.parentElement;
    console.log(event.target.nodeName)
    console.log(event.target.parentElement)
    
    if(event.target.nodeName == "BUTTON"){

        elem.remove();
    }
})



// let deletebtns = document.querySelectorAll(".delete")

// for(btn of deletebtns){
//     btn.addEventListener("click", function(){
//         let par = this.parentElement;
//         par.remove();
//     })
// }