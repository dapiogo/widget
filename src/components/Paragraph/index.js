import styled from "styled-components";

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 0;
`;

export default Paragraph;
