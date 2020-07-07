import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/shared/application.module';
import { ApplicationsService } from 'src/app/shared/applications.service';

@Component({
  selector: 'app-applications-list',
  templateUrl: './applications-list.component.html',
  styleUrls: ['./applications-list.component.scss']
})


export class ApplicationsListComponent implements OnInit {

  applications: Application[] = new Array<Application>();

  constructor(private applicationsService: ApplicationsService) { }

  ngOnInit(): void {
    //retreive all applications from ApplicationsService
    this.applications= this.applicationsService.getAll();
  }

  deleteApplication(application: Application){
    let applicationId = this.applicationsService.getid(application)
    this.applicationsService.delete(applicationId);
    
  }
}
