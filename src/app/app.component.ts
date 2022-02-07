import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormlyFieldConfig} from "@ngx-formly/core";
import {FormlyService} from "./ui-form/formly.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'formConfig';

  constructor(private formlyService: FormlyService) {
  }

  public form = new FormGroup({});
  public fields: FormlyFieldConfig[]
  public model = {}

  submit() {
    console.log(this.form.value)
  }

  modelChange($event: any) {
    console.log()
  }

  ngOnInit(): void {
    // this.formlyService.getData().subscribe(data => {
    //   this.model = data
    // })
    // this.formlyService.getDefaultForm().subscribe(data => {
    //     this.fields = data
    //   },
    //   error => {
    //     console.log(error)
    //   })
    // this.formlyService.getLocalData().subscribe(data => {
    //   this.model = data
    // })
    //   this.formlyService.getTestForm().subscribe(data => {
    //     this.fields = data
    //   },
    this.formlyService.getFLEXForm().subscribe(data => {
        this.fields = data
      },
      error => {
        console.log(error)
      })
  }
}
