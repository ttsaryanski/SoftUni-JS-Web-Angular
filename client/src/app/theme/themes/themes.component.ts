import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Theme } from '../../types/theme';
import { RouterLink } from '@angular/router';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { SlicePipe } from '../../shared/pipes/slice.pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-themes',
  standalone: true,
  imports: [LoaderComponent, RouterLink, SlicePipe, DatePipe],
  templateUrl: './themes.component.html',
  styleUrl: './themes.component.css',
})
export class ThemesComponent implements OnInit {
  themes: Theme[] = [];
  isLoading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getThemes().subscribe((themes) => {
      this.themes = themes;
      this.isLoading = false;
    });
  }
}
