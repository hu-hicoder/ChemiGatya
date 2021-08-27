    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    let group = ['H2', 'O2', 'Cl2', 'F2', 'W','He'];
    let a = getRandomInt(group.length);

//ガチャを回す     
    function gatya() {
        let h,o,cl,f,w,he
        if (a == 0) {
            alert("H2");
            localStorage.setItem('h','true')
            document.write('<img src="photo\\H2.png" width="500" height="500" border="10" class="picture">')
            document.write('<button id="home" class="btn btn-primary" type="submit">ホームに戻る</button>')
            document.getElementById("home")
            .addEventListener("click", function () {
            location.replace("https://hu-hicoder.github.io/ChemiGatya/");
            }, false);
        }

        else if (a == 1) {
            alert("O2");
            localStorage.setItem('o','true')
            document.write('<img src="photo\\O2.png" alt="" width="500" height="500" border="10" class="picture">');
            document.write('<button id="home" class="btn btn-primary" type="submit">ホームに戻る</button>')
            document.getElementById("home")
            .addEventListener("click", function () {
            location.replace("https://hu-hicoder.github.io/ChemiGatya/");
            }, false);           
        }

        else if (a == 2) {
            alert("Cl2");
            localStorage.setItem('cl','true')
            document.write('<img src="photo\\Cl2.png" alt="" width="500" height="500" border="10" class="picture">');
            document.write('<button id="home" class="btn btn-primary" type="submit">ホームに戻る</button>')
            document.getElementById("home")
            .addEventListener("click", function () {
            location.replace("https://hu-hicoder.github.io/ChemiGatya/");
            }, false);
        }

        else if (a == 4) {
            alert("W");
            localStorage.setItem('w','true')
            localStorage.getItem('w')
            document.write('<img src="photo\\W.png" alt="" width="500" height="500" border="10" class="picture">');
            document.write('<button id="home" class="btn btn-primary" type="submit">ホームに戻る</button>')
            document.getElementById("home")
            .addEventListener("click", function () {
            location.replace("https://hu-hicoder.github.io/ChemiGatya/");            }, false);
        }

        else if (a == 3){
            alert("F2");
            localStorage.setItem('f','true')

            document.write('<img src="photo\\F2.png" alt="" width="500" height="500" border="10" class="picture">');
            document.write('<button id="home" class="btn btn-primary" type="submit">ホームに戻る</button>')
            document.getElementById("home")
            .addEventListener("click", function () {
            location.replace("https://hu-hicoder.github.io/ChemiGatya/");

            }, false);
        }
        else if(a == 5){
            alert("He");
            localStorage.setItem('he','true')
            document.write('<img src="photo\\He.png" alt="" width="500" height="500" border="10" class="picture">');
            document.write('<button id="home" class="btn btn-primary" type="submit">ホームに戻る</button>')
            document.getElementById("home")
            .addEventListener("click", function () {
            location.replace("https://hu-hicoder.github.io/ChemiGatya/");
            }, false);
        }

    }
    
    const el = document.getElementById("push");
    el.addEventListener("click", gatya, false);
    