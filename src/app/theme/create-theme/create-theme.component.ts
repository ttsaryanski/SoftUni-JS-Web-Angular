import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
    selector: 'app-create-theme',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './create-theme.component.html',
    styleUrl: './create-theme.component.css',
})
export class CreateThemeComponent {
    constructor(private apiService: ApiService){};

    createTheme(event: Event, themeName: string, themeText: string) {
        event.preventDefault();

        this.apiService.createTheme(themeName, themeText).subscribe((data) => {
            console.log(data);
        })
    }
};

