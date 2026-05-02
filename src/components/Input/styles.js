import styled from 'styled-components'; // pegando da biblioteca

export const InputContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: #aaffaa;
  
  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-size: 40px;
  font-family: 'Roboto';

  input {
    display: flex;
    justify-content: flex-end;
    
    width: 100%;
    height: 70px;
    background-color: #aaffaa;

    border: 0;
    outline: none;

    padding: 10px;
    text-align: right;

    font-size: 35px;
    font-family: 'Roboto';
  }
`