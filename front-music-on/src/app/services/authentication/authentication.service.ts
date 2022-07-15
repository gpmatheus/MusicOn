import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private authenticated : boolean = false;
  private creator: boolean = true;

  constructor() { }

  authenticate(userName: string, password : string) : Observable<boolean> {

    // somente para testar
    console.log(userName + ' + ' + password);

    // somente para funcionar
    this.authenticated = userName == 'default' && password == 'default';

    return of(this.authenticated).pipe(
      delay(1000)
    );
  }

  isAuthenticated() : boolean {
    return this.authenticated;
  }

  isCreator() : boolean {
    return this.creator;
  }
}
