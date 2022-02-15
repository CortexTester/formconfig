import {Injectable} from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
// import {Field} from './helpers/fields';
// import { DEFAULT_FORM } from './schemas/default.form';
// import {FORMS_VALUES} from './schemas'
import {HttpClient} from "@angular/common/http";
import {Observable, of} from 'rxjs';
import {FLEX_FORM} from './schemas/flex.form';
import {Element} from "./schemas/elements/element";

@Injectable({
  providedIn: 'root'
})
export class FormlyService {

  formUrl = 'http://localhost:4021/form';
  dataUrl = 'http://localhost:4021/data';

  constructor(private http: HttpClient) {
  }

  public getDefaultForm() {
    return this.http.get<FormlyFieldConfig[]>(this.formUrl);
  }

  public getData() {
    return this.http.get(this.dataUrl);
  }

  public getFLEXForm(): Observable<FormlyFieldConfig[]> {
    // console.log(JSON.stringify(FLEX_FORM().template))
    return of(FLEX_FORM().template);
  }

  public getPartyTestData() {
    return of({
      "buyerCustomerParty": {
        "contact": [
          {
            "email": "al@cbx.com",
            "telephone": "403-123-4567"
          }
        ],
        "partyIdentification": [
          {
            "idContent": "party01",
            "idSchemeIdentifier": "CBX"
          },
          {
            "idContent": "987456321",
            "idSchemeIdentifier": "DUNS"
          }
        ],
        "partyLegalEntity": [
          {
            "companyId": {
              "idContent": "5512895671",
              "idSchemeIdentifier": "Alberta Business Registry",
              "idAgencyIdentifier": "12"
            },
            "registrationAddress": {
              "buildingNumber": "123",
              "streetName": "8 Ave SW",
              "cityName": "Calgary",
              "countrySubEntity": "Alberta",
              "country": "Canada"
            },
            "registrationName": "Alpine Service Inc."
          }
        ],
        "partyName": "party01",

        "postalAddress": [
          {
            "buildingNumber": "123",
            "streetName": "8 Ave SW",
            "cityName": "Calgary",
            "countrySubEntity": "Alberta",
            "country": "Canada"
          }
        ]
      }
    })
  }

  public getLocalData(): Observable<any> {
    return of({
      "party1": {
        "partyName": "party01",
        "contact": [
          {
            "email": "al@cbx.com",
            "telephone": "403-123-4567"
          }
        ],
        "partyIdentification": [
          {
            "idContent": "party01",
            "idSchemeIdentifier": "CBX"
          },
          {
            "idContent": "987456321",
            "idSchemeIdentifier": "DUNS"
          }
        ],
        "endpointId": [
          {
            "codeContent": "http://test.com",
            "codeListIdentifier": "website",
          },
          {
            "codeContent": "http://api/aws.com",
            "codeListIdentifier": "api",
          }
        ]
      }
    })
  }

  public getTestForm(): Observable<FormlyFieldConfig[]> {
    return of([{
      key: "cbxId",
      type: "auto-hide",
      className: "flex-1",
      templateOptions: {
        label: "cbxId",
        fieldGroupClassName: "display-flex"
      },
      fieldGroup: [
        Element.Element('idContent', true, 'id',),
        Element.Element("idSchemeIdentifier", ),
        Element.Element("idAgencyIdentifier", )
      ]
    }])
  }

  public gerFullPartyData():Observable<any> {
    return of({
        "buyerCustomerParty": {
          "contact": [
            {
              "email": "test@test.com",
              "telefax": "123-456-6789",
              "telephone": "987-654-3210"
            },
            {
              "email": "test@test.com",
              "telefax": "123-456-6789",
              "telephone": "987-654-3210"
            }
          ],
          "partyIdentification": [
            {
              "idContent": "party01",
              "idSchemeIdentifier": "CBX"
            },
            {
              "idContent": "987456321",
              "idSchemeIdentifier": "DUNS"
            }
          ],
          "partyLegalEntity": [
            {
              "companyId": {
                "idContent": "5512895671",
                "idSchemeIdentifier": "Alberta Business Registry",
                "idAgencyIdentifier": "12"
              },
              "registrationAddress": {
                "buildingNumber": "123",
                "streetName": "8 Ave SW",
                "cityName": "Calgary",
                "countrySubEntity": "Alberta",
                "country": "Canada",
                "postalZone": "T3L 9P4",
                "additionalStreetName": "near by Bow Vallie",
                "department": "gym dept",
                "postbox": "POX123"
              },
              "registrationName": "Alpine Service Inc."
            }
          ],
          "partyName": "party01",
          "partyTaxScheme": [
            {
              "companyId": {
                "idContent": "SE1234567801",
                "idSchemeIdentifier": "FreeText"
              },
              "taxScheme": {
                "idContent": "AVT",
                "idSchemeIdentifier": "UN/ECE 5153",
                "idAgencyIdentifier": "6"
              }
            },
            {
              "companyId": {
                "idContent": "1234567801",
                "idSchemeIdentifier": "FreeText"
              },
              "taxScheme": {
                "idContent": "AVT",
                "idSchemeIdentifier": "UN/ECE 5153",
                "idAgencyIdentifier": "6"
              }
            }
          ],
          "person": [
            {
              "firstName": "alex",
              "familyName": "smith",
              "jobTitle": "manager",
              "middleName": "will"
            },
            {
              "firstName": "alex",
              "familyName": "smith",
              "jobTitle": "manager",
              "middleName": "will"
            }
          ],
          "postalAddress": [
            {
              "buildingNumber": "123",
              "streetName": "8 Ave SW",
              "cityName": "Calgary",
              "countrySubEntity": "Alberta",
              "country": "Canada",
              "postalZone": "T3L 9P4",
              "additionalStreetName": "near by Bow Vallie",
              "department": "gym dept",
              "postbox": "POX123"
            }
          ],
          "endpointId": [
            {
              "codeContent": "https://cbx.com/getCode",
              "codeListIdentifier": "web site",
              "codeListAgencyIdentifier": "w3"
            }
          ]
        }
      }
    );
  }
  //
  // public getFormById(id: string, disabled = false) {
  //   return FORMS_VALUES(disabled)[id];
  // }
  //
  // private generateCleanConfiguration(clone: object[]) {
  //   return JSON.parse(JSON.stringify(clone));
  // }

  /*public getFormlyFieldConfig(): FormlyFieldConfig[] {
    return [
      Field.input('name', {
        label: 'Name',
        placeholder: 'Enter your name',
        required: true
      }),
      Field.input('email', {
        type: 'email',
        label: 'Email',
        placeholder: 'Enter your email',
        required: true
      }),
      Field.select('country', {
        label: 'Country',
        placeholder: 'Select your country',
        options: [
          { label: 'United States of America', value: 'USA' },
          { label: 'Colombia', value: 'COL' },
          { label: 'India', value: 'IND' }
        ],
        required: true,
      }, {
        defaultValue: '',
      }),
      Field.textarea('message',  {
        label: 'Message',
        placeholder: 'Enter a message',
        rows: 5,
        required: true
      }),
    ]
  }*/
}
