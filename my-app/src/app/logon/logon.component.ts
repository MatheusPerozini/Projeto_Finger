import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {

  constructor(private router: Router) { }

  navigate() {
    this.router.navigate(['/home']);
  }
  ngOnInit(): void {
  }

}
