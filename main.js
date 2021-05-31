var podaci = [
    {
        name: "Žuta Metalika",
        age: 20,
        instrument: "Drums",
        image: "images/metalika.png"
    },
    {
        name: "Amazonka",
        age: 22,
        instrument: "Violin",
        image: "images/amazonka.png"
    },
    {
        name: "Brokula",
        age: 27,
        instrument: "Sax",
        image: "images/brokula.jpg"
    },
    {
        name: "Džindžerka",
        age: 20,
        instrument: "Guitar",
        image: "images/dzindzerka.png"
    },
    {
        name: "Grk iz Soluna",
        age: 28,
        instrument: "Bass guitar",
        image: "images/grk.jpg"
    },
    {
        name: "Gušterača",
        age: 33,
        instrument: "Rhythm Guitar",
        image: "images/gusteraca.jpg"
    },
    {
        name: "Lepi Mića",
        age: 38,
        instrument: "Lead Singer",
        image: "images/lepi-mica.png"
    },
    {
        name: "Majami đevojka",
        age: 25,
        instrument: "Rhythm Guitar",
        image: "images/majamica.jpg"
    },
    {
        name: "Panter",
        age: 40,
        instrument: "Drums",
        image: "images/panter.jpg"
    },
    {
        name: "Poglavarka",
        age: 50,
        instrument: "dirigent",
        image: "images/poglavarka.png"
    },
    {
        name: "Prosvetljena Ruža",
        age: 30,
        instrument: "Sitar",
        image: "images/prosvetljena.jpg"
    },
    {
        name: "Sanjiva Violeta",
        age: 22,
        instrument: "Harp",
        image: "images/sanjiva.jpg"
    },
    {
        name: "Tamna Dragica",
        age: 45,
        instrument: "Lead Guitar",
        image: "images/tamna-dragica.png"
    },
    {
        name: "Tršava Una",
        age: 19,
        instrument: "Keyboards",
        image: "images/trsava.png"
    },
    {
        name: "Urokljiva Mara",
        age: 18,
        instrument: "Synth",
        image: "images/urokljiva.jpg"
    }

];

function generateLists(a) {
    var sceneContainer = document.querySelector(".scene-container")
    var backstageContainer = document.querySelector(".backstage-container")



    for (var i = 0; i < a.length; i++) {
        var ul = document.createElement("ul")
        for (var j = 0; j < Object.keys(a[i]).length; j++) {
            var li = document.createElement("li");
            if (j === 0) li.textContent = a[i].name
            if (j === 1) li.textContent = Object.keys(a[i])[j] + ": " + a[i].age
            if (j === 2) li.textContent = Object.keys(a[i])[j] + ": " + a[i].instrument
            if (j === 3) li.innerHTML = `<img src="${a[i].image}"/>`



            ul.appendChild(li)
        }
        if (i < 11) sceneContainer.appendChild(ul);
        else backstageContainer.appendChild(ul)

    }



    function shuffle(items) {
        var cached = items.slice(0), temp, i = cached.length, rand;
        while (--i) {
            rand = Math.floor(i * Math.random());
            temp = cached[rand];
            cached[rand] = cached[i];
            cached[i] = temp;
        }
        return cached;
    }
    function shuffleNodes() {
        var nodes = sceneContainer.children, i = 0;
        nodes = Array.prototype.slice.call(nodes);
        nodes = shuffle(nodes);
        while (i < nodes.length) {
            sceneContainer.appendChild(nodes[i]);
            ++i;
        }
    }
    function shuffleNodes1() {
        var nodes = backstageContainer.children, i = 0;
        nodes = Array.prototype.slice.call(nodes);
        nodes = shuffle(nodes);
        while (i < nodes.length) {
            backstageContainer.appendChild(nodes[i]);
            ++i;
        }
    }





    shuffleNodes()
    shuffleNodes1()




}


generateLists(podaci)


function changePlace() {
    var temp;
    var a = document.querySelector(".scene-container").children[Math.floor(Math.random() * 11)];

    var b = document.querySelector(".backstage-container").children[Math.floor(Math.random() * 4)];

    temp = a.innerHTML;
    a.innerHTML = b.innerHTML;
    b.innerHTML = temp
    document.querySelector(".rezultat").innerHTML = `Na binu je umesto ${b.firstChild.textContent} izašao ${a.firstChild.textContent}`


}
setInterval(changePlace, 3000)

