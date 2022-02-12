import {Element} from "./element";

export const ID = (key = undefined, label, required = true) => ({
  key: key,
  type: 'auto-hide',
  hideExpression: (model) => {
    if (!required) return !model || !model[key]
  }, //to hide myself if not required, such as in partyLegalEntity case
  templateOptions: {
    required: required
  },
  fieldGroup: [
    Element.Element('idContent',  true, label),
    Element.ElementHideWhenEmpty("idSchemeIdentifier", "id type"),
    Element.ElementHideWhenEmpty("idAgencyIdentifier", "id agency"),
  ]
})
