const CELLS = 34
const icons = document.getElementsByClassName('icon');
const details = document.getElementById('details');
const students = [
    "Lucy Baik", 
    "Natalie Bolton", 
    "Gregory Bond", 
    "Juan Estela",
    "Kendall Gregory", 
    "EK Hong", 
    "Lena Johnson", 
    "Emily Knobloch", 
    "Eme Lawton", 
    "Angela Lian", 
    "Morgan Moscinski", 
    "Catherine Neff", 
    "Noelle No", 
    "Chinwe Oparaji", 
    "Ashley Smalley", 
    "Mariana Velasquez", 
    "Anni Yu", 
    "Irina Zhikh",
    "Emily Bowen", 
    "Angela Dong", 
    "Abby Fenn", 
    "Jaesuk Kim", 
    "Steve Kim", 
    "Jay Li", 
    "Miao Liu", 
    "Lucia Pabon", 
    "Morgan Recker", 
    "Ivan Reyes", 
    "Eleanor Schitz", 
    "Rachel Wui", 
    "Yi Yang", 
    "Sharon Yu", 
    "Fei Ping Zhao"
]
//OTHER LINKS:
//social media 
//bfa insta
//bfa thesis show



console.log(icons)

// const dragStart = e => {
//     console.log(e.target);
//     e.dataTransfer.setData('text/plain', e.target.id)
//     setTimeout(() => {
//         e.target.classList.add('hide');
//     }, 0);

// }
// function sizeIcons(){
//     let docHieg
// }

// const move = e => {
//     console.log(e.sensorEvent.clientX)
//     // e.clientX = e.sensorEvent.clientX;
// }

// const place = e => {
//     console.log(e)
//     // e.orignalSource.clientLeft = e.cursorOffsetX;
// }
function showElement(e) {
    let id = e.target.id
    appendNameDetails(id - 1)
    details.style.display = "block"

    
}

function hideElement() {
    details.style.display = "none"
}

function appendNameDetails(i) {
    details.innerHTML = `<p>${students[i]}</p>`
}


// taken from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }


Array.from(icons).forEach(function (ele, i){
    if (i == 16){
        ele.style.gridArea = "center"
        ele.style.width = "100%"
    } else {
        // const someFun = passIndex(i);
        ele.style.gridArea = "c" + (i + 1).toString()
        ele.addEventListener("mouseover", showElement)
        ele.addEventListener("mouseout", hideElement)
    }

    


},)





// for (const icon of icons) {
//     const draggable = new Draggable.Draggable(icon, {
//         draggable: 'div'
//     });

//     draggable.on('drag:start', () => console.log('drag:start'));
//     draggable.on('mirror:move', (evt) => move(evt));
//     draggable.on('drag:stop', (evt) => place(evt));

// }




