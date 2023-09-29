import { Injectable } from '@angular/core';
import { Octokit } from 'octokit';

@Injectable({
  providedIn: 'root'
})
export class GitProjectsService {

  private names : string[] = ['Proyecto-Aviones','Sistema-de-Facturacion','Proyecto-Sockets',
                              'microservicios-ejs-docker', 'microservicios-ejs-docker-frontend'];

  private octokit : Octokit = new Octokit({
    auth: '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'
  });

  constructor() { }

  foundRepos(){
    let repos:any[]=[];
    let count: number = 0;
    this.names.forEach(async name =>{
      let ress = await this.octokit.request('GET /repos/{owner}/{repo}', {
        owner: 'HarDep',
        repo: name,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      });
      if(count==0){
        console.log(ress.data);
      }
      repos.push(ress.data);
      count++;
    });
    return repos;
  }
}
