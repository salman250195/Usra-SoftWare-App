import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm!: UntypedFormGroup;

  constructor(
              private fb: UntypedFormBuilder,
              private http: HttpClient, 
              private router: Router 
            ) { }

  contact = {
    name: '',
    from_email: '',
    phone: '',
    subject: '',
    message: ''
  };

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      // You can integrate email API here
      alert('Thank you! Your message has been sent.');
      this.verifyEmail(this.contactForm.value);
      this.contactForm.reset();
    }
  }
  
  sendEmail(contactForms: any) {
    const templateParams = {
      name: this.contact.name,
      from_email: this.contact.from_email,
      phone: this.contact.phone,
      subject: this.contact.subject,
      message: this.contact.message,
    };
    console.log('templateParams : ' , templateParams);
    
    emailjs.send('service_25jodlf', 'template_owbcmr7', templateParams, 'WMluz9wpAPeqs8iSN')
    .then((response: EmailJSResponseStatus) => {
      console.log('SUCCESS!', response.status, response.text);
      // alert('Message Sent Successfully!');
      contactForms.reset();
      this.router.navigate(['/shared/thank-you']);
      }, (error: any) => {
        console.log('FAILED...', error);
        alert('Message Failed to Send.');
      });
  }


  verifyEmail(email: any) {
    console.log('email : ' , email);
    let clientEmail = email.email;
    console.log('clientEmail : ' , clientEmail);
    
  const apiKey = 'YOUR_API_KEY';
  const url = `https://api.kickbox.com/v2/verify?email=${clientEmail}&apikey=${apiKey}`;

  this.http.get(url).subscribe((response: any) => {
    if (response.result === 'deliverable') {
      console.log('Valid email');
    } else {
      console.log('Invalid email');
    }
  });
}

}
