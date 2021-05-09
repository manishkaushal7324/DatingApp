import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_model/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.scss']
})
export class NavComponentComponent implements OnInit {
  model:any = {}  

  constructor(public accountservice:AccountService) { }

  ngOnInit(): void {
    
  }

  login(){
    this.accountservice.login(this.model).subscribe(response=>{
      console.log(response);      
    },error=>
    {
      console.log(error);
    });
  }

  logout(){
    this.accountservice.logout();    
  }

}
