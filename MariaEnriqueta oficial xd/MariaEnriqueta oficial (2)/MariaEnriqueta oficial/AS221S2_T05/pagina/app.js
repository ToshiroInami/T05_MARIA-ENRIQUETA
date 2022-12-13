const fullimg = document.getElementById("fullimg");
const fulimg = document.getElementById("fulimg");

function openimg(reference){
    fullimg.style.display="flex";
    fulimg.src = reference;
}   

function closeimg(){
    fullimg.style.display ="none";
}