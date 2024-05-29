import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  users: any = [];
  constructor(private userServ: UserDataService) { } 
  ngOnInit(): void {
    this.userServ.getUsers().subscribe((user)=>{
      this.users = user;
    })
  }

}
