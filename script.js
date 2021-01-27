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
};
$.get('https://type.fit/api/quotes', function(response){
  let data= JSON.parse(response);
  let random= Math.floor( Math.random()*(1643))
  $('#quote').html(
    data[random].text
  );
  $('#author').html(
    data[random].author
  )
})

showCat();

