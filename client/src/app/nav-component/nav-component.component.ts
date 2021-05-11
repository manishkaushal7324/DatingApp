import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(public accountservice:AccountService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    
  }

  login(){
    this.accountservice.login(this.model).subscribe(response=>{
      this.router.navigateByUrl('/members');  
    },error=>
    {
      console.log(error);
      this.toastr.error(error.error);
    });
  }

  logout(){
    this.accountservice.logout();   
    this.router.navigateByUrl('/');   
  }

}
