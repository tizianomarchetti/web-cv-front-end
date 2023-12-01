import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interface/common/contact';
import { FormItem } from 'src/app/interface/common/form/form-item';
import { ContactForm } from 'src/app/interface/contact-form';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  formItems: FormItem[] = [];
  submitText: string;

  payload: ContactForm;

  loading: boolean = false;

  typeModale: string;
  actionModale: string;
  messageModale: string;

  socials: Contact[];

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.initForm();
    this.initPayload();

    this.appService.getJson('contact').subscribe((res: any) => {
      this.socials = res.filter(el => el.id !== 'residence' && el.id !== 'mail');
    })
  }

  initForm() {
    this.appService.getJson('contactFormItems').subscribe((res: any) => {
      this.formItems = res;
    })
    this.submitText = "form.action.send";
  }

  initPayload() {
    this.payload ={
      email: null,
      fullName: null,
      subject: null,
      message: null
    }
  }

  sendMail(form: ContactForm) {
    this.loading = true;
    this.actionModale = 'form.title.contactForm';
    this.appService.sendMail(form).subscribe((res: string) => {
      this.typeModale = 'success';
      this.messageModale = res;
      this.initPayload(); /** clear form fields */
      this.launchModal();
    }, () => {
      this.typeModale = 'danger';
      this.messageModale = 'form.error.contact';
      this.launchModal();
    })
  }

  launchModal() {
    this.loading = false;
    const btnModale = document.createElement("button");
    btnModale.setAttribute('data-bs-toggle', 'modal');
    btnModale.setAttribute('data-bs-target', '#modalDialog');
    document.body.appendChild(btnModale);
    btnModale.click();
    document.body.removeChild(btnModale);
  }
}
