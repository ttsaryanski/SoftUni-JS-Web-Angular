import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  setButton(form: any) {
    return setButtonAttributes(form);
  }

  createTheme(form: NgForm) {
    console.log(form.invalid);

    if (form.invalid) {
      return;
    }

    console.log(form.value);
    form.reset();
    //this.apiService.createTheme(themeName, themeText).subscribe((data) => {})
    this.router.navigate(['/themes']);
  }
}
