import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { ApiServiceService } from '../Service/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    FormsModule,
    MatTooltipModule,
    ToolbarComponent,
    ToolbarComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  vedioName: string = 'No file chosen';
  previewOn: boolean = false;
  videoPreview: string | null = null;
  selectedFile!: File;


  constructor(private apiService: ApiServiceService, private router: Router) {}

  @ViewChild('fileInput') fileInput!: ElementRef;
  openFileChooser() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const allowedTypes = [
        'video/mp4',
        'video/x-msvideo',
        'video/x-matroska',
        'video/quicktime',
        'video/webm',
      ];
      if (allowedTypes.includes(file.type)) {
        this.vedioName = file.name;
        this.videoPreview = URL.createObjectURL(file);
        this.selectedFile = file;
      } else {
        alert('Invalid file format! Please select a valid video file.');
        input.value = '';
        this.vedioName = 'No file chosen';
      }
    }
  }

  preview() {
    this.previewOn = true;
  }

  closePreview() {
    this.previewOn = false;
  }

  insight() {
    if (this.videoPreview) {
      this.apiService.vedioInsight(this.selectedFile);
      this.router.navigate(['/insight']);
    } else {
      alert('No file chosen to insight');
    }
  }
}
