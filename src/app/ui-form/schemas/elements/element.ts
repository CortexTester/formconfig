import {FormlyFieldConfig, FormlyTemplateOptions} from "@ngx-formly/core";

export class Element {
  public static Element(
    key: string,
    label?: string,
    required = false,
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
              label: label ?? key,
              placeholder: `enter ${label ?? key}`,
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
              label: label ?? key,
              placeholder: `${label ?? key}`,
              className: 'flex-1',
            }
          }
      };
  }

  // //address
  // public static Number = (): FormlyFieldConfig => {
  //   return this.Element('buildingNumber', 'suite')
  // }
  // public static Street = (): FormlyFieldConfig => {
  //   return this.Element('streetName', "street")
  // }
  // public static City = (): FormlyFieldConfig => {
  //   return this.Element('cityName', 'city')
  // }
  // public static Province = (): FormlyFieldConfig => {
  //   return this.Element('countrySubEntity', 'province')
  // }
  //
  // public static Country = (): FormlyFieldConfig => {
  //   return this.Element('country')
  // }
  //
  // public static POSTCODE = (): FormlyFieldConfig => {
  //   return this.Element('country')
  // }


  // //id
  // public static Id = (): FormlyFieldConfig => {
  //   return this.Element('idContent', 'id', true)
  // }
  //
  // //code
  // public static Code = (): FormlyFieldConfig => {
  //   return this.Element('codeContent', 'id', true)
  // }

  //contact
  // public static Email = (): FormlyFieldConfig => {
  //   return this.Element('email', 'email', false, 'email')
  // }
  //
  // public static Telephone = (): FormlyFieldConfig => {
  //   return this.Element('telephone', 'phone number', false, 'tel')
  // }

}




