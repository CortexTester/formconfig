import {PARTY} from "../ui-form/schemas/groups/party";
import {ORDER} from "../ui-form/schemas/doc/order";

export const FLEX_FORM = ()=>{return getParty()}

function getOrder(){
  return {
    id: 'FLEX',
    template: [
      ORDER('PO')
    ],
  }
}

function getParty() {
  return {
    id: 'FLEX',
    template: [
      PARTY('buyerCustomerParty')
    ],
  }
};

