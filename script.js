const urlmath = "http://numbersapi.com/random/trivia";
const urlcat ="https://aws.random.cat/meow?ref=apilist.fun";

function showCat(){
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if (this.status==200 && this.readyState ==4 ){
      let data = JSON.parse(this.responseText);
      console.log(data.file);
      document.getElementById("catphoto").innerHTML = ` <img src="${data.file}" width="50%"> `
    }
  };
  xhttp.open("GET",urlcat,true);
  xhttp.send();
}

function showMath(){
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if (this.status==200 && this.readyState ==4 ){
      document.getElementById("math").innerHTML= this.responseText;
    }
  };
  xhttp.open("GET",urlmath,true);
  xhttp.send();
}
showMath();
showCat();

