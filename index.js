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
    "Shannon Neff", 
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

//b/c i'm lazy, student -> link dictionary as well as student array to keep shuffle func unchanged
var studentInfo = [
    {'name': "Lucy Baik", 'link': 'https://breakingout2021.show/Lucy-Baik'}, 
    {'name':"Natalie Bolton", 'link': 'https://breakingout2021.show/Natalie-Bolton'}, 
    {'name':"Gregory Bond", 'link': 'https://breakingout2021.show/Gregory-Bond'}, 
    {'name':"Juan Estela", 'link': 'https://breakingout2021.show/Juan-Estela'},
    {'name':"Kendall Gregory", 'link': 'https://breakingout2021.show/Kendall-Gregory'}, 
    {'name':"EK Hong", 'link': 'https://breakingout2021.show/Eun-Kyo-Hong'}, 
    {'name':"Lena Johnson", 'link': 'https://breakingout2021.show/Lena-Johnson'}, 
    {'name':"Emily Knobloch", 'link': 'https://breakingout2021.show/Emily-Knobloch'}, 
    {'name':"Eme Lawton", 'link': 'https://breakingout2021.show/Emerson-Lawton'}, 
    {'name':"Angela Lian", 'link': 'https://breakingout2021.show/Angela-Lian'}, 
    {'name':"Morgan Moscinski", 'link': 'https://breakingout2021.show/Morgan-Moscinski'}, 
    {'name':"Shannon Neff", 'link': 'https://breakingout2021.show/Shannon-Neff'}, 
    {'name':"Noelle No", 'link': 'https://breakingout2021.show/Noelle-No'}, 
    {'name':"Chinwe Oparaji", 'link': 'https://breakingout2021.show/Chinwe-Oparaji'}, 
    {'name':"Ashley Smalley", 'link': 'https://breakingout2021.show/Ashley-Smalley'}, 
    {'name':"Mariana Velasquez", 'link': 'https://breakingout2021.show/Mariana-Velasquez'}, 
    {'name':"Anni Yu", 'link': 'https://breakingout2021.show/Anni-Qingyang-Yu'}, 
    {'name':"Irina Zhikh", 'link': 'https://breakingout2021.show/Irina-Zhikh'},
    {'name':"Emily Bowen", 'link': 'https://breakingout2021.show/Emily-Bowen-graphic-design'}, 
    {'name':"Angela Dong", 'link': 'https://breakingout2021.show/Angela-Dong'}, 
    {'name':"Abby Fenn", 'link': 'https://breakingout2021.show/Abby-Fenn'}, 
    {'name':"Jaesuk Kim", 'link': 'https://breakingout2021.show/Jae-Suk-Kim'}, 
    {'name':"Steve Kim", 'link': 'https://breakingout2021.show/Steve-Kim'}, 
    {'name':"Jay Li", 'link': 'https://breakingout2021.show/Jay-Li'}, 
    {'name':"Miao Liu", 'link': 'https://breakingout2021.show/Miao-Liu'}, 
    {'name':"Lucia Pabon", 'link': 'https://breakingout2021.show/Lucia-Pabon'}, 
    {'name':"Morgan Recker", 'link': 'https://breakingout2021.show/Morgan-Recker'}, 
    {'name':"Ivan Reyes", 'link': 'https://breakingout2021.show/Ivan-Reyes'}, 
    {'name':"Eleanor Schiltz", 'link': 'https://breakingout2021.show/Eleanor-Schiltz'}, 
    {'name':"Rachel Wui", 'link': 'https://breakingout2021.show/Rachel-Wui'}, 
    {'name':"Yi Yang", 'link': 'https://breakingout2021.show/Yi-Yang'}, 
    {'name':"Sharon Yu", 'link': 'https://breakingout2021.show/Shuyang-Yu'}, 
    {'name':"Fei Ping Zhao", 'link': 'https://breakingout2021.show/Fei-Ping-Zhao'}
]
console.log(students.length)
//OTHER LINKS:
//social media 
//bfa insta
//bfa thesis show

// console.log(icons)


function showElement(e) {
    let id = e.target.id
    appendNameDetails(id - 1)
    details.style.display = "inline-block"
    
}

function appendNameDetails(i) {
    details.innerHTML = `
    <div class="name-contain">    
        <p>${students[i]}</p>
    </div>
    `
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
        // if (i == 16){
        //     ele.style.gridArea = "center"
        //     ele.style.width = "100%"
        // } else {
            // const someFun = passIndex(i);
            let student = studentInfo.find(s => s.name === students[i])
            let link = student.link
            let lname = students[i].split(" ").pop();
            if (lname === "Yu" | lname === "Yang" | lname === "Kim"){
                lname += students[i].substr(0,1)
            }
            console.log(lname)

    
            ele.style.gridArea = "c" + (i + 1).toString()
            ele.innerHTML = `
            <div class="img-contain">
                <a target="_blank" href="${link}">
                    <img src="./assets/glyphs/${lname}.png"/>
                </a>
            </div>`
            ele.addEventListener("mouseenter", showElement)
            ele.addEventListener("mouseleave", hideElement)
        // }
    })


    students.forEach(function (e, i) {
        $('#names').append(`<p class="abt-name">${e}</p>`)
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




