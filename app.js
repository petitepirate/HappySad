function toggleAllTodos() {
    const todos = document.querySelectorAll('li')

    for (let li of todos) {
        li.classList.toggle('completed');
    }
}


// select the h1 
const h1 = document.querySelector('h1');
//set an interval that toggles from big to small every second
setInterval(function () {
    //inside function, create if/else statement that looks at what
    //the class contains and change the inner text to happy/sad     
    if (h1.classList.contains('big')) {
        h1.innerText = "SAD";
    } else {
        h1.innerText = "HAPPY"
    }
    h1.classList.toggle('big');
    h1.classList.toggle('small');
}, 1000)
