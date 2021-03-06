import {Element} from "./element";
import {ID} from "./id";
import {ADDRESS} from "./address";

export const LEGALENTITY = () => ({
  type:'auto-hide',
  fieldGroup: [
    Element.Element('registrationName',  true, 'registration name'),
    ID('companyId','registration company id', false),
    ADDRESS('registrationAddress', 'address',  false),
  ]
})
