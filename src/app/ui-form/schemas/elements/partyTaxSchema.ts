import {Element} from "./element";
import {ID} from "./id";
import {ADDRESS} from "./address";

export const TAXSCHEMA = () => ({
  type: 'auto-hide',
  templateOptions: {
    show: true
  },
  fieldGroup: [
    ID('companyId', 'tax company id', true),
    ID('taxScheme', 'tax schema', true),
  ]
})
