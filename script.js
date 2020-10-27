const urlBbquote = "https://www.breakingbadapi.com/api/quote/random";
const urlCat ="https://aws.random.cat/meow?ref=apilist.fun";

function showCat(){
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if (this.status==200 && this.readyState ==4 ){
      let data = JSON.parse(this.responseText);
      console.log(data.file);
      document.getElementById("catphoto").innerHTML = ` <img src="${data.file}"> `
    }
  };
  xhttp.open("GET",urlCat,true);
  xhttp.send();
}

function showBbquote(){
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if (this.status==200 && this.readyState ==4 ){
      let data = JSON.parse(this.responseText);
      document.getElementById("quote").innerHTML= data[0].quote;
      document.getElementById("author").innerHTML = data[0].author;
    }
  };
  xhttp.open("GET",urlBbquote,true);
  xhttp.send();
}

showCat();
showBbquote();
