import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { IrisAuthService } from '../auth/iris.auth.service';
import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css']
})
export class AuthCallbackComponent implements OnInit {

  private access_token: string;
  refresh_token: any;

  constructor(
    private router: Router,
    private irisAuthService: IrisAuthService,
    private routerParam: ActivatedRoute,
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    localStorage.setItem('cryp', 'U2FsdGVkX19W/gqpqM3Inv7gh7SwY/E3ZkDEwVJu86o=')
    let urlParams = this.routerParam.snapshot.params['id'];

    if (urlParams && urlParams.length > 0) {
      let split = urlParams.split('|');

      if (split) {

        let page = split[0]
        let ultimo_refresh_token = sessionStorage.getItem('refresh_token');

        this.refresh_token = split[1];

        if (ultimo_refresh_token != undefined && ultimo_refresh_token.length > 0) {
          if (this.refresh_token != ultimo_refresh_token) {
            this.refresh_token = ultimo_refresh_token;
          }
        }

        this.getRefreshAccess().subscribe((res: any) => {
          if (this.refresh_token) {
            sessionStorage.setItem('refresh_token', res.refresh_token);
            this.irisAuthService.setTokenSessionStorage(res.access_token);
            this.irisAuthService.renderHeader = true;
            this.router.navigate(['/' + page]);
          } else {
            sessionStorage.clear();
            this.router.navigate(['/' + environment.RouteDefaultPage]);
          }
        })
      }

    } else {
      sessionStorage.clear();
      this.router.navigate(['/' + environment.RouteDefaultPage]);
    }
  }

  getRefreshAccess() {

    const data = 'refresh_token=' + this.refresh_token + '&grant_type=refresh_token';
    const tokenSecret = 'basic SVJJUy5NZW51UGFzc3dvcmQuRnJvbnRlbmQ6aXJpcy1tZW51LXBhc3N3b3JkLWZyb250LWVuZC1zZWNyZXQ=';

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': tokenSecret
      })
    }

    return this.http.post(environment.authIssuer + '/connect/token', data, options);
  }

}
