import {Element} from "./element";

export const CODE = (key = undefined, label, required = true) => ({
  key: key,
  type: 'auto-hide',
  hideExpression: (model) => {
    if (!required) return !model || !model[key]
  }, //to hide myself if not required, such as in partyLegalEntity case
  templateOptions: {
    required: required
  },
  fieldGroup: [
    Element.Element('codeContent', true, label),
    Element.ElementHideWhenEmpty('codeListIdentifier', 'code type'),
    Element.ElementHideWhenEmpty('codeListAgencyIdentifier', 'code agency')
  ]
})
