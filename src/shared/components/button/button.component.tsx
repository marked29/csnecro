/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import cn from 'classnames';

import s from './button.module.sass';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  external?: boolean;
  className?: string;
} & (React.HTMLProps<HTMLButtonElement> | React.HTMLProps<HTMLAnchorElement>);

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  external = false,
  className,
  children,
  ...props
}) => {
  const compoundClassName = cn(s.root, className);

  const content = children;
  if ('href' in props) {
    if (external) {
      return (
        <a
          target="_blank"
          rel="noreferrer noopener"
          className={compoundClassName}
          {...(props as React.HTMLProps<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }
    return <a className={compoundClassName}>{content}</a>;
  }

  return (
    <button
      // @ts-ignore
      type={type}
      {...(props as React.HTMLProps<HTMLButtonElement>)}
      className={compoundClassName}
    >
      {content}
    </button>
  );
};

export default Button;
