const urlmath = "http://numbersapi.com/random/trivia";
const urlcat ="https://aws.random.cat/meow?ref=apilist.fun";


//Catphoto
/*  fetch(urlcat).then(res => res.json())
  .then(data => {
      console.log(data.file);
      
      document.getElementById("catphoto").innerHTML= ` <img src="${data.file}" width="500">`

    }
     );*/

//Math quote
  fetch(urlmath).then( data => data.text())
    .then(
      data => {
        document.getElementById("math").innerHTML = data;
      }
  );

