import {Component} from '@angular/core';
import {FieldArrayType, FormlyFieldConfig} from '@ngx-formly/core';
import {clone} from "../helpers/utils";

@Component({
  selector: 'formly-repeat-section',
  template: `
    <div style="margin-bottom: 3px">
      <div *ngFor="let field of field.fieldGroup; let i = index;" class="display-flex">
        <fieldset class="flex-1 border p-2 flex-1">
          <legend class="float-none w-auto p-2">{{to.label + " " + (i + 1) }}</legend>
          <formly-field [field]="field" ></formly-field>
        </fieldset>
        <div class="justify-content-end mt-4 pl-2">
          <button class="btn btn-danger" type="button" (click)="remove(i)" [disabled]="field.disabled">
            <span class="glyphicon glyphicon-trash"></span>
          </button>
        </div>
      </div>
      <div>
        <button class="btn btn-primary mt-2" type="button" (click)="add()">{{ to.addText }}</button>
      </div>
    </div>
  `,
})
export class RepeatTypeComponent extends FieldArrayType {
  onPopulate(field: FormlyFieldConfig) {
    super.onPopulate(field)
    if (field.templateOptions.required && Array.isArray(field.model) && field.model.length === 0) {
      const f = {
        ...clone(field.fieldArray),
        key: "0",
        disabled : true
      };
      field.fieldGroup.push(f);
    }
  }
}


