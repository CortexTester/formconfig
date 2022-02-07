import { Field } from '../../helpers/fields';

export const MONEY_INPUT = (disabled, className='flex-1') => ({
  ...Field.field(
    'money',
    'money-value',
    { disabled: disabled },
    {
      validators: {
        validation: ['maximumMoneyValidation']
      }
    }
  )
});
