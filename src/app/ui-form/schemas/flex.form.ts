import {PARTY} from "./groups/party";
import {ORDER} from "./doc/order";

export const FLEX_FORM = ()=>{return getOrder()}

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

