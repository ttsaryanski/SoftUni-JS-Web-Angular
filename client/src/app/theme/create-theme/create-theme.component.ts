import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';
import { FormsModule, NgForm } from '@angular/forms';
import { setButtonAttributes } from '../../utils/buttonStatus';

@Component({
  selector: 'app-create-theme',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './create-theme.component.html',
  styleUrl: './create-theme.component.css',
})
export class CreateThemeComponent {
  constructor(private apiService: ApiService, private router: Router) {}

  create(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { themeName, postText } = form.value;

    this.apiService.createTheme(themeName, postText).subscribe((data) => {
      this.router.navigate(['/themes']);
      form.reset();
    });
  }

  setButton(form: any) {
    return setButtonAttributes(form);
  }
}
