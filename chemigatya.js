    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    let group = ['H2', 'O2', 'Cl2', 'F2', 'W'];
    let a = getRandomInt(group.length);
    
//ガチャを回す     
    function gatya() {
        if (a == 0) {
            alert("H2");
            document.write('<img src="photo\\H2.png" alt="" width="500" height="500">')
            document.write('<button id="home" class="btn btn-primary" type="submit">ホームに戻る</button>')
            document.getElementById("home")
            .addEventListener("click", function () {
            location.replace("https://hu-hicoder.github.io/ChemiGatya/");
            }, false);

        }

        else if (a == 1) {
            alert("O2");
            document.write('<img src="photo\\O2.png" alt="" width="500" height="500">');
            document.write('<button id="home" class="btn btn-primary" type="submit">ホームに戻る</button>')
            document.getElementById("home")
            .addEventListener("click", function () {
            location.replace("https://hu-hicoder.github.io/ChemiGatya/");
            }, false);
        }

        else if (a == 2) {
            alert("Cl2");
            document.write('<img src="photo\\.png" alt="" width="500" height="500">');
            document.write('<button id="home" class="btn btn-primary" type="submit">ホームに戻る</button>')
            document.getElementById("home")
            .addEventListener("click", function () {
            location.replace("https://hu-hicoder.github.io/ChemiGatya/");
            }, false);
        }

        else if (a == 3){
            alert("F2");
            document.write('<img src="photo\\F2.png" alt="" width="500" height="500">');
            document.write('<button id="home" class="btn btn-primary" type="submit">ホームに戻る</button>')
            document.getElementById("home")
            .addEventListener("click", function () {
            location.replace("https://hu-hicoder.github.io/ChemiGatya/");
            }, false);
        }

        else if (a == 4) {
            alert("W");
            document.write('<img src="photo\\W.png" alt="" width="500" height="500">');
            document.write('<button id="home" class="btn btn-primary" type="submit">ホームに戻る</button>')
            document.getElementById("home")
            .addEventListener("click", function () {
            location.replace("https://hu-hicoder.github.io/ChemiGatya/");
            }, false);
        }
    }
    const el = document.getElementById("push");
    el.addEventListener("click", gatya, false);




