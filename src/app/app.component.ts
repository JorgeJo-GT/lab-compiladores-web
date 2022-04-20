import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  test: any[] = [];
  title = 'lab-compiladores';
  variables: { unique: string[], variables: string[], productions: {variable: string, production: string}[], terminals: {variable: string, production: string}[] } = {
    unique: [], variables: [], productions: [], terminals: []
  };
  text: string = '';

  constructor(private http: HttpClient) {

  }


  uploadFile(event: any): void {
    const file: File = event.files[0];
    let formData = new FormData();
    formData.append('file', file);
    file.text().then(value => this.text = value);

    this.http.post<any>(`http://localhost:8080`, formData)
      .subscribe(data => {
        this.variables = data;
      });
    
    console.log()

  }
}
