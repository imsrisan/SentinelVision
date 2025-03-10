import { Component } from '@angular/core';
import { ApiServiceService } from '../Service/api-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-insight',
  imports: [],
  templateUrl: './insight.component.html',
  styleUrl: './insight.component.css'
})
export class InsightComponent {

  insight : Observable<any> | undefined;

  constructor(private apiService: ApiServiceService) {
    this.apiService.resultInsight().subscribe((data) => {
      this.insight = data;
    });
  }
  

}
