import { Field } from '../../helpers/fields';

export const EMAIL = (disabled, className='flex-1') => ({
  ...Field.email(
    'email',
    {
      placeholder: 'Enter your email',
      required: true,
      disabled: disabled,
      className:className
    }
  )
});
