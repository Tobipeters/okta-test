import { Component } from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'okta-sso-test';
  oktaDomainUrl = 'dev-76988434.okta.com';

  constructor(private oauthService: OAuthService) {
    this.oauthService.redirectUri = 'http://localhost:4200/app';
    this.oauthService.clientId = '0oa6cgvt8ulJhqeFH5d7';
    // this.oauthService.scope = 'openid profile email';
    this.oauthService.issuer = `https://${this.oktaDomainUrl}/oauth2/default`;
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();

    // Load Discovery Document and then try to login the user
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login = () => {
    this.oauthService.initImplicitFlow();
  };

  logout = () => {
    this.oauthService.logOut();
  };

  get givenName(): any {
    const claims: any = this.oauthService.getIdentityClaims();
    if (!claims) {
      return null;
    }

    return claims['name'];
  }
}
