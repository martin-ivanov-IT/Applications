import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Application } from 'src/app/shared/application.module';
import { ApplicationsService } from 'src/app/shared/applications.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.scss']
})
export class ApplicationDetailsComponent implements OnInit {

  application: Application;
  applicationId: number;
  new: boolean;

  constructor(private applicationsService: ApplicationsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    //find out if we are crating a new application or ediiting an existing one
    this.route.params.subscribe((params: Params) => {
       this.application = new Application;
      if(params.id){
        this.application = this.applicationsService.get(params.id);
        this.applicationId = params.id;
        this.new = false;

      }
      else{
        this.new = true;
      }
    })
   
  }

  onSubmit(form: NgForm){
    if (this.new) {
      //Save the application
        this.applicationsService.add(form.value);
   
    }
    else{
      this.applicationsService.update(
         this.applicationId,
         form.value.name,
         form.value.email,
         form.value.age,
         form.value.phoneNumber,
         form.value.answerPhone,
         form.value.answerEmail,
         form.value.englishLevel,
         form.value.date,
         form.value.skills,
         form.value.presentation,
         form.value.isFromhome
       
        )
    }
    this.router.navigateByUrl('/');

  }

  cancel() {
    this.router.navigateByUrl('/');
  }

}
