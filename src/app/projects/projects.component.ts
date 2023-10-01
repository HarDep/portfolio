import { Component, OnInit } from '@angular/core';
import { GitProjectsService } from '../git-projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  repos : any[] = [];
  java : string = 'Java'
  type : string = 'TypeScript'
  tecs:string[] = ['Spring','Angular','React','Docker','Ionic','Bootstrap'];

  isCopied:boolean = false;

  constructor(private gitHubService: GitProjectsService){}

  ngOnInit(): void {
    this.repos = this.gitHubService.foundRepos();
  }

  containsSomeTec(description:string):boolean{
    return this.tecs.some(word => description.includes(word));
  }

  copyToClipboard(link:string){
    navigator.clipboard.writeText(link).then(() => {
      this.isCopied = true;
    }).catch((error) => {
      this.isCopied = false;
      console.log(error);
    });
  }

}
