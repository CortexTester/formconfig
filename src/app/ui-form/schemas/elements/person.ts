import {Element} from "./element";

export const PERSON = (key = undefined, label, required = true) => ({
  key: key,
  type: 'auto-hide',
  hideExpression: (model) => {
    if (!required) return !model || !model[key]
  }, //to hide myself if not required, such as in partyLegalEntity case
  templateOptions: {
    required: required
  },
  fieldGroup: [
    Element.Element("firstName", true, label),
    Element.ElementHideWhenEmpty('familyName'),
    Element.ElementHideWhenEmpty('jobTitle'),
    Element.ElementHideWhenEmpty('middleName')
  ]
})
