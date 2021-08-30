import { FC } from 'react';

import { Button } from '../../../shared/components/button';
import { Input } from '../../../shared/components/input';
import { InputAdornment } from '../../../shared/components/input-adornment';

export const Messanger: FC = () => {
  const isLoggedIn = false;

  const adornment = isLoggedIn ? (
    <InputAdornment position="end">
      <Button>Login</Button>
    </InputAdornment>
  ) : (
    <InputAdornment position="end">
      <Button size="sm">Login</Button>
    </InputAdornment>
  );

  const placeholder = isLoggedIn
    ? 'type message'
    : 'Please sign in to write mesage';

  return (
    <Input
      endAdornment={adornment}
      placeholder={placeholder}
      disabled={!isLoggedIn}
    />
  );
};
