import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    justify-content:space-between;
    position:relative;
    background: #191919;
    border-radius:10px;
    @media (max-width:620px){
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
   `

export const Wrapper = styled.div`
    display:flex;   
    flex-direction:${({ direction }) => (direction === 'row' ? 'row' : 'column')};
    width: ${({ width }) => (width === 'small' ? '35%' : width === 'medium' ? '65%' : '100%')};
    padding:${({ padding }) => (padding === '0' ? '0' : '1em')};
    position:relative;
    @media (max-width:620px){
        justify-content:center;
        align-items:center;
        width:100%;
    }
  `

export const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    object-position:center;
    margin:0 auto;
    display:block;
    @media (max-width:620px){
        justify-content:center;
        object-fit:contain;
        height:20em;
        max-width:100%;
        padding-top:1em;
    }
`
export const Title = styled.h2`
    font-size:1.3rem;
    color:rgba(255,255,255, 0.9);
    padding-right:2em;
    @media (max-width:620px){
        text-align: center;
        padding-right:0;
    }
`

export const Subtitle = styled.p`
    font-size:.8rem;
    color: #7e7d7c;
    padding: 1em 0 0.2em 0;
    @media (max-width:620px){
        text-align: center;
    }
`

export const Description = styled.p`
    font-size:1rem;
    overflow:auto;
    padding:1em 0 0 0;
    color:rgba(255,255,255, 0.9);
    @media (max-width:620px){
        text-align:center;
    }

`

export const Rating = styled.span`
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:100%;
    border:2px solid ${({ rating }) => (rating >= 5 && rating < 7 ? '#dba525' : rating >= 7 ? '#00cc00' : rating < 5 ? '#ea1616' : null)};
    position:absolute;
    padding:0.5em;
    top:.5em;
    right:.5em;
    background-color:transparent;
    min-height:40px;
    min-width:40px;
    color:${({ rating }) => (rating >= 5 && rating < 7 ? '#dba525' : rating >= 7 ? '#00cc00' : rating < 5 ? '#ea1616' : null)};
    font-weight: 700;
    
     @media (max-width:620px){
        min-height:35px;
        min-width:35px;
        padding:0.3em;
        top:0.5em;
        right:0.5em;
    }

    @media (max-width:520px){
       position:relative;
       padding:0.3em;
       top:0.5em;
       right:0;
    }
`

