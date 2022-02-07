import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-fieldset',
  template: `
    <div class="{{ to.fieldGroupClassName}} ">
      <fieldset class="flex-1 border p-2">
        <legend class="float-none w-auto p-2">{{ to.label }}</legend>
        <ng-container #fieldComponent></ng-container>
      </fieldset>

    </div>
  `,
})
export class FieldsetWrapperComponent extends FieldWrapper {
  @ViewChild('fieldComponent', { read: ViewContainerRef })
  fieldComponent: ViewContainerRef;
}
