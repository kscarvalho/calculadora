import styled from 'styled-components';

//PRIMEIRO COMPONENTE
export const Container = styled.div` 
    width: 100%;
    height: 100vh;
    background-color: #222831;

    display: flex;
    align-items: center;
    justify-content: center;
`

//SEGUNDO COMPONENTE
export const Content = styled.div`
    background-color: #ffffff;
    width: 10%;
    min-width: 350px;
`

//TERCEIRO COMPONENTE
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

//QUARTO COMPONENTE
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`