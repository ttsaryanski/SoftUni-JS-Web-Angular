// form-utils.ts
export function setEmailErrorClass(email: any): string {
  if (
    (email?.touched && email?.errors?.['required']) ||
    (email?.touched && email?.errors?.['emailValidator'])
  ) {
    return 'input-error';
  }
  return '';
}

export function setPasswordErrorClass(password: any): string {
  if (password?.touched && password?.errors?.['required']) {
    return 'input-error';
  }
  if (password?.touched && password?.errors?.['minlength']) {
    return 'input-error';
  }
  return '';
}

export function setUsernameErrorClass(username: any): string {
  if (username?.touched && username?.errors?.['required']) {
    return 'input-error';
  }
  if (username?.touched && username?.errors?.['minlength']) {
    return 'input-error';
  }
  return '';
}
