const pattern1 = document.querySelectorAll(".pattern1");
const pattern2 = document.querySelectorAll(".pattern2");

for(let i=0; i<pattern1.length; i++){
    pattern1[i].addEventListener('click',change);
}
for(let i=0; i<pattern2.length; i++){
    pattern2[i].addEventListener('click',change);
}

function change(){
    for(let i=0; i<pattern1.length; i++){
        if(pattern1[i].className === "pattern1" && pattern2[i].className === "pattern2"){
            pattern1[i].className = "pattern2";
            pattern2[i].className = "pattern1";
        }
        else
        {
            pattern1[i].className = "pattern1";
            pattern2[i].className = "pattern2";
        }
    }
}