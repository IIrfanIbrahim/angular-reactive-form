import { Component } from '@angular/core';
import { DataCard } from './data-component/data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-reactive-form';
  

  listPerson: DataCard[] = [
    {
      index: 0,
      picture: "https://picsum.photos/200?random=0",
      age: 37,
      name: "Flora Nieves",
      company: "STUCCO",
      phone: "+62 (938) 581-2473",
      address: "739 Dewey Place, Deputy, Ohio, 2479",
      like: 0
    },
    
  ];
  deffLike = 0;
  countLikeHandler() {
    // console.log((event.target as HTMLInputElement).value)
    this.deffLike++;
  }

  sumIndex = this.listPerson.length;

  newDataHandler(dataEvent: any){
    this.listPerson.push({
      index: this.sumIndex+1,
      picture: "https://picsum.photos/200?random=" + this.sumIndex++,
      age: dataEvent['age'],
      name: dataEvent['name'],
      company: dataEvent['company'],
      phone: dataEvent['phone'],
      address: dataEvent['address'],
      like: 0
    })

  }
    // showForm : boolean = false;
    // triggerForm(){
    //   this.showForm = true;
    // }
    
    // addDataHandler(data: 
    // {
    //   // index : number,
    //     age: number,
    //     name: string,
    //     company: string,
    //     phone: string,
    //     address: string,
    //     like: number
    // })

    // {
    
    
    // }
  
  }
