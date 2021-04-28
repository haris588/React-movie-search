import styled from 'styled-components'

export const Container = styled.div`
    max-width:1200px;
    margin: 0 auto;
    background: rgba(40,72,126,0.15);

`
export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    grid-gap: 15px;
    padding:1em;
    @media (max-width:1000px){
        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }
`
export const Title = styled.h2`
   color:rgba(40,72,126,0.8);
   padding:1em 1em 0.5em 1em;
   text-align: center;
`

