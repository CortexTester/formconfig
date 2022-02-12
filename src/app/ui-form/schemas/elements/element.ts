import {FormlyFieldConfig, FormlyTemplateOptions} from "@ngx-formly/core";
import {toLowerCase, toStartCase} from "../../helpers/utils";

export class Element {
  public static Element(
    key: string,
    required = false,
    label?: string,
    type = 'text',
    templateOptions?: FormlyTemplateOptions,
    options?: any,
    disabled = false,
    hide = false,
    className = 'flex-1'
  ): FormlyFieldConfig {
    return {
      key: key,
      type: 'input',
      wrappers: ['field-horizontal'],
      templateOptions:
        {
          ...templateOptions, ...
            {
              type: type,
              label: label ?? toStartCase(key),
              placeholder: `enter ${label ?? toLowerCase(key)}`,
              required: required,
              hide: hide,
              disabled: disabled,
              className: className
            }
        },
      options: options
    };
  }

  public static ElementHideWhenEmpty(
      key: string,
      label?: string,
      templateOptions?: FormlyTemplateOptions,
      type = 'text'
  ): FormlyFieldConfig {
      return {
        key: key,
        type: 'input',
        wrappers: ['field-horizontal'],
        hideExpression: (model) => !model || !model[key],
        templateOptions:
          {
            ...templateOptions, ...{
              type: type,
              label: label ?? toStartCase(key),
              placeholder: `enter ${label ?? toLowerCase(key)}`,
              className: 'flex-1',
            }
          }
      };
  }
}




