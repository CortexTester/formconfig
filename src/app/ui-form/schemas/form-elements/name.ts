import {Field} from '../../helpers/fields';
import {FormlyFieldConfig} from "@ngx-formly/core";

let startTyping = true;

export const NAME = (disabled = false, className = 'flex-1'): FormlyFieldConfig => {
  return {
    key: 'name',
    templateOptions: {
      label: 'Name',
      placeholder: 'Enter name',
      required: true,
      disabled: disabled,
      className: className
    }
  }
};
