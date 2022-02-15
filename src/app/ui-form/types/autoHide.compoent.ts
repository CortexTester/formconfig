import {Component, OnInit} from "@angular/core";
import {FieldType, FormlyExtension, FormlyFieldConfig} from "@ngx-formly/core";

@Component({
  selector: 'cbx-formly-hide',
  template: `
    <div class="display-flex">
      <div class="flex-1">
        <formly-field *ngFor="let f of field.fieldGroup" [field]="f"></formly-field>
      </div>
      <div class=" justify-content-end" *ngIf="extendable">

        <!--        <button class="btn btn-primary" type="button" (click)="onClick()">-->
        <!--          <div [ngClass]="{'glyphicon glyphicon-menu-up':isEditing, 'glyphicon glyphicon-menu-down': !isEditing}"></div>-->
        <!--        </button> -->
        <a style="color: blue" (click)="onClick()">
          <div [ngClass]="isEditing ? 'glyphicon glyphicon-menu-up' : 'glyphicon glyphicon-option-horizontal'"></div>
        </a>
      </div>
    </div>
  `
})
export class FormlyHideComponent extends FieldType implements OnInit {
  isEditing = false
  extendable = true

  private hideNotRequired() {
    this.field.fieldGroup.forEach((f) => {
      if (f.templateOptions?.required) {
        f.hideExpression = false
      } else if (this.model && this.model[f.key + '']) {
        f.hideExpression = false
      } else if (f.templateOptions?.show) {
        f.hideExpression = false
      } else {
        f.hideExpression = true
      }
    })
  }

  onClick() {
    console.log("***auto-hide onClick " + this.field.key)
    this.isEditing = !this.isEditing
    if (this.isEditing) {
      this.field.fieldGroup.forEach((f) => {
        f.hideExpression = false
      })
    } else {
      this.hideNotRequired();
    }
  }

  ngOnInit(): void {
    if (this.field.templateOptions.show) {
      this.extendable = false
    }
    this.hideNotRequired()
  }
}
