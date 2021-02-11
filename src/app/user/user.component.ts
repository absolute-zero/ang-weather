import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../users.service';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {UserInterface} from '../interfaces/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input()
  user: UserInterface;

  @Output()
  submitUpdate: EventEmitter<UserInterface> = new EventEmitter<UserInterface>();

  @Output()
  submitDelete: EventEmitter<UserInterface> = new EventEmitter<UserInterface>();


  myForm: FormGroup;
  constructor(){
    this.myForm = new FormGroup({
      name: new FormControl(''),
      login: new FormControl(''),
      password: new FormControl('', Validators.pattern('[a-zA-Z0-9]{3,30}')),
      passwordConfirm: new FormControl('', Validators.pattern('[a-zA-Z0-9]{3,30}'))
    });

  }

  submit(): void{
    this.submitUpdate.emit(this.myForm.value);
  }

  subDelete(): void {
    this.submitDelete.emit();
  }
}
