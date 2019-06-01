
$(document).ready(function () {
$('#btnSearch').on('click', infoCountry)
});




function Country( name, capital , currency , officialLanguages , region ,subregion , callingCode ,population) 
{
    
var countryName = name;
var countryCapital = capital;
var countryCurrency = currency;
var countryOfficialLanguages = officialLanguages;
var countryGeographicRegion = region;
var subRegion = subregion;
var countryCallingsCode = callingCode;
var countryPopulation = population;  


this.getCountryName = function(){ return countryName;};
this.getCountryCurrency = function(){ return countryCurrency;};
this.getCountryCapital = function () { return countryCapital; };
this.getCountryPopulation = function () { return countryPopulation; };
this.getCountryGeographicRegion = function () { return countryGeographicRegion; };
this.getSubRegion = function () { return subRegion; };
this.getCountryCallingsCode = function(){ return countryCallingsCode; };
this.getCountryOfficialLanguages = function(){ return countryOfficialLanguages; };

}


Country.prototype.getInfo = function () {


return '<br/> Nom du Pays : <span class="text-primary">' + this.getCountryName() + '</span>'+
'<br/> Capital : <span class="text-primary">' + this.getCountryCapital() + '</span>'+
'<br/> Population : <span class="text-primary">' + this.getCountryPopulation()+' au km² </span>'+
'<br/> Zone Geographique : <span class="text-primary">' + this.getCountryGeographicRegion() +'</span>'+
'<br/> Zone Geographique specifique : <span class="text-primary">' + this.getSubRegion() +'</span>'+
'<br/> Code telephonique : <span class="text-primary">' + this.getCountryCallingsCode() +'</span>'+
'<br/> Device monetaire : <span class="text-primary">' + this.getCountryCurrency() +'</span>'+
'<br/> Language(s) officielle(s) :  <span class="text-primary">' + this.getCountryOfficialLanguages() +'</span>';

};


function CountryB() 
{
}


CountryB.prototype.getByName = function(input){

   return $.ajax({
    url: 'https://restcountries.eu/rest/v2/name/'+ input,
    type: 'GET',
    cache: false,
    dataType: 'json',
    
   error: function(data){
	   
             $('#error').html(' Element introuvable ').addClass("text-danger");
			      
                
        },
    success: function (data) {
            
     $('#Country').html(data[0]["name"] + data[0]["capital"]);   
       
  
  }
  
 });


}



 function getByName(input)
{
	
var languages = new Array();
   return $.ajax({
    url: 'https://restcountries.eu/rest/v2/name/'+ input,
    type: 'GET',
    cache: false,
    dataType: 'json',
    
   error: function(data){
	   
       //      $('#error').html(' Element introuvable ').addClass("text-danger");
			      
                
        },
    success: function (data) {

     
     $.each(data[0]["languages"],function(i,result){
      languages.push(result["nativeName"]);    
   });
  
  
  
  var  pays = new Country( data[0]["name"], data[0]["capital"] ,
     data[0]["currencies"][0]["code"] + " de la zone " + data[0]["currencies"][0]["name"] ,languages, data[0]["region"] ,data[0]["subregion"], data[0]["callingCodes"] ,data[0]["population"] ) ;
     
     
     $('#Country').html(pays.getInfo());   
       
     $('#error').html(' Element introuvable ').addClass("text-primary");       
  }
  
 });

}



function getByCode(input)
{
	
var languages = new Array();
 return $.ajax({
   url: 'https://restcountries.eu/rest/v2/callingcode/'+ input,
   type: 'GET',
   cache: false,
   dataType: 'json',
   error: function(input){

             
             $('#error').html(' Element introuvable ' ).addClass("text-danger");    
                
        },
   success: function (data) {
     
     $.each(data[0]["languages"],function(i,result){
      languages.push(result["nativeName"]);    
   });
  
   
  var  pays = new Country( data[0]["name"], data[0]["capital"] ,
     data[0]["currencies"][0]["code"] + " de la zone " + data[0]["currencies"][0]["name"] ,languages, data[0]["region"] ,data[0]["subregion"], data[0]["callingCodes"] ,data[0]["population"] ) ;
     
     
     $('#Country').html(pays.getInfo());
     $('#error').html(' Element introuvable ').addClass("text-primary");
  }
  
  
 
});
}


function getByCapital(input)
{
	
var languages = new Array();
  return $.ajax({
   url: 'https://restcountries.eu/rest/v2/capital/'+ input,
   type: 'GET',
   cache: false,
   dataType: 'json',
   error: function(data){
           
   //          $('#error').html(' Element introuvable ').addClass("text-danger");    
                
        },
   success: function (data) {

    $.each(data[0]["languages"],function(i,result){
      languages.push(result["nativeName"]);    
   });
  
 
  var  pays = new Country( data[0]["name"], data[0]["capital"] ,
     data[0]["currencies"][0]["code"] + " de la zone " + data[0]["currencies"][0]["name"] ,languages, data[0]["region"] ,data[0]["subregion"], data[0]["callingCodes"] ,data[0]["population"] ) ;
     
     
     $('#Country').html(pays.getInfo());
             $('#error').html(' Element introuvable ').addClass("text-primary");
		 
  }
 });
 }

function infoCountry() {
    
 var input = $('#example-search-input').val().split('+');
 
 
  if(input.length >1)
   {
      input = input[1];
   }   
  
  $.when(getByName(input),getByCode(input),getByCapital(input)).done(function(){
	  });
 
 
}


