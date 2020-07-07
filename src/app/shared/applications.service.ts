import { Injectable } from '@angular/core';
import { ApplicationDetailsComponent } from '../pages/application-details/application-details.component';
import { Application } from './application.module';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {

  applications: Application[] = new Array<Application>();
  constructor() {

   }

   getAll(){
     return this.applications;
   }

   get(id:number){
     return this.applications[id];
   }

   getid(application: Application){
    return this.applications.indexOf(application);
   }

   add(application: Application){
     // this method will add a application to the applications and return id of the note
     //where the id = index
     let newLength = this. applications.push(application); 
     let index = newLength-1;
     return index;


   }
  
   update(id: number,name: string,email:string,age:number,phoneNumber:string, answerPhone:boolean,answerEmail:boolean,englishLevel:string,date: string, skills: string,
              presentation: string,isFromhome: boolean){

                let application = this.applications[id];
                application.name = name;
                application.email = email;
                application.age = age;
                application.phoneNumber=phoneNumber;
                application.answerPhone = answerPhone;
                application.answerEmail = answerEmail;
                application.englishLevel = englishLevel;
                application.date = date;
                application.skills = skills;
                application.presentation = presentation;
                application.isFromhome = isFromhome;
              
    }

    delete (id: number){
      this.applications.splice(id, 1);
    }
}
