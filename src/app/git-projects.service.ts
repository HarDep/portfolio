import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Octokit } from 'octokit';

@Injectable({
  providedIn: 'root'
})
export class GitProjectsService {

  private names : string[] = ['Proyecto-Aviones','Sistema-de-Facturacion','Proyecto-Sockets', 'microservicios-ejs-docker', 'microservicios-ejs-docker-frontend'];

  /*private octokit : Octokit = new Octokit({
    auth: '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'
  });*/

  constructor(private httpClient: HttpClient) { }

  foundRepos(){
    let repos:any[]=[];
    let count: number = 0;
    this.names.forEach(name =>{
      this.httpClient.get<any>('https://api.github.com/repos/HarDep/' + name).subscribe(data =>{
        //console.log(data);
        data.url_activity = data.svn_url + '/activity';
        data.url_forks = data.svn_url + '/forks';
        data.url_stargazers = data.svn_url + '/stargazers';
        data.url_watchers = data.svn_url + '/watchers';
        data.url_readme = data.svn_url + '#readme';
        if(count == 0){
          console.log(data);
        }
        repos.push(data);
        count++;
      });
      /*let ress = await this.octokit.request('GET /repos/{owner}/{repo}', {
        owner: 'HarDep',
        repo: name,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      });*/
      //if(count==0){
        //console.log(ress.data);
      //}
      //repos.push(ress.data);
    });
    return repos;
  }
}
