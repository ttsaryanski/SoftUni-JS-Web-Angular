import { ValidatorFn } from '@angular/forms';

export function emailValidator(domains: string[]): ValidatorFn {
  const domainStr = domains.join('|');
  const regExp = new RegExp(`^[A-z0-9.]{6,}@gmail.(${domainStr})$`);

  return (control) => {
    const isInValid = control.value === '' || regExp.test(control.value);

    return isInValid ? null : { emailValidator: true };
  };
}

export function matchPasswordValidator(
  passwordControl: string,
  rePasswordControl: string
): ValidatorFn {
  return (control) => {
    const password = control.get(passwordControl)?.value;
    const rePassword = control.get(rePasswordControl)?.value;

    const areMatch = password === rePassword;

    return areMatch ? null : { matchPasswordValidator: true };
  };
}
