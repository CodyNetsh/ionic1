import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
TA=0;
TB=0;
  constructor(private router:Router) {}

  
  reset() {
    console.log(this.TA) 
    console.log(this.TB) 
    this.router.navigateByUrl('/home')
  }
}
