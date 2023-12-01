import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormItem } from 'src/app/interface/common/form/form-item';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() formItems: FormItem[];
  @Input() payload: any;
  @Input() submitText: string;
  @Input() allowInputClear: boolean = false;

  @Output() emitPayload: EventEmitter<any> = new EventEmitter();

  messageFieldRequired: boolean = false;

  constructor() {}

  ngOnInit() {}

  emitFormValues() {
    this.messageFieldRequired = false;
    if (this.checkRequiredFields()) {
      this.messageFieldRequired = false;
      this.emitPayload.emit(this.payload);
    } else this.messageFieldRequired = true;
  }

  checkRequiredFields() {
    let check = true;
    this.formItems.forEach((item) => {
      if (this.emptyRequiredField(item) || !this.checkMailFormat(item))
        check = false;
    });
    return check;
  }

  emptyRequiredField(item: FormItem): boolean {
    return (
      item.required && (!this.payload[item.id] || this.payload[item.id] == "")
    );
  }

  checkMailFormat(item: FormItem) {
    if (item.inputType == "email") {
      let mailFormatRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!this.payload[item.id].match(mailFormatRegex)) return false;
    }
    return true;
  }

  removeErrorBorder(event: any) {
    event.target.classList.remove("border-danger");
  }

  setErrorBorder(event: any, item: FormItem) {
    if (
      (this.messageFieldRequired && this.emptyRequiredField(item)) ||
      !this.checkMailFormat(item)
    )
      event.target.classList.add("border-danger");
    if (this.checkRequiredFields()) this.messageFieldRequired = false;
  }
}
