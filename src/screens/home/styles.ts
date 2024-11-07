import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem; // 24px (24/16 = 1.5)
  width: 100%;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem; // 8px
  }
`;
