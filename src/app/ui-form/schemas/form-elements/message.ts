import {Field} from '../../helpers/fields';

export const MESSAGE = (disabled = false, className = 'flex-1') => ({
  ...Field.textarea(
    'message',
    {
      label: 'Message',
      placeholder: 'Enter a message',
      rows: 5,
      required: true,
      disabled: disabled,
      className: className
    }
  )
});
