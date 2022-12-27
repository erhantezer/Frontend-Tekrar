import styled from 'styled-components';

const Button = styled.button`
    color: ${({ primary }) => (primary ? 'white' : 'purple')};
    background: ${(props) => (props.primary ? 'purple' : 'white')};
    padding: 0.7rem 1.5rem;
    border: 2px solid purple;
    border-radius: 5px;
    font-family: 'tahoma';
    &:hover {
    transform: scale(0.97);
  }
`;

// export const TomatoButton = styled.button`
//     color: ${({primary}) => (primary ? "white":"tomato")};
//     background: ${({ primary }) => (primary ? 'tomato' : 'white')};
//     border: 2px solid tomato;
//     padding: 0.7rem 1.5rem;
//     border-radius: 5px;
//     font-family: 'tahoma';
//        &:hover {
//           transform: scale(0.97);
// `;

export const TomatoButton = styled(Button)`
  color: ${({ primary }) => (primary ? 'white' : 'tomato')};
  background: ${({ primary }) => (primary ? 'tomato' : 'white')};
  border: 2px solid tomato;
`;

export default Button;
