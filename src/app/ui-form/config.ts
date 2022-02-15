import {
  maxlengthValidationMessage,
  maxValidationMessage,
  minlengthValidationMessage,
  minValidationMessage
} from './helpers/validations-messages';
import {maximumMoneyValidation} from './helpers/validators';

// import {RepeatSectionComponent} from './types/repeat-section.component';
import {FormlyFieldInputMoney} from './types/money.component';
// import { FormlyFieldInputPercentage } from './types/percentage.component';
// import { ErrorWrapperComponent } from './wrappers/error.component';
import {ConfigOption} from "@ngx-formly/core";
import {PanelWrapperComponent} from "./wrappers/panel-wrapper.components";
import {ErrorWrapperComponent} from "./wrappers/error.components";
import {FormlyFieldInputPercentage} from "./types/percentage.components";
import {FieldsetWrapperComponent} from './wrappers/fieldset-wrapper.componet';
import {HorizontalWrapper} from "./wrappers/horizontal-wrapper.component";
import {FormlyHideComponent} from "./types/autoHide.compoent";
import {RepeatTypeComponent} from "./types/repeat.component";
import {FormlyFieldTabComponent} from "./types/tab";
import {FormlyFieldTabsetComponent} from "./types/tabset";
import {FormlyWrapperTabComponent} from "./wrappers/tab";

export const config: ConfigOption = {
  validationMessages: [
    {name: 'required', message: 'This field is required'},
    {name: 'minlength', message: minlengthValidationMessage},
    {name: 'maxlength', message: maxlengthValidationMessage},
    {name: 'min', message: minValidationMessage},
    {name: 'max', message: maxValidationMessage},
    {name: 'maximumMoneyValidation', message: 'should be 100'}
  ],
  wrappers: [
    {name: 'panel', component: PanelWrapperComponent},
    {name: 'fieldset', component: FieldsetWrapperComponent},
    {name: 'error-on-top', component: ErrorWrapperComponent},
    {name: 'field-horizontal', component: HorizontalWrapper},
    { name: 'tab', component: FormlyWrapperTabComponent }
  ],
  types: [
    // {name: 'repeat02', component: RepeatSectionComponent},
    {name: 'money', component: FormlyFieldInputMoney},
    {name: 'percentage', component: FormlyFieldInputPercentage.name},
    {name: 'auto-hide', component: FormlyHideComponent},
    {name: 'repeat', component: RepeatTypeComponent},
    { name: 'tab', component: FormlyFieldTabComponent },
    { name: 'tabset', component: FormlyFieldTabsetComponent }
  ],
  validators: [
    {name: 'maximumMoneyValidation', validation: maximumMoneyValidation}
  ]
};
