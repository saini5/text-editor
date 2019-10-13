import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const auth_header = 'Bearer ' + '3NS85YuhYpQcnNwJ30q9KOcVhR8rf8';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': auth_header
  }), responseType: 'text' as 'text'
};

const postHttpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': auth_header
  })
};

export interface Config {
  path: string;
  name: string;
}

@Injectable()
export class DemoService {

  fileUrl: string;

  constructor(private http: HttpClient) {}

  baseUrl = 'https://api.cdrive.columbusecosystem.com/';


  /** Returns observable of file path on aws */
  getDownloadUrl() {
    let restUrl = 'content/';
    let pathFile = 'users/aman/test/complexities.txt';
    let url = this.baseUrl + restUrl + '?path=' + pathFile;
    return this.http.get(url, httpOptions);
  }

  /** Returns observable of the file contents */
  getContent(fileUrl: string) {
    console.log('in demo service get content');
    console.log(fileUrl);
    return this.http.get(fileUrl, httpOptions);
  }

  getFileContents() {
    let restUrl = 'content/';
    let pathFile = 'users/aman/test/complexities.txt';
    let url = this.baseUrl + restUrl + '?path=' + pathFile;
    return this.http.get(url, httpOptions);
    // this.getDownloadUrl().subscribe(val => this.fileUrl = val);
    // console.log('In get file contents in service');
    // console.log(this.fileUrl);
    // return this.getContent(this.fileUrl);
  }

  deleteFile() {
    let restUrl = 'delete/';
    let pathFile = 'users/aman/test/complexities.txt';
    let url = this.baseUrl + restUrl + '?path=' + pathFile;
    return this.http.delete(url, httpOptions);
  }

  createFile() {
    let restUrl = 'upload/';
    let url = this.baseUrl + restUrl;

    let config: Config = {
      path: 'users/aman/test/A.csv',
      name:  'complexities2.txt'
    };
    return this.http.post<Config>(url, config, postHttpOptions);

  }
  //complexities.txt

}
