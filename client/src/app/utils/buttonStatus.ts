export function setButtonAttributes(form: any): {
  disabled: boolean;
  style: { [key: string]: string };
} {
  const isDisabled = form.invalid;
  const buttonStyle = {
    backgroundColor: isDisabled ? 'grey' : '#234465',
  };

  return { disabled: isDisabled, style: buttonStyle };
}
