import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ErrorWrapperComponent} from "./wrappers/error.components";
import {PanelWrapperComponent} from "./wrappers/panel-wrapper.components";
import {FormlyFieldInputMoney} from "./types/money.component";
import {FormlyFieldInputPercentage} from "./types/percentage.components";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormlyModule} from "@ngx-formly/core";
import {FormlyBootstrapModule} from "@ngx-formly/bootstrap";
import {TextMaskModule} from "angular2-text-mask";

import { config } from './config'
import { FieldsetWrapperComponent } from './wrappers/fieldset-wrapper.componet';
import {HorizontalWrapper} from "./wrappers/horizontal-wrapper.component";
import {FormlyHideComponent} from "./types/autoHide.compoent";
import {RepeatTypeComponent} from "./types/repeat.component";
import {TabsetComponent} from "./components/tabset/tabset.component";
import {TabComponent} from "./components/tab/tab.component";
import {FormlyFieldTabComponent} from "./types/tab";
import {FormlyFieldTabsetComponent} from "./types/tabset";
import {FormlyWrapperTabComponent} from "./wrappers/tab";
import {VisiblePipe} from "./components/tabset/visible.pipe";

@NgModule({
  declarations: [
    ErrorWrapperComponent,
    PanelWrapperComponent,
    FieldsetWrapperComponent,
    FormlyHideComponent,
    HorizontalWrapper,
    FormlyFieldInputMoney,
    FormlyFieldInputPercentage,
    RepeatTypeComponent,
    TabsetComponent,
    TabComponent,
    FormlyFieldTabComponent,
    FormlyFieldTabsetComponent,
    FormlyWrapperTabComponent,
    VisiblePipe,
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
