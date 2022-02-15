import {toStartCase} from "../../helpers/utils";
import {ID} from "../elements/id";
import {Element} from "../elements/element";
import {PARTY} from "../groups/party";

export const ORDER = (key) => ({
  key: key,
  templateOptions: {
    label: toStartCase(key),
  },
  fieldGroup: [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          fieldGroup: [
            Element.Element('orderNumber', true),
            Element.Element('issueDateTime', true)
          ]
        },
        PARTY('buyerCustomerParty'),
        PARTY('sellerSupplierParty')
      ]
    },
    {
      type: 'tabset',
      className: 'd-block',
      fieldGroup: [
        {
          type: 'tab',
          templateOptions: {
            tabTitle: 'Primary',
          },
          fieldGroup: [
            {
              key: 'name',
              type: 'input',
              templateOptions: {
                label: 'Name'
              }
            }
          ],
          expressionProperties: {
            'templateOptions.tabHidden': 'model.hidePrimary === true'
          }
        },
        {
          wrappers: ['tab'],
          templateOptions: {
            tabTitle: 'Secondary'
          },
          fieldGroup: [
            {
              key: 'hobby',
              type: 'select',
              templateOptions: {
                label: 'Hobby',
                options: ['Biking', 'Hiking', 'Reading'].map(hobby => ({ label: hobby, value: hobby }))
              }
            }
          ],
          expressionProperties: {
            'templateOptions.tabDisabled': 'model.disableSecondary === true'
          }
        }
      ],
      // templateOptions: {
      //   activeTabChange: (tabTitle: string) => {
      //     this.options.formState.activeTab = tabTitle;
      //   }
      // }
    }

  ]
})
