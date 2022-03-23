import {FieldType} from "@ngx-formly/core";
import {TimepickerConfig} from "ngx-bootstrap/timepicker";
import {Component} from "@angular/core";
import {BsDatepickerConfig} from "ngx-bootstrap/datepicker";

export function getTimepickerConfig(): TimepickerConfig {
  return Object.assign(new TimepickerConfig(), {
    hourStep: 1,
    minuteStep: 10,
    showMeridian: true,
    showSpinners: false,
    readonlyInput: false,
    mousewheel: true,
    showMinutes: true,
    showSeconds: false
  });
}

@Component({
  selector: 'app-formly-timepicker',
  template: `
    <div class="display-flex">
      <input
        type="text"
        class="form-control calendar"
        placement="bottom"
        bsDatepicker
        [formControl]="formControl"
        [formlyAttributes]="field"
        #dobDate="bsDatepicker"
        [bsConfig]="bsConfig"
        placeholder="YYYY-MM-DD"
        [class.is-invalid]="showError" class="flex-2">
      <timepicker [formControl]="formControl" class="flex-1"></timepicker>
    </div>

  `,
  providers: [{ provide: TimepickerConfig, useFactory: getTimepickerConfig }]
})
export class TimePickerTypeComponent extends FieldType {
  bsConfig: Partial<BsDatepickerConfig> = {
    dateInputFormat: 'YYYY-MM-DD',
    showWeekNumbers: false,
    containerClass: 'theme-dark-blue'
  };
}
