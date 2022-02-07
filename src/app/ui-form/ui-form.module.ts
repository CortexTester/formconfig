import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ErrorWrapperComponent} from "./wrappers/error.components";
import {PanelWrapperComponent} from "./wrappers/panel-wrapper.components";
import {FormlyFieldInputMoney} from "./types/money.component";
import {FormlyFieldInputPercentage} from "./types/percentage.components";
import {RepeatSectionComponent} from "./types/repeat-section.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormlyModule} from "@ngx-formly/core";
import {FormlyBootstrapModule} from "@ngx-formly/bootstrap";
import {TextMaskModule} from "angular2-text-mask";

import { config } from './config'
import { FieldsetWrapperComponent } from './wrappers/fieldset-wrapper.componet';
import {HorizontalWrapper} from "./wrappers/horizontal-wrapper.component";
import {FormlyHideComponent} from "./types/autoHide.compoent";
import {RepeatTypeComponent} from "./types/repeat.component";

@NgModule({
  declarations: [
    ErrorWrapperComponent,
    PanelWrapperComponent,
    FieldsetWrapperComponent,
    FormlyHideComponent,
    HorizontalWrapper,
    FormlyFieldInputMoney,
    FormlyFieldInputPercentage,
    RepeatSectionComponent,
    RepeatTypeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(config),
    FormlyBootstrapModule,
    TextMaskModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyBootstrapModule
  ],
})
export class UiFormModule { }
