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

  constructor(private gitHubService: GitProjectsService){}

  ngOnInit(): void {
    this.repos = this.gitHubService.foundRepos();
  }

}
