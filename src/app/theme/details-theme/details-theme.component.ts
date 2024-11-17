import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { Theme } from '../../types/theme';

@Component({
    selector: 'app-details-theme',
    standalone: true,
    imports: [],
    templateUrl: './details-theme.component.html',
    styleUrl: './details-theme.component.css',
})
export class DetailsThemeComponent implements OnInit {
    theme = {} as Theme;

    constructor(private route: ActivatedRoute, private apiService: ApiService) { }

    ngOnInit(): void {
        const id = this.route.snapshot.params['themeId'];
        
        this.apiService.getSingleTheme(id).subscribe((theme) => {
            this.theme = theme;
            console.log(this.theme.posts[0].text);
            
        });
    }
}
