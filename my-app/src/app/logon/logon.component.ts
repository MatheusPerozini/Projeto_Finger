import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup , FormControl } from '@angular/forms';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {

  logon = new FormGroup({
    email : new FormControl(''),
    senha : new FormControl('')
  });

  constructor(private router: Router) { }

  navigate() {
    if(this.logon.controls.email.value == 'teste' && this.logon.controls.senha.value == 'teste'){
      this.router.navigate(['/home']);
    }else{
      alert('Dados incorretos , tente novamente')
    }
  }
  ngOnInit(): void {
  }

}
