import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup , FormControl , Validators } from '@angular/forms';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {

  logon = new FormGroup({
    email : new FormControl('', Validators.required),
    senha : new FormControl('' , Validators.required)
  });

  constructor(private router: Router) { }

  errorMessage = false;

  navigate() {
    if(this.logon.controls.email.value == 'teste' && this.logon.controls.senha.value == 'teste'){
      this.router.navigate(['/home']);
    }else{
      this.errorMessage = true;
    }
  }
  ngOnInit(): void {
  }

}
