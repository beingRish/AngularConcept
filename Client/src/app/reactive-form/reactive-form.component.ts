import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/user-name.validator';
import { PasswordValidator } from '../shared/password.validator';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  registrationForm : FormGroup | any;
  
  get userName() {
    return this.registrationForm.get('username')
  }

  get email() {
    return this.registrationForm.get('email')
  }

  get alternateEmails(){
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail(){
    this.alternateEmails.push(this.fb.control(''));
  }

  constructor(private fb: FormBuilder, private registraionService: RegistrationService) { }

  ngOnInit(): void {

    // Creating Form Model
    // this.registrationForm = new FormGroup({
    //   username: new FormControl(''),
    //   password: new FormControl(''),
    //   confirmPassword: new FormControl(''),
    //   address: new FormGroup({
    //     city: new FormControl(''),
    //     state: new FormControl(''),
    //     postalCode: new FormControl(''),
    //   })
    // });

    // Creating Form Model using FormBuilder
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]],
      email: [''],
      subscribe: [false],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: [''],
      }),
      alternateEmails: this.fb.array([])
    }, { validator: PasswordValidator });

    this.registrationForm.get('subscribe').valueChanges
      .subscribe((checkedValue: any) => {
        const email = this.registrationForm.get('email');
        if(checkedValue){
          email.setValidators(Validators.required);
        }
        else{
          email.crearValidators();
        }
        email.updateValueAndValidity();
      });
  }



  loadApiData() {

    // Managing Controls values using setValue

    // this.registrationForm.setValue({
    //   username: "Bruce",
    //   password: "test",
    //   confirmPassword: 'test',
    //   address: {
    //     city: 'City',
    //     state: 'State',
    //     postalCode: '123456'
    //   }
    // })

    // Managing controls values using patchValue

    this.registrationForm.patchValue({
      username: "Bruce",
      password: "test",
      confirmPassword: 'test',
    })
  }

  onSubmit(){
    console.log(this.registrationForm.value);
    this.registraionService.register(this.registrationForm.value)
      .subscribe(
        (response) => console.log('Success!', response),
        (error: any) => console.log('error!', error)
      );
  }

}
