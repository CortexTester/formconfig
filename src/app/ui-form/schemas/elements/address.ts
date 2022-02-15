import {Element} from "./element";

export const ADDRESS = (key = undefined, label, required = true) => ({
  key: key,
  type: 'auto-hide',
  hideExpression: (model) => {
    if (!required) return !model || !model[key]
  }, //to hide myself if not required, such as in partyLegalEntity case
  templateOptions: {
    label: label,
    required: required
  },
  fieldGroup: [
    Element.Element('buildingNumber',  true, 'number'),
    Element.Element('streetName', true, "street"),
    Element.ElementHideWhenEmpty('cityName', 'city'),
    Element.ElementHideWhenEmpty('countrySubEntity', 'province'),
    Element.ElementHideWhenEmpty('country'),
    Element.ElementHideWhenEmpty('postalZone', 'postcode'),
    Element.ElementHideWhenEmpty('additionalStreetName', 'second address name'),
    Element.ElementHideWhenEmpty('postbox'),
  ]

})


