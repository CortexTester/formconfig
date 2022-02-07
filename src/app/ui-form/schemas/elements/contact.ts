import {Element} from "./element";

export const CONTACT = (key=undefined, label, required=false) => ({
  key: key,
  type:'auto-hide',
  hideExpression: (model) => { if(!required) return  !model || !model[key]}, //to hide myself if not required in partyLegalEntity
  templateOptions: {
    label: label,
    required: required
  },
  fieldGroup: [
    Element.ElementHideWhenEmpty('email', 'email', null, 'email'),
    Element.Element('telephone', 'phone number', true, 'tel'),
    Element.ElementHideWhenEmpty("telefax", "telefax", )
  ]
})
