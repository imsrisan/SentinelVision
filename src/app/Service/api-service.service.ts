import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private uploadUrl = 'https://your-api-url.com/upload';
  private resultUrl = 'https://your-api-url.com/result';

  constructor(private http: HttpClient) { }

  vedioInsight(videoFile: File): Observable<any> {
    const formData = new FormData();
    formData.append('video', videoFile);
    return this.http.post<any>(this.uploadUrl, formData); 
  }


  resultInsight(): Observable<any> {
    return this.http.get('');
  }


}
