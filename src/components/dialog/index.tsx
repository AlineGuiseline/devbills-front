import { ReactNode, JSX } from 'react';

import { Content, Overlay, Portal, Root, Trigger } from './styles';

type DialogProps = {
  children: ReactNode /* tipa qualquer coisa que vai dentro do react */;
  trigger: JSX.Element /* tipa o que queremos que seja, de fato, um componente */;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function Dialog({ children, trigger, open, onOpenChange }: DialogProps) {
  return (
    <Root open={open} onOpenChange={onOpenChange}>
      <Trigger>{trigger}</Trigger>
      <Portal>
        <Overlay />
        <Content>{children}</Content>
      </Portal>
    </Root>
  );
}
