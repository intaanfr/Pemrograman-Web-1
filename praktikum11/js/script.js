document.querySelectorAll("a").forEach((a)=>{
    // Jika di klik akan menjalankan fungsi computerChoice()
    a.addEventListener("click", (element)=>{
        computerChoice(element);
    })
})
function computerChoice(element){
    // pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap element pilihan komputer
    let pilihanKomputer = document.querySelector("#result");

    //membuat pilihan dengan array
    let choices = ["Rock", "Paper", "Scissors"];

    // pilihan random untuk komputer
    pilihanKomputer.innerHTML = choices[Math.round(Math.random()*2)]
    pilihanKomputer = pilihanKomputer.innerHTML;


    // jika pilihan user == pilihan komputer (Draw)
    if(pilihanUser == pilihanKomputer){
        setTimeout(()=>alert("DRAWWW NICHH"),300 );
    }

    // jika pilihan user yang menang
    if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        setTimeout(()=>alert ("Lo Menang"),300);
    }else if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        setTimeout(()=>alert ("Lo Menang aja"),300);
    }else if (pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        setTimeout(()=>alert ("Lo Menang Banget"),300);
    }

    if(pilihanUser == "Scissors" && pilihanKomputer == "Rock"){
        setTimeout(()=> alert ("Lo kalah"),300);
    }else if(pilihanUser == "Rock" && pilihanKomputer == "Paper"){
        setTimeout(()=>alert ("Lo kalah aja"),300);
    }else if (pilihanUser == "Paper" && pilihanKomputer == "Scissors"){
        setTimeout(()=>alert ("Lo kalah banget"),300);
    }

}