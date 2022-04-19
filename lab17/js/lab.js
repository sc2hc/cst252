class Vehicle{
  constructor(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }
  info(){
      return(this.make + " " + this.model + " " + this.year + " " + this.color);
  }
}

var hondaVan = new Vehicle("Honda","Odyssey","2010","Blue");
var hondaCrv = new Vehicle("Honda","CRV","2021","Red");

$("#output").append("<p>" + hondaVan.info() + "</p>");
$("#output").append("<p>" + hondaCrv.info() + "</p>");
