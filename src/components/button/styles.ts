import styled, { css } from 'styled-components';

import { theme } from '../../styles/theme';

type ContainerProps = {
  $variant: 'default' | 'outline';
};
/* O styled-components obriga que, ao criarmos uma propriedade pro styled (como uma 
variável), nós devemos colocar o dólar na frente da propriedade
No nosso caso, essa propriedade vai ser passada para o Container
*/

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.25rem; // 36px
  border-radius: 0.25rem; // 4px
  background-color: ${(props) =>
    props.$variant === 'default' ? theme.colors.primary : 'transparent'};
  color: ${(props) =>
    props.$variant === 'default' ? theme.colors.black : theme.colors.primary};
  border: none;
  padding: 0 0.75rem; // 12px
  transition: all 100ms;

  ${(props) =>
    props.$variant === 'outline' &&
    css`
      border: 1px solid ${theme.colors.primary};
    `}

  &:hover {
    background-color: ${theme.colors.primaryDark};
  }
`;
