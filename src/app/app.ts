import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Inputs } from './inputs/inputs';
import { Lists } from './lists/lists';
import { Dashboard } from './dashboard/dashboard';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    Inputs,
    Lists,
    RouterLink,
    Dashboard,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  ///GET HttP method
  products: any[] = [];
  // http = inject(HttpClient);
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getProduct();
  }
  errorMessage: string = '';
  getProduct() {
    this.http.get<any[]>('https://fakestoreapi.com/products').subscribe({
      next: (res) => {
        this.products = res;
      },
      error: (err) => {
        alert('Failed to error product');
        // this.errorMessage='failed to error Product';
      },
    });
  }
  /////post method
  updates: any[] = [];
  addProduct() {
    const productData = {
      id: this.updates.length + 1,
      title: 'new tshirt',
      price: 500,
    };

    this.http.post('https://fakestoreapi.com/products', productData).subscribe({
      next: (res) => {
        // alert('Product added successfully');
        this.updates.push(productData);
      },
      error: (err) => {
        alert('error on the add product');
      },
    });
  }
  editProduct(id: number) {
    console.log(id);
    this.http.get('https://fakestoreapi.com/products/'+id).subscribe({
      next: (res) => {
        console.log(res);
        
       alert(JSON.stringify(res));
      },
      error: (err) => {
        alert('Update has been Error');
      },
    });
  }
  /////put method
  updateProduct() {
    const updateProduct = {
      id: 1,
      title: 't-shirt',
      price: 700,
    };
    this.http.put('https://fakestoreapi.com/products/1', updateProduct).subscribe({
      next: (res) => {
        //alert('product updated');
        this.updates[0] = updateProduct;
      },
      error: (err) => {
        alert('Update has been Error');
      },
    });
  }
  /////Delete method
  deleteProduct(id: number) {
    this.http.delete('https://fakestoreapi.com/products/1').subscribe((res) => {
      //  alert('Product Deleted');
      this.updates.splice(0, 1);
    });
  }

  ///Reactive form
  ///noAdmin
  noAdmin(control: AbstractControl): ValidationErrors | null {
    if (control.value === 'admin' || control.value === 'Admin') {
      return { noAdmin: true };
    }
    return null;
  }

  //indianPhone number
  indianPhone(control: AbstractControl): ValidationErrors | null {
    const pattern = /^[6-9]\d{9}$/;
    if (control.value && !pattern.test(control.value)) {
      return { indianPhone: true };
    }
    return null;
  }

  ////gmail Only
  gmailOnly(control: AbstractControl): ValidationErrors | null {
    if (control.value && !control.value.endsWith('@gmail.com')) {
      return { gmailOnly: true };
    }
    return null;
  }
  /////password special characters
  specialChar(control: AbstractControl): ValidationErrors | null {
    const pattern = /[!@#$%^&*(),.?":{}|<>~]/;

    if (control.value && !pattern.test(control.value)) {
      return { specialChar: true };
    }

    return null;
  }
  /////confirm password
  matchPassword(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      return { passwordMismatch: true };
    }

    return null;
  }

  ////patch and set value()
  patchData() {
    this.userForm.patchValue({
      name: 'sanjay',
      age: 22,
    });
  }

  setData() {
    this.userForm.setValue({
      age: 23,
      phone: null,
      name: 'sanjay jaishankar',
      email: 'sanjay123@gmail.com',
      passwordGroup: {
        password: null,
        confirmPassword: null,
      },
      skills: [],
    });
  }

  ///formcontrol and formGroup
  userForm = new FormGroup({
    age: new FormControl<number | null>(null, [
      Validators.required,
      Validators.min(18),
      Validators.max(45),
    ]),
    phone: new FormControl('', [Validators.required, this.indianPhone]),
    name: new FormControl('', [Validators.required, this.noAdmin]),
    email: new FormControl('', [Validators.required, Validators.email, this.gmailOnly]),
    passwordGroup: new FormGroup(
      {
        password: new FormControl(null, [Validators.required, this.specialChar]),
        confirmPassword: new FormControl(null, [Validators.required]),
      },
      { validators: this.matchPassword },
    ),
    /////formArray
    skills: new FormArray([new FormControl('', Validators.required)]),
  }); ///formgroup end

  ///skills functions
  get skills(): FormArray {
    return this.userForm.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(new FormControl('', Validators.required));
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  submit() {
    console.log(this.userForm.value);
  }

  ////try catch error handling

  message = '';

  divide(a: number, b: number) {
    try {
      if (b === 0) {
        throw new Error('Cannot divide by 0');
      }

      const result = a / b;
      this.message = 'Result: ' + result;
    } catch (error: any) {
      this.message = error.message;
    }
  }

////////////show form
    showForm = false;

  product = [
    {
      id: 1,
      title: 'Shirt',
      price: 500,
      description: 'Cotton shirt',
      category: 'Clothes'
    }
  ];

  openForm() {
    this.showForm = true;
  }

  saveProduct(id: string, title: string, price: string, description: string, category: string) {
    const newProduct = {
      id: Number(id),
      title: title,
      price: Number(price),
      description: description,
      category: category
    };

    this.products.push(newProduct);
    this.showForm = false;
  }

}
