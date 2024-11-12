import { ComponentProps, forwardRef } from 'react';
/* forwardRef é uma função do React que permite que componentes customizados 
aceitem uma ref e a encaminhem para um elemento interno. */

import { Container } from './styles';

type InputProps = ComponentProps<'input'> & {
  label?: string;
  variant?: 'black' | 'dark';
  error?: string;
};
/* InputProps: interface TypeScript que definimos para conter as propriedades 
esperadas pelo componente Input.
Especificamente, ela deve incluir label, variant, e qualquer outra propriedade 
válida para um <input>. */

export const Input = forwardRef<HTMLInputElement, InputProps>(function (
  /* desestruturação das propriedades recebidas pelo componente: */
  { label, variant = 'black', error, ...props },
  ref,
  /* O ref é encaminhado para o elemento <input>, permitindo que o componente 
  pai manipule o <input> DOM diretamente. */
) {
  /* O componente Input aceita duas propriedades principais: label e variant 
  (estilo de variação, definido como 'black' por padrão), além de outras propriedades 
  de <input> com ...props. */
  return (
    <Container $variant={variant}>
      {label && <label>{label}</label>}
      <input ref={ref} {...props} />
      {error && <span>{error}</span>}
    </Container>
  );
});
