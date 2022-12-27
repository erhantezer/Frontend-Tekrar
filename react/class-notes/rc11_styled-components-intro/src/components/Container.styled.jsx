//! escd
import styled from 'styled-components';

const Container = styled.div`
  background: ${({bg}) => bg || "white" }; //! props mantığı
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export default Container;
