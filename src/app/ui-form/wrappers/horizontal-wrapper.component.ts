import {Component} from '@angular/core';
import {FieldWrapper} from '@ngx-formly/core';

@Component({
  selector: 'horizontal-wrapper',
  template: `
    <div class="form-group display-flex">
      <label [attr.for]="id" class="flex-1" *ngIf="to.label">
        {{ to.label }}
        <span *ngIf="to.required && to.hideRequiredMarker !== true" class="text-danger">*</span>
      </label>
      <div class="flex-4">
        <ng-template #fieldComponent></ng-template>
        <div *ngIf="showError">
          <formly-validation-message [field]="field" class="text-danger"></formly-validation-message>
        </div>
      </div>

      <!--      <div *ngIf="showError" class="flex-1">-->
      <!--      -->
      <!--      </div>-->
    </div>
    <!--<div class="row mb-3">-->
    <!--  <label [attr.for]="id" class="col-sm-2 col-form-label" *ngIf="to.label">-->
    <!--    {{ to.label }}-->
    <!--    <ng-container *ngIf="to.required && to.hideRequiredMarker !== true">*</ng-container>-->
    <!--  </label>-->
    <!--  <div class="col-sm-7">-->
    <!--    <ng-template #fieldComponent></ng-template>-->
    <!--  </div>-->
    <!--  <div *ngIf="showError" class="col-sm-3 invalid-feedback d-block">-->
    <!--    <formly-validation-message [field]="field"></formly-validation-message>-->
    <!--  </div>-->
    <!--</div>-->
  `,
})
export class HorizontalWrapper extends FieldWrapper {
}
