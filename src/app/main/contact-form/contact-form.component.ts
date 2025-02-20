import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
  standalone: false
})
export class ContactFormComponent {
  contactForm!: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder,
    //  private _EmailService: EmailService
    ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // this._EmailService.sendEmail(this.contactForm.value).subscribe({
      //   next: (response) => {
      //     console.log('Email sent successfully:', response);
      //     this.contactForm.reset(); // Clear the form
      //     this.successMessage = 'Message sent successfully!';
      //     this.errorMessage = null; // Clear any previous errors
      //   },
      //   error: (error) => {
      //     console.error('Error sending email:', error);
      //     this.errorMessage = 'Error sending message. Please try again later.';
      //     this.successMessage = null; // Clear any previous success messages
      //   }
      // });//skip for now
    }
  }
}
