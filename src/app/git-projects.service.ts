import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GitProjectsService {

  private names : string[] = ['Proyecto-Aviones','Sistema-de-Facturacion','Proyecto-Sockets', 'microservicios-ejs-docker', 'microservicios-ejs-docker-frontend', 'microservicios-1','portfolio'];

  constructor(private httpClient: HttpClient) { }

  foundRepos(){
    let repos:any[]=[];
    this.names.forEach(name =>{
      this.httpClient.get<any>('https://api.github.com/repos/HarDep/' + name).subscribe(data =>{
        if(name == 'portfolio'){
          data.description = data.description + ' (It\'s this project, the description is not long because I want you to enjoy the project by yourself, I hope you liked it)'
        }
        if(name == 'portfolio' || name == 'microservicios-ejs-docker-frontend'){
          data.language = 'TypeScript CSS HTML';
        }
        data.url_activity = data.svn_url + '/activity';
        data.url_forks = data.svn_url + '/forks';
        data.url_stargazers = data.svn_url + '/stargazers';
        data.url_watchers = data.svn_url + '/watchers';
        data.url_readme = data.svn_url + '#readme';
        repos.push(data);
      });
    });
    return repos;
  }
}
