import {ADDRESS} from "../elements/address";
import {CONTACT} from "../elements/contact";
import {ID} from "../elements/id";
import {CODE} from "../elements/code";
import {PERSON} from "../elements/person";
import {Element} from "../elements/element";
import {LEGALENTITY} from "../elements/partyLegalEntity";

export const PARTY = (key, disabled, className) => ({
  key: key,
  className: className,
  wrappers: ['panel'],
  templateOptions: {
    label: key,
  },

      fieldGroup: [
        Element.Element("partyName", "name", true),
        {
          key: 'partyIdentification',
          type: 'repeat',
          templateOptions:{
            addText: 'add party id',
            required: true,
            label:'party id'
          },
          fieldArray: {
            fieldGroup: [
              ID(undefined, 'party id', true),
            ]
          },
        },
        {
          key: 'endpointId',
          type: 'repeat',
          templateOptions:{
            addText: 'add endpoint',
            label: 'endpoint'
          },
          fieldArray: {
            fieldGroup: [
              CODE(undefined, 'endpoint code', true),
            ]
          },
        },
        {
          key: 'contact',
          type: 'repeat',
          templateOptions:{
            addText: 'add contact',
            label: 'contact',
          },
          fieldArray: {
            fieldGroup: [
              CONTACT('contact', 'contact', true),
            ]
          },
        },
        {
          key: 'partyLegalEntity',
          type: 'repeat',
          templateOptions:{
            label: 'legal entity',
            addText: 'add legal entity',
          },
          fieldArray: {
            fieldGroup: [
              LEGALENTITY()
            ]
          },
        }
      ]

})