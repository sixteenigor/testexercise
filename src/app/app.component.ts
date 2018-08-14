import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

 flight = {
  	startDate: '',
  	endDate: '',
  	from : '',
  	to : ''
  };

  searchFlight() {
  /*var options = {
	  
	  year: 'numeric',
	  month: 'short',
	  day: 'numeric',
	  hour: 'numeric',
	  minute: 'numeric'
	  
	};
	let changeStartDate = this.flight.startDate.toLocaleString("en-US", options);
	let changeEndtDate = this.flight.endDate.toLocaleString("en-US", options);
	this.flight.startDate = changeStartDate
	this.flight.endDate = changeEndtDate*/

   	let fligtSave = this.flight.startDate + ' - ' + this.flight.endDate + ',  ' + this.flight.from + ' > ' + this.flight.to;
  	

  	for(let i=0;i<=localStorage.length;i++) {
  		let j = '';
  		j += i;
  		let receivedItem = localStorage.getItem(j);
  		
  		if(receivedItem == null){	
  			localStorage.setItem(j, fligtSave);
  			break;

  		};
  		
  	};

  	this.searches = this.getItems();
  	
  };

  clearFlight() {
  	this.flight = {
  		startDate : '',
  		endDate : '',
  		from : '',
  		to : ''
  	};

  };

  hotel = {
  	amenitie: '',
  	location: ''
  };


  amenities = [
    {value: 'Very low', number: ['']},
    {value: 'Low', number: ['','']},
    {value:'Middle', number: ['','','']},
    {value:'Higher', number: ['','','','']},
    {value:'Very high', number: ['','','','','']},
  ];

  clearHotel() {
  	this.hotel = {
  		amenitie: '',
  		location: ''
  	};
  };

  searchHotel() {

  	let hotelSave = this.hotel.amenitie + ',  ' + this.hotel.location;
  	
  	for(let i=0;i<=localStorage.length;i++) {
  		let j = '';
  		j += i;
  		let receivedItem = localStorage.getItem(j);
  		
  		if(receivedItem == null){	
  			localStorage.setItem(j, hotelSave);
  			break;

  		};
  		
  	};

  	this.searches = this.getItems();
  	
  };

  car = {
  	type: '',
  	location: ''
  };

  clearCar() {
  	this.car = {
  		type: '',
  		location: ''
  	};
  };

  searchCar() {
  	
  	let carSave = this.car.type + ',  ' + this.car.location;
  	
  	for(let i=0;i<=localStorage.length;i++) {
  		let j = '';
  		j += i;
  		let receivedItem = localStorage.getItem(j);
  		
  		if(receivedItem == null){	
  			localStorage.setItem(j, carSave);
  			break;

  		};
  		
  	};

  	this.searches = this.getItems();

  };

  types = [
    {value: 'Gas fuel'},
    {value: 'Diesel fuel'},
    {value:'Petrol fuel'},
    {value:'Electric fuel'},
    {value:'Mixed fuel type'},
  ];

  getItems(){
  	let recivedArray = [];
  	let i = 0;
  	for(let key in localStorage) {
  		
  		if(key !== 'test' && key !== 'length' && key !== 'key' && key !== 'getItem' && key !== 'setItem' && key !== 'removeItem' && key !== 'clear'){
  			let receivedItem = localStorage.getItem(key);
  			let newArrayObject = {value: receivedItem, id: +key};
  			recivedArray[i] = newArrayObject; 	i++;
  		};
  		 			 		
  	};
  	//console.log(recivedArray);
  	return recivedArray;
  }

  searches = this.getItems();



  deleteSearch(search) {
  
  	localStorage.removeItem(''+ search.id);
  	this.searches = this.getItems();
  	
  };


}
