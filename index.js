//urgh i should use jquery but i don wanna D:
const details = document.getElementById('details');
var students = [
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
    "Eleanor Schiltz", 
    "Rachel Wui", 
    "Yi Yang", 
    "Sharon Yu", 
    "Fei Ping Zhao"
]

//OTHER LINKS:
//social media 
//bfa insta
//bfa thesis show

// console.log(icons)


function showElement(e) {
    let id = e.target.id
    appendNameDetails(id - 1)
    details.style.display = "block"
    
}

function appendNameDetails(i) {
    details.innerHTML = `<p>${students[i]}</p>`
}

function hideElement() {
    details.style.display = "none"
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

function bido() { //start in igbo
    students = shuffle(students)
    const icons = document.getElementsByClassName('icon');
    console.log(Array.from(icons))

    Array.from(icons).forEach(function (ele, i){
        if (i == 16){
            ele.style.gridArea = "center"
            ele.style.width = "100%"
        } else {
            // const someFun = passIndex(i);
            let lname = students[i].split(" ").pop();
            if (lname === "Yu" | lname === "Yang" | lname === "Kim"){
                lname += students[i].substr(0,1)
            }
            console.log(lname)
    
            ele.style.gridArea = "c" + (i + 1).toString()
            ele.innerHTML = `
            <div class="img-contain">
                <img src="./glyphs/${lname}.png"/>
            </div>`
            ele.addEventListener("mouseenter", showElement)
            ele.addEventListener("mouseleave", hideElement)
        }
    })
}






$('.header').click(function(){
    $('.statement').toggleClass('open')
})

$( window ).on("load",  bido );







// for (const icon of icons) {
//     const draggable = new Draggable.Draggable(icon, {
//         draggable: 'div'
//     });

//     draggable.on('drag:start', () => console.log('drag:start'));
//     draggable.on('mirror:move', (evt) => move(evt));
//     draggable.on('drag:stop', (evt) => place(evt));

// }




