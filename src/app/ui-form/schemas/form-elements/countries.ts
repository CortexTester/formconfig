import { Field } from '../../helpers/fields';

export const COUNTRIES = (disabled, className='flex-1') => ({
  ...Field.field(
    'select',
    'country',
    {
      label: 'Country',
      placeholder: 'Select your country',
      options: [
        { label: 'United States of America', value: 'USA' },
        { label: 'Colombia', value: 'COL' },
        { label: 'India', value: 'IND' }
      ],
      required: true,
      disabled: disabled,
      className: className
    },
    { defaultValue: '' }
  )
});
