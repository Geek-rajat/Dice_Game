var randomNumber1=Math.floor(Math.random() * 6 ) + 1;
var randomdiceimage1="images/dice-"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0].setAttribute("src",randomdiceimage1);


var randomNumber2=Math.floor(Math.random() * 6 ) + 1;
var randomdiceimage2="images/dice-"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1].setAttribute("src",randomdiceimage2);


if(randomdiceimage1>randomdiceimage2)
    {
        document.querySelector("h1").innerHTML="🏆 Player 1 wins";
    }
else if(randomdiceimage2>randomdiceimage1)
    {
        document.querySelector("h1").innerHTML="🏆 Player 2 wins";
    }
else{
    document.querySelector("h1").innerHTML="Draw";
}