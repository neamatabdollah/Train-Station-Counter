let count = 0 

function increament() {
    count += 1 ;
    document.getElementById("count-el").textContent = count ;
}

function save() {
    let countStr = count + " - " ;
    document.getElementById("save-el").textContent += countStr ;
    document.getElementById("count-el").textContent = 0 ;
    count = 0 ;
}

