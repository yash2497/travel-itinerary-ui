import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'travel-itinerary-ui';
  private matIconRegistry = inject(MatIconRegistry);
  private domSanitizer = inject(DomSanitizer);

constructor() {
    this.initSvgIcons();
  }

private initSvgIcons() {
    this.matIconRegistry.addSvgIcon(
      'google_logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/google.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'github_logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/github.svg'
      )
    );
  }
}
