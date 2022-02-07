import {Field} from '../helpers/fields';
import {
  NAME,
  EMAIL,
  COUNTRIES,
  MESSAGE,
  MONEY_INPUT,
  PERCENTAGE_INPUT,
} from './form-elements';
// import {ADDRESS, UBL_ADDRESS} from './form-groups/address';
import {LEVEL02} from "./elements/level02";
import {PARTY} from "./groups/party";
// import {CONTACT} from "./elements/contact";

export const FLEX_FORM = (disabled = false) => ({
  id: 'FLEX',
  template: [
    // ADDRESS('billing', disabled, ''),
    // UBL_ADDRESS("ubl address"),
    // CONTACT("ubl contact")
    PARTY('party1', false, 'flex-1')
  ],
});
