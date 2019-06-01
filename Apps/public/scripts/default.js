
alert("data");

$(document).ready(function () {
$('#btnSearch').on('click', infoCountry)
});


alert("data");

var languages = new Array();

function getByName(input)
{
  return $.ajax({
   url: 'https://restcountries.eu/rest/v2/name/'+ input,
   type: 'GET',
   cache: false,
   dataType: 'json',
   success: function (data) {
  
  alert(data);
     $('#nameCountry').html('Nom du pays: '+data[0]["name"]);
    
     $('#capitalCountry').html('Capitale: '+data[0]["capital"]);


     $('#codeCountry').html('Code telephonique: '+data[0]["callingCodes"]);

     $('#deviceCountry').html(data[0]["currencies"][0]["code"] + " de la zone :" + data[0]["currencies"][0]["name"]);

    
 $.each(data[0]["languages"],function(i,result){

      
      languages.push(result["nativeName"]);
      
 });
   alert(languages.toString());
    $('#officialLanguages').html('La(les) langue(s) officielle(s)  est(sont) : '+ languages +' ; \n') ;      
      
  }
});
}


function getByCode(input)
{
 $.ajax({
   url: 'https://restcountries.eu/rest/v2/callingcode/'+ input,
   type: 'GET',
   cache: false,
   dataType: 'json',
   success: function (data) {
  
     alert(data);
     $('#nameCountry').html('Nom du pays: '+data[0]["name"]);
    
      $('#capitalCountry').html('Capitale: '+data[0]["capital"]);

     $('#codeCountry').html('Code telephonique: '+data[0]["callingCodes"]);

     $('#deviceCountry').html(data[0]["currencies"][0]["code"] + " de la zone :" + data[0]["currencies"][0]["name"]);
 
     
 $.each(data[0]["languages"],function(i,result){

       $('#officialLanguages').html('\n'+'La langue officiel '+i+' est: '+ result["nativeName"] +' ; \n') ;      
   
   
      languages.push(result["nativeName"]);
   
 });
        alert(languages);
 
  }
});
}

function getByCurrency(input)
{
  $.ajax({
   url: 'https://restcountries.eu/rest/v2/currency/'+ input,
   type: 'GET',
   cache: false,
   dataType: 'json',
   success: function (data) {
  
     alert(data);
     $('#nameCountry').html('Nom du pays: '+data[0]["name"]);
    
      $('#capitalCountry').html('Capitale: '+data[0]["capital"]);

     $('#codeCountry').html('Code telephonique: '+data[0]["callingCodes"]);

     $('#deviceCountry').html(data[0]["currencies"][0]["code"] + " de la zone :" + data[0]["currencies"][0]["name"]);

 $.each(data[0]["languages"],function(i,result){

       $('#officialLanguages').html('\n'+'La langue officiel '+i+' est: '+ result["nativeName"] +' ; \n') ;      
        languages.push(result["nativeName"]);
   
 });
     
    
 
        alert(languages);	
	       
     
  }
});
 
}
	

function infoCountry() {
var input = $('#example-search-input').val();

alert(input);
var data = { "input": input };
/*
$.getJSON('https://restcountries.eu/rest/v2/name/'+ input, data, function (data) {

  alert(data);
  $('#nameCountry').html(data[0]["name"]);

  $('#codeCountry').html(data[0]["callingCodes"]);

  $('#deviceCountry').html(data[0]["currencies"]);
 
   
  
});

*/

  $.when(getByName(input),getByCode(input),getByCurrency(input)).done(function(){});
 
}

/*
function infoCountry() {
var input = document.getElementById('example-search-input').value;
 
var nameCountry = document.getElementById('nameCountry');

var codeCountry = document.getElementById('codeCountry');

var deviceCountry = document.getElementById('deviceCountry');

alert(input);


var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    alert(xmlhttp.response);
var jsonObject = JSON.parse(xmlhttp.response);

  alert(jsonObject[0]["name"]);

 nameCountry.innerHTML = jsonObject[0]["name"];

 codeCountry.innerHTML = jsonObject[0]["callingCodes"];

 deviceCountry.innerHTML = jsonObject[0]["currencies"][0]["code"] + " de la zone :" + jsonObject[0]["currencies"][0]["name"];

}
}
xmlhttp.open("GET", "https://restcountries.eu/rest/v2/name/" + input  , true);
xmlhttp.send();

}*/
