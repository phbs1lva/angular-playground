import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  constructor(private readonly userService: UserService) {}

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl('', [Validators.required]),
  });
  isSubmitting = false;

  addUser() {
    this.isSubmitting = true;

    const newUser: Omit<User, 'id'> = {
      name: this.form.value.name ?? 'name',
      username: this.form.value.username ?? 'username',
      email: this.form.value.email ?? 'email',
      phone: 'phone',
      website: 'website',
      company: {
        name: '',
        catchPhrase: '',
        bs: '',
      },
      address: {
        street: 'street',
        suite: 'suite',
        city: 'city',
        zipcode: 'zipcode',
        geo: {
          lat: '',
          lng: '',
        },
      },
    };

    this.userService.createUser(newUser).subscribe({
      next: () => {
        this.isSubmitting = false;
        alert('User was created');
      },
      error: () => {
        this.isSubmitting = false;
        alert('User was not created');
      },
    });
  }
}
