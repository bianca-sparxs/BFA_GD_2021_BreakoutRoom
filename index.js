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

//b/c i'm lazy, {student -> link} dictionary as well as student array to keep shuffle func unchanged
var studentInfo = [
    {'name': "Lucy Baik", 'link': 'https://breakingout2021.show/Lucy-Baik', 
    'line':'To be continued'}, 
    {'name':"Natalie Bolton", 'link': 'https://breakingout2021.show/Natalie-Bolton', 
    'line':'Despite it all, we still create :’)'}, 
    {'name':"Gregory Bond", 'link': 'https://breakingout2021.show/Gregory-Bond', 
    'line':'Making unforgettable memories together'}, 
    {'name':"Juan Estela", 'link': 'https://breakingout2021.show/Juan-Estela', 
    'line':'From doubt to certainty (and sometimes back to doubt)'},
    {'name':"Kendall Gregory", 'link': 'https://breakingout2021.show/Kendall-Gregory',
     'line':'side by side we persevered '}, 
    {'name':"EK Hong", 'link': 'https://breakingout2021.show/Eun-Kyo-Hong', 
    'line':'finally here after late nights and countless cups of coffee'}, 
    {'name':"Lena Johnson", 'link': 'https://breakingout2021.show/Lena-Johnson', 
    'line':'Revealing beauty in the darkness'}, 
    {'name':"Emily Knobloch", 'link': 'https://breakingout2021.show/Emily-Knobloch', 
    'line':'Discovering what design can do'}, 
    {'name':"Eme Lawton", 'link': 'https://breakingout2021.show/Emerson-Lawton', 
    'line':'Through collective growing pains'}, 
    {'name':"Angela Lian", 'link': 'https://breakingout2021.show/Angela-Lian', 
    'line':'Learning my worth, this is my rebirth'}, 
    {'name':"Morgan Moscinski", 'link': 'https://breakingout2021.show/Morgan-Moscinski', 
    'line':'To gather, grow and generate'}, 
    {'name':"Shannon Neff", 'link': 'https://breakingout2021.show/Shannon-Neff', 
    'line':'Finding our way through ups and downs'}, 
    {'name':"Noelle No", 'link': 'https://breakingout2021.show/Noelle-No', 
    'line':'understanding myself in the most genuine way'}, 
    {'name':"Chinwe Oparaji", 'link': 'https://breakingout2021.show/Chinwe-Oparaji', 
    'line':'And ambition tried to overcome me'}, 
    {'name':"Ashley Smalley", 'link': 'https://breakingout2021.show/Ashley-Smalley', 
    'line':'Making incredible memories and art'}, 
    {'name':"Mariana Velasquez", 'link': 'https://breakingout2021.show/Mariana-Velasquez', 
    'line':'Innovating, growing, and designing together and apart'}, 
    {'name':"Anni Yu", 'link': 'https://breakingout2021.show/Anni-Qingyang-Yu', 
    'line':'Seeing our works shine with sweats and tears'}, 
    {'name':"Irina Zhikh", 'link': 'https://breakingout2021.show/Irina-Zhikh', 
    'line':'and in looking back I see nothing to regret and little to correct'},
    {'name':"Emily Bowen", 'link': 'https://breakingout2021.show/Emily-Bowen-graphic-design', 
    'line':'A semester of exploration of design, memory, and self '}, 
    {'name':"Angela Dong", 'link': 'https://breakingout2021.show/Angela-Dong', 
    'line':'A moment in time, a space in between, and more to come'}, 
    {'name':"Abby Fenn", 'link': 'https://breakingout2021.show/Abby-Fenn', 
    'line':'Relying on instinct and inspiration '}, 
    {'name':"Jaesuk Kim", 'link': 'https://breakingout2021.show/Jae-Suk-Kim', 
    'line':'Leaping my foot, On my own stage, Just to prove myself.'}, 
    {'name':"Steve Kim", 'link': 'https://breakingout2021.show/Steve-Kim', 
    'line':'As my very first step'}, 
    {'name':"Jay Li", 'link': 'https://breakingout2021.show/Jay-Li', 
    'line':'I devised a plan to see more sunrises than I’d like'}, 
    {'name':"Miao Liu", 'link': 'https://breakingout2021.show/Miao-Liu', 
    'line':'What is coming is even better than what is gone.'}, 
    {'name':"Lucia Pabon", 'link': 'https://breakingout2021.show/Lucia-Pabon', 
    'line':'Bringing different worlds together'}, 
    {'name':"Morgan Recker", 'link': 'https://breakingout2021.show/Morgan-Recker', 
    'line':'I look behind me and smile'}, 
    {'name':"Ivan Reyes", 'link': 'https://breakingout2021.show/Ivan-Reyes', 
    'line':''}, 
    {'name':"Eleanor Schiltz", 'link': 'https://breakingout2021.show/Eleanor-Schiltz', 
    'line':'I find company and growth in unexpected places'}, 
    {'name':"Rachel Wui", 'link': 'https://breakingout2021.show/Rachel-Wui', 
    'line':'unpredictability and excitement in the moment'}, 
    {'name':"Yi Yang", 'link': 'https://breakingout2021.show/Yi-Yang', 
    'line':'Working on in spite of the year,'}, 
    {'name':"Sharon Yu", 'link': 'https://breakingout2021.show/Shuyang-Yu', 
    'line':'and we can inspire the whole world.'}, 
    {'name':"Fei Ping Zhao", 'link': 'https://breakingout2021.show/Fei-Ping-Zhao', 
    'line':'Fastest moments, but most memorable times'}
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

function hasTouch() {
    return 'ontouchstart' in document.documentElement
           || navigator.maxTouchPoints > 0
           || navigator.msMaxTouchPoints > 0;
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
    const lines = document.getElementsByClassName('a-name');
    console.log(Array.from(icons))

    Array.from(icons).forEach(function (ele, i){
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
                <a href="${link}">
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

    Array.from(lines).forEach(function (e, i ){
        let student = studentInfo.find(s => s.name === students[i])
        let line = student.line
        let lname = students[i].split(" ").pop();
        if (lname === "Yu" | lname === "Yang" | lname === "Kim"){
            lname += students[i].substr(0,1)
        }

        e.innerHTML = `
        <div class="flex-line">
            <p>${line}</p>
            <img src="./assets/glyphs/${lname}.png"/>
        </div>`

    })

    if (hasTouch()) { // remove all the :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
        for (var si in document.styleSheets) {
        var styleSheet = document.styleSheets[si];
        if (!styleSheet.rules) continue;
    
        for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
            if (!styleSheet.rules[ri].selectorText) continue;
    
            if (styleSheet.rules[ri].selectorText.match(':hover')) {
            styleSheet.deleteRule(ri);
            }
        }
        }
    } catch (ex) {}
    }
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




