import {ADDRESS} from "../elements/address";
import {CONTACT} from "../elements/contact";
import {ID} from "../elements/id";
import {CODE} from "../elements/code";
import {PERSON} from "../elements/person";
import {Element} from "../elements/element";
import {LEGALENTITY} from "../elements/partyLegalEntity";
import {TAXSCHEMA} from "../elements/partyTaxSchema";
import {toStartCase} from "../../helpers/utils";

export const PARTY = (key) => ({
  key: key,
  wrappers: ['panel'],
  className: 'flex-1',
  templateOptions: {
    label: toStartCase(key),
  },

  fieldGroup: [
    Element.Element("partyName", true, "name"),
    {
      key: 'partyIdentification',
      type: 'repeat',
      templateOptions: {
        addText: 'add party id',
        required: true,
        label: 'party id'
      },
      fieldArray: {
        fieldGroup: [
          ID(undefined, 'party id'),
        ]
      },
    },
    {
      key: 'endpointId',
      type: 'repeat',
      templateOptions: {
        addText: 'add endpoint',
        label: 'endpoint'
      },
      fieldArray: {
        fieldGroup: [
          CODE(undefined, 'endpoint code'),
        ]
      },
    },
    {
      key: 'contact',
      type: 'repeat',
      templateOptions: {
        addText: 'add contact',
        label: 'contact',
      },
      fieldArray: {
        fieldGroup: [
          CONTACT(undefined, 'contact'),
        ]
      },
    },
    {
      key: 'partyLegalEntity',
      type: 'repeat',
      templateOptions: {
        label: 'legal entity',
        addText: 'add legal entity',
      },
      fieldArray: {
        fieldGroup: [
          LEGALENTITY()
        ]
      },
    },
    {
      key: 'person',
      type: 'repeat',
      templateOptions: {
        addText: 'add person',
        label: 'person'
      },
      fieldArray: {
        fieldGroup: [
          PERSON(undefined, 'person'),
        ]
      },
    },
    {
      key: 'partyTaxScheme',
      type: 'repeat',
      templateOptions: {
        label: 'tax schema',
        addText: 'add tax schema',
      },
      fieldArray: {
        fieldGroup: [
          TAXSCHEMA()
        ]
      },
    }
  ]
})
