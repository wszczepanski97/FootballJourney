import styled from 'styled-components';

const Button = styled.button`
  border: 0;
  padding: 10px 20px;
  margin: 0;
  cursor: pointer;
  width: 300px;
  text-decoration: none;
  font-size: 20px;

  &:hover {
    background-color: #3e8e41;
  }

  &:active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export default Button;
