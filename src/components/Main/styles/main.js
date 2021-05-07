import styled from 'styled-components'

export const Container = styled.div`
    max-width:1400px;
    margin: 0 auto;
    background: #000;

`
export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    grid-gap: 2em;
    padding:2em 0;
    @media (max-width:1000px){
        grid-template-columns: repeat(auto-fill, 100%);
        padding:2em 1em;
    }
`
export const Title = styled.h2`
   color:rgba(255,255,255,0.9);
   padding:1em 1em 0.5em 1em;
   text-align: left;
`

