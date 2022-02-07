import {Element} from "./element";

export const PERSON = (key, label='', required = false, groupClassName = 'display-flex', className = 'flex-1') => ({
  key: key,
  wrappers: ['fieldset'],
  className: className,
  templateOptions: {
    label: key,
    fieldGroupClassName: groupClassName,
  },
  fieldGroup: [{
    type: 'auto-hide',
    fieldGroup: [
      Element.Element("firstName", 'first name', required),
      Element.ElementHideWhenEmpty('familyName', 'last name'),
      Element.ElementHideWhenEmpty('jobTitle', 'job title'),
      Element.ElementHideWhenEmpty('middleName', 'middle name')
    ]
  } ]
})
