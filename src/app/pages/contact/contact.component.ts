import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as emailjs from 'emailjs-com';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  emailForm: FormGroup;
  showSuccToaster: boolean = false;
  showErrToaster: boolean = false;

  constructor(private fb: FormBuilder) {
    emailjs.init('iELqlpggeNpltddPm');
    this.emailForm = this.fb.group({
      from_name: ['', Validators.required],
      subject: ['', Validators.required],
      email: ['', Validators.required],
      phone_number: ['', Validators.required],
      message: ['', Validators.required],
    })
  }

  sendEmail() {
    const templateParams = this.emailForm.value;
    emailjs.send('service_q9eahmu', 'template_nwvuxfk', templateParams).then((res) => {
      this.showSuccToaster = true;
      this.emailForm.reset();
      setTimeout(() => {
        this.showSuccToaster = false;
      }, 5000);
    }, (err)=> {
      console.error('Error sending email:', err);
      this.showErrToaster = true;
      setTimeout(() => {
        this.showErrToaster = false;
      }, 5000);      
    })

  }

}
