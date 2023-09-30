import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GitProjectsService {

  private names : string[] = ['Proyecto-Aviones','Sistema-de-Facturacion','Proyecto-Sockets', 'microservicios-ejs-docker', 'microservicios-ejs-docker-frontend'];

  constructor(private httpClient: HttpClient) { }

  foundRepos(){
    let repos:any[]=[];
    this.names.forEach(name =>{
      this.httpClient.get<any>('https://api.github.com/repos/HarDep/' + name).subscribe(data =>{
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
