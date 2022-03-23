import {Injectable} from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
// import {Field} from './helpers/fields';
// import { DEFAULT_FORM } from './schemas/default.form';
// import {FORMS_VALUES} from './schemas'
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {FLEX_FORM} from './flex.form';
import {Element} from '../ui-form/schemas/elements/element';
import {ORDER} from '../ui-form/schemas/doc/order';

import {ACTIVITYPROPERTY} from '../ui-form/schemas/level1/ActivityProperty';
import {CATALOGUEREFERENCE} from '../ui-form/schemas/level1/CatalogueReference';
import {map} from 'rxjs/operators';

declare var required: any;
declare var key: any;

@Injectable({
  providedIn: 'root',
})
export class FormlyService {
  formUrl = 'http://localhost:4021/form';
  dataUrl = 'http://localhost:4021/data';

  constructor(private http: HttpClient) {}

  // getTestForm = ()=>this.getDefaultForm()
  getTestForm = () => this.getTestFormFromFile();
  // getTestForm = () => this.getFLEXForm();

  getUblBasic = () =>
    of([
      // AMOUNTTYPE('amount'),
      // BINARYOBJECTTYPE('binary'),
      // CODETYPE('code'),
      // DATETIMETYPE('datetime'),
      // GRAPHICTYPE('graph'),
      // IDENTIFIERTYPE('id'),
      // INDICATORTYPE('indicator'),
      // NAMETYPE('name'),
      // PERCENTTYPE('percent'),
      // PICTURETYPE('picture'),
      // MEASURETYPE('uom'),
      // NUMERICTYPE('no'),
      // QUANTITYTYPE('quantity'),
      // RATETYPE('rate'),
      // TEXTTYPE('text'),
      // TIMETYPE('time'),
      // VALUETYPE('value'),
    ]);

  getUblLevel1 = () =>
    of([
      CATALOGUEREFERENCE('test1'),
      // ACTIVITYPROPERTY("test")
    ]);

  // getTestFieldSet = () => of([{
  //   key:"test",
  //   type:""
  // }])

  getTestAutoHide = () =>
    of([
      {
        key: 'test',
        type: 'auto-hide',
        hideExpression: model => {
          if (!true) return !model || !model['key'];
        }, //to hide myself if not required, such as in partyLegalEntity case
        templateOptions: {
          required: true,
        },
        fieldGroup: [
          Element.Element('codeContent', true, 'test'),
          // Element.ElementHideWhenEmpty('codeContent',  "test"),
          // Element.ElementHideWhenEmpty('codeListIdentifier', 'code type'),
          // Element.ElementHideWhenEmpty('codeListAgencyIdentifier', 'code agency'),
          // ACTIVITYPROPERTY("test")
          CATALOGUEREFERENCE('test1'),
        ],
      },
    ]);

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
      buyerCustomerParty: {
        contact: [
          {
            email: 'al@cbx.com',
            telephone: '403-123-4567',
          },
        ],
        partyIdentification: [
          {
            idContent: 'party01',
            idSchemeIdentifier: 'CBX',
          },
          {
            idContent: '987456321',
            idSchemeIdentifier: 'DUNS',
          },
        ],
        partyLegalEntity: [
          {
            companyId: {
              idContent: '5512895671',
              idSchemeIdentifier: 'Alberta Business Registry',
              idAgencyIdentifier: '12',
            },
            registrationAddress: {
              buildingNumber: '123',
              streetName: '8 Ave SW',
              cityName: 'Calgary',
              countrySubEntity: 'Alberta',
              country: 'Canada',
            },
            registrationName: 'Alpine Service Inc.',
          },
        ],
        partyName: 'party01',

        postalAddress: [
          {
            buildingNumber: '123',
            streetName: '8 Ave SW',
            cityName: 'Calgary',
            countrySubEntity: 'Alberta',
            country: 'Canada',
          },
        ],
      },
    });
  }

  public getLocalData(): Observable<any> {
    return of({
      party1: {
        partyName: 'party01',
        contact: [
          {
            email: 'al@cbx.com',
            telephone: '403-123-4567',
          },
        ],
        partyIdentification: [
          {
            idContent: 'party01',
            idSchemeIdentifier: 'CBX',
          },
          {
            idContent: '987456321',
            idSchemeIdentifier: 'DUNS',
          },
        ],
        endpointId: [
          {
            codeContent: 'http://test.com',
            codeListIdentifier: 'website',
          },
          {
            codeContent: 'http://api/aws.com',
            codeListIdentifier: 'api',
          },
        ],
      },
    });
  }

  public getTestFormFromFile(): Observable<FormlyFieldConfig[]> {
    // return of(testForm)
    const convertStringToFun = (form: FormlyFieldConfig): FormlyFieldConfig => {
    //   if(form.type == 'input' ){
    //     form.hideExpression = true
    //   }

    //   if(form.type == 'auto-hide'){
    //     form.hideExpression = true
    // }


      // if (
      //   form.hideExpression ==
      //   '(model) => { if (!required) return !model || !model[key]}'
      // ) {
      //   form.hideExpression = model => {
      //     if (!required) return !model || !model[key];
      //   };
      // }
      // if (form.hideExpression == 'model => !model || !model[key]') {
      //   form.hideExpression = model => !model || !model[key];
      // }
      // if (form.fieldGroup) {
      //   form.fieldGroup.forEach(x => (x = convertStringToFun(x)));
      // }
      return form;
    };
    return this.http.get<FormlyFieldConfig[]>('./assets/testForm.json').pipe(
      map(data => {
        data.forEach(x => (x = convertStringToFun(x)));
        return data;
      })
    );
  }

  public getOrderData(): Observable<any> {
    return of({
      PO: {
        cbxVersionId: '0.1',
        uuid: 'ca7691b4-d32f-4788-8f01-f14cddbc972d',
        orderNumber: 'test order 01',
        issueDateTime: '2021-09-19T09:27:30+07:00',
        documentCurrencyCode: 'USD',
        buyerCustomerParty: {
          contact: [
            {
              email: 'test@test.com',
              telefax: '123-456-6789',
              telephone: '987-654-3210',
            },
            {
              email: 'test@test.com',
              telefax: '123-456-6789',
              telephone: '987-654-3210',
            },
          ],
          endpointId: [
            {
              codeContent: 'https://cbx.com/getCode',
              codeListIdentifier: 'web site',
              codeListAgencyIdentifier: 'w3',
            },
          ],
          partyIdentification: [
            {
              idContent: 'party01',
              idSchemeIdentifier: 'CBX',
            },
            {
              idContent: '987456321',
              idSchemeIdentifier: 'DUNS',
            },
          ],
          partyLegalEntity: [
            {
              companyId: {
                idContent: '5512895671',
                idSchemeIdentifier: 'Alberta Business Registry',
                idAgencyIdentifier: '12',
              },
              registrationAddress: {
                buildingNumber: '123',
                streetName: '8 Ave SW',
                cityName: 'Calgary',
                countrySubEntity: 'Alberta',
                country: 'Canada',
                postalZone: 'T3L 9P4',
                additionalStreetName: 'near by Bow Vallie',
                department: 'gym dept',
                postbox: 'POX123',
              },
              registrationName: 'Alpine Service Inc.',
            },
          ],
          partyName: 'party01',
          partyTaxScheme: [
            {
              companyId: {
                idContent: 'SE1234567801',
                idSchemeIdentifier: 'FreeText',
              },
              taxScheme: {
                idContent: 'AVT',
                idSchemeIdentifier: 'UN/ECE 5153',
                idAgencyIdentifier: '6',
              },
            },
            {
              companyId: {
                idContent: '1234567801',
                idSchemeIdentifier: 'FreeText',
              },
              taxScheme: {
                idContent: 'AVT',
                idSchemeIdentifier: 'UN/ECE 5153',
                idAgencyIdentifier: '6',
              },
            },
          ],
          person: [
            {
              firstName: 'alex',
              familyName: 'smith',
              jobTitle: 'manager',
              middleName: 'will',
            },
            {
              firstName: 'alex',
              familyName: 'smith',
              jobTitle: 'manager',
              middleName: 'will',
            },
          ],
          postalAddress: [
            {
              buildingNumber: '123',
              streetName: '8 Ave SW',
              cityName: 'Calgary',
              countrySubEntity: 'Alberta',
              country: 'Canada',
              postalZone: 'T3L 9P4',
              additionalStreetName: 'near by Bow Vallie',
              department: 'gym dept',
              postbox: 'POX123',
            },
          ],
        },
        sellerSupplierParty: {
          partyIdentification: [
            {
              idContent: 'party02',
              idSchemeIdentifier: 'CBX',
            },
            {
              idContent: '123456789',
              idSchemeIdentifier: 'DUNS',
            },
          ],
          partyName: 'party02',
        },
        orderLine: [
          {
            id: {
              idContent: '1',
              idSchemeIdentifier: 'FreeText',
            },
            item: {
              additionalItemProperty: [
                {
                  name: 'Service Type',
                  value: 'Truck  Solvant',
                },
              ],
              description: 'ship water to fields',
              name: 'Hauling Service',
              sellersItemIdentification: [
                {
                  idContent: 'SKU00001',
                  idSchemeIdentifier: 'ServiceNo',
                },
              ],
            },
            quantity: {
              quantityContent: 1,
              quantityUnitCode: 'Hour',
            },
            price: {
              priceAmount: {
                amountContent: 50.0,
                amountCurrencyIdentifier: 'USD',
              },
            },
            partialDeliveryIndicator: false,
          },
        ],
        accountingCostCode: [
          {
            codeContent: 'AFE1',
            codeListIdentifier: 'FreeText',
            codeListAgencyIdentifier: 'AFE',
          },
        ],
        additionalDocumentReference: [
          {
            attachment: [
              {
                externalReference: 'thhps://local.cbx.com/att/att01.pdf',
              },
              {
                embeddedDocumentBinaryObject: {
                  binaryObjectContent:
                    'UjBsR09EbGhjZ0dTQUxNQUFBUUNBRU1tQ1p0dU1GUXhEUzhi',
                  binaryObjectMimeCode: 'application/pdf',
                },
              },
            ],
            documentType: 'timesheet',
            id: {
              idContent: 'Att01',
              idSchemeIdentifier: 'FreeText',
            },
          },
        ],
        allowanceCharge: [
          {
            allowanceChargeReason: 'Transport documents',
            amount: {
              amountContent: 100.0,
              amountCurrencyIdentifier: 'USD',
            },
            baseAmount: {
              amountContent: 0.0,
              amountCurrencyIdentifier: 'USD',
            },
            chargeIndicator: false,
            multiplierFactorNumeric: 0.0,
          },
        ],
        anticipatedMonetaryTotal: {
          allowanceTotalAmount: {
            amountContent: 100.0,
            amountCurrencyIdentifier: 'USD',
          },
          chargeTotalAmount: {
            amountContent: 100.0,
            amountCurrencyIdentifier: 'USD',
          },
          lineExtensionAmount: {
            amountContent: 6225.0,
            amountCurrencyIdentifier: 'USD',
          },
          payableAmount: {
            amountContent: 6225.0,
            amountCurrencyIdentifier: 'USD',
          },
          payableRoundingAmount: {
            amountContent: 0.0,
            amountCurrencyIdentifier: 'USD',
          },
          prepaidAmount: {
            amountContent: 0.0,
            amountCurrencyIdentifier: 'USD',
          },
          taxExclusiveAmount: {
            amountContent: 0.0,
            amountCurrencyIdentifier: 'USD',
          },
          taxInclusiveAmount: {
            amountContent: 0.0,
            amountCurrencyIdentifier: 'USD',
          },
        },
        contract: [
          {
            id: {
              idContent: 'test contract 01',
              idSchemeIdentifier: 'FreeText',
            },
            contractType: 'FreeText',
          },
        ],
        delivery: [
          {
            deliveryLocation: {
              address: {
                buildingNumber: '123',
                streetName: '8 Ave SW',
              },
            },
            deliveryParty: {
              partyIdentification: [
                {
                  idContent: 'Party03',
                  idSchemeIdentifier: 'CBX',
                },
              ],
              partyName: 'Swedish trucking',
            },
            deliveryTerms: [
              {
                specialTerms: 'FOT',
              },
            ],
          },
        ],
        note: 'This is Order type unit test',
        orderDocumentReference: [
          {
            id: {
              idContent: 'RejectedOrder123',
              idSchemeIdentifier: 'FreeText',
            },
          },
        ],
        originatorDocumentReference: [
          {
            id: {
              idContent: 'MAFO',
              idSchemeIdentifier: 'FreeText',
            },
          },
        ],
        quotationDocumentReference: [
          {
            id: {
              idContent: 'test quotation 01',
              idSchemeIdentifier: 'CbxQuotationNumber',
            },
          },
          {
            id: {
              idContent: '1',
              idSchemeIdentifier: 'CbxQuotationId',
            },
          },
        ],
        taxTotal: [
          {
            taxAmount: {
              amountContent: 100.0,
              amountCurrencyIdentifier: 'USD',
            },
            taxSubtotal: [],
          },
        ],
        validityPeriod: {
          endDate: '2022-02-01T10:15:30+07:00',
          startDate: '2021-12-01T10:15:30+07:00',
        },
      },
    });
  }

  public gerFullPartyData(): Observable<any> {
    return of({
      buyerCustomerParty: {
        contact: [
          {
            email: 'test@test.com',
            telefax: '123-456-6789',
            telephone: '987-654-3210',
          },
          {
            email: 'test@test.com',
            telefax: '123-456-6789',
            telephone: '987-654-3210',
          },
        ],
        partyIdentification: [
          {
            idContent: 'party01',
            idSchemeIdentifier: 'CBX',
          },
          {
            idContent: '987456321',
            idSchemeIdentifier: 'DUNS',
          },
        ],
        partyLegalEntity: [
          {
            companyId: {
              idContent: '5512895671',
              idSchemeIdentifier: 'Alberta Business Registry',
              idAgencyIdentifier: '12',
            },
            registrationAddress: {
              buildingNumber: '123',
              streetName: '8 Ave SW',
              cityName: 'Calgary',
              countrySubEntity: 'Alberta',
              country: 'Canada',
              postalZone: 'T3L 9P4',
              additionalStreetName: 'near by Bow Vallie',
              department: 'gym dept',
              postbox: 'POX123',
            },
            registrationName: 'Alpine Service Inc.',
          },
        ],
        partyName: 'party01',
        partyTaxScheme: [
          {
            companyId: {
              idContent: 'SE1234567801',
              idSchemeIdentifier: 'FreeText',
            },
            taxScheme: {
              idContent: 'AVT',
              idSchemeIdentifier: 'UN/ECE 5153',
              idAgencyIdentifier: '6',
            },
          },
          {
            companyId: {
              idContent: '1234567801',
              idSchemeIdentifier: 'FreeText',
            },
            taxScheme: {
              idContent: 'AVT',
              idSchemeIdentifier: 'UN/ECE 5153',
              idAgencyIdentifier: '6',
            },
          },
        ],
        person: [
          {
            firstName: 'alex',
            familyName: 'smith',
            jobTitle: 'manager',
            middleName: 'will',
          },
          {
            firstName: 'alex',
            familyName: 'smith',
            jobTitle: 'manager',
            middleName: 'will',
          },
        ],
        postalAddress: [
          {
            buildingNumber: '123',
            streetName: '8 Ave SW',
            cityName: 'Calgary',
            countrySubEntity: 'Alberta',
            country: 'Canada',
            postalZone: 'T3L 9P4',
            additionalStreetName: 'near by Bow Vallie',
            department: 'gym dept',
            postbox: 'POX123',
          },
        ],
        endpointId: [
          {
            codeContent: 'https://cbx.com/getCode',
            codeListIdentifier: 'web site',
            codeListAgencyIdentifier: 'w3',
          },
        ],
      },
    });
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
