import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {Observable} from 'rxjs';
import { UserserviceService } from '../userservice.service';
import {User} from '../user.model';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  title = 'app';
  examsListSubs!: Subscription;
  examsList!: User;
  user$!: Observable<User>;

  constructor(private usersApi: UserserviceService) {
    console.log("in constructor component");
    console.log(this.examsListSubs);
    console.log(this.user$);
  
  }
  ngOnInit() {
    this.user$ = this.usersApi.getUsers();
    console.log("in user component");
    console.log(this.user$);
    //this.usersListSubs = this.usersApi
    // .getUsers()
    //  .subscribe(res => {
    //      this.usersList = res;
    //    },
    //    console.error
    //  );
    this.examsListSubs = this.usersApi.getUsers().subscribe({
      complete: () => console.log("am i here in component")
      //complete: () => console.log(this.examsList)
    }
    );

    console.log("in where component");
    console.log(this.examsListSubs);
    //console.log(complete);
  }


  ngOnDestroy() {
    //this.usersListSubs.unsubscribe();
  }

}
