import { Component, OnInit } from '@angular/core';
import {
  FieldType,
  FormlyExtension,
  FormlyFieldConfig,
} from '@ngx-formly/core';

@Component({
  selector: 'cbx-formly-hide',
  template: `
    <div class="display-flex">
      <div class="flex-1">
        <div *ngIf="foundRequiredField || isEditing || model">
          <formly-field
            *ngFor="let f of field.fieldGroup"
            [field]="f"
          ></formly-field>
        </div>
        <div *ngIf="!foundRequiredField && !isEditing && isDeepEmpty(model)">
          <div>{{ field.key }}</div>
        </div>
      </div>
      <div class="justify-content-end" *ngIf="extendable">
        <a style="color: blue" (click)="onClick()">
          <div
            [ngClass]="
              isEditing
                ? 'glyphicon glyphicon-menu-up'
                : 'glyphicon glyphicon-option-horizontal'
            "
          ></div>
        </a>
      </div>
    </div>
  `,
})
export class FormlyHideComponent extends FieldType implements OnInit {
  isEditing = false;
  extendable = true;
  foundRequiredField = false;

  private hideNotRequired() {
    this.field.fieldGroup.forEach((f) => {
      if (f.templateOptions?.required) {
        this.foundRequiredField = true;
        f.hideExpression = false;
      } else if (this.model && !this.isDeepEmpty(this.model[f.key + ''])) {
        f.hideExpression = false;
      } else if (f.templateOptions?.show) {
        f.hideExpression = false;
      } else {
        f.hideExpression = true;
      }
    });

    if (this.foundRequiredField && this.field.fieldGroup?.length <= 1) {
      this.extendable = false;
    }
  }

  onClick() {
    console.log('***auto-hide onClick ' + this.field.key);
    this.isEditing = !this.isEditing;
    if (this.isEditing) {
      this.field.fieldGroup.forEach((f) => {
        f.hideExpression = false;
      });
    } else {
      this.hideNotRequired();
    }
  }

  ngOnInit(): void {
    if (this.field.templateOptions.show) {
      this.extendable = false;
    }
    this.hideNotRequired();
  }

  // isEmpty(model): boolean {
  //   if (model) {
  //     return Object.values(model).every(x => (x === null || x === ''));
  //   }
  //   return true
  // }

  isDeepEmpty(model, emptyValues = [undefined, null, '']) {
    var i, len;
    for (i = 0, len = emptyValues.length; i < len; i++) {
      if (model === emptyValues[i]) {
        return true;
      }
    }
    if (typeof model === 'object') {
      for (const item of Object.values(model)) {
        if (!this.isDeepEmpty(item, emptyValues)) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
}
