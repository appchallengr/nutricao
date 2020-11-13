import { Component, AfterContentChecked } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IrisAuthService } from './core/auth/iris.auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nutrição';
  showHeader: boolean = false;

  constructor(public iris: IrisAuthService) {
    setTimeout(() => {
      this.iris.renderHeader = true;
    }, 1000);
  }

  logout() {
    location.href = environment.authPostLogoutRedirectUri;
  }

  public reciverFeedback() {
    location.href = environment.urlMenu;
  }
}
