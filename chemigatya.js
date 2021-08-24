    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    let group = ['H2', 'O2', 'Cl2', 'F2', 'W'];
    let a = getRandomInt(group.length);

//ガチャを回す     
    function gatya() {
        let h,o,cl,f,w
        if (a == 0) {
            alert("H2");
            localStorage.setItem('h','true')
            localStorage.getItem('h')
            console.log(h)
            document.write('<img src="photo\\H2.png" width="500" height="500" border="10">')
            document.write('<button id="home" class="btn btn-primary" type="submit">ホームに戻る</button>')
            document.getElementById("home")
            .addEventListener("click", function () {
            location.replace("https://hu-hicoder.github.io/ChemiGatya/");
            }, false);
        }

        else if (a == 1) {
            alert("O2");
            localStorage.setItem('o','true')
            localStorage.getItem('o')
            console.log(o);
            document.write('<img src="photo\\O2.png" alt="" width="500" height="500" border="10">');
            document.write('<button id="home" class="btn btn-primary" type="submit">ホームに戻る</button>')
            document.getElementById("home")
            .addEventListener("click", function () {
            location.replace("https://hu-hicoder.github.io/ChemiGatya/");
            }, false);           
        }

        else if (a == 2) {
            alert("Cl2");
            localStorage.setItem('cl','true')
            localStorage.getItem('cl')
            console.log(cl);
            document.write('<img src="photo\\Cl2.png" alt="" width="500" height="500" border="10">');
            document.write('<button id="home" class="btn btn-primary" type="submit">ホームに戻る</button>')
            document.getElementById("home")
            .addEventListener("click", function () {
            location.replace("https://hu-hicoder.github.io/ChemiGatya/");
            }, false);
        }

        else if (a == 3){
            alert("F2");
            localStorage.setItem('f','true')
            localStorage.getItem('f')
            console.log(f);
            document.write('<img src="photo\\F2.png" alt="" width="500" height="500" border="10">');
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
            console.log(w);
            document.write('<img src="photo\\W.png" alt="" width="500" height="500" border="10">');
            document.write('<button id="home" class="btn btn-primary" type="submit">ホームに戻る</button>')
            document.getElementById("home")
            .addEventListener("click", function () {
            location.replace("https://hu-hicoder.github.io/ChemiGatya/");
            }, false);
        }
        if(localStorage.getItem('h') !== null) {
            console.log('このキーは存在しています');
        }
        if(localStorage.getItem('o') !== null) {
            console.log('このキーは存在しています');
        }
        if(localStorage.getItem('cl') !== null) {
            console.log('このキーは存在しています');
        }
        if(localStorage.getItem('f') !== null) {
            console.log('このキーは存在しています');
        }
        if(localStorage.getItem('w') !== null) {
            console.log('このキーは存在しています');
        }
    }

    const el = document.getElementById("push");
    el.addEventListener("click", gatya, false);