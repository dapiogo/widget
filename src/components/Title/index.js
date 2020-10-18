import styled from "styled-components";

const Title = styled.h1`
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme, small }) =>
    small ? theme.fontSize.m : theme.fontSize.l};
  color: ${({ theme }) => theme.title};
  margin: 1rem;
  text-align: center;
`;

export default Title;
