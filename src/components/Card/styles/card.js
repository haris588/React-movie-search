import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    justify-content:space-between;
    box-shadow: 1px 1px 2px 2px rgba(40,72,126,0.6);
    border-radius:20px;
    position:relative;
    background: rgba(56,58,107,0.1);

    @media (max-width:620px){
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
   `
export const Wrapper = styled.div`
    display:flex;   
    flex-direction:${({ direction }) => (direction === 'row' ? 'row' : 'column')};;
    width: ${({ width }) => (width === 'small' ? '35%' : width === 'medium' ? '65%' : '100%')};
    padding:${({ padding }) => (padding === '0' ? '0' : '1em')};
    
    @media (max-width:620px){
        justify-content:center;
        align-items:center;
        width:100%;
    }
  `

export const Image = styled.img`
    max-width:100%;
    height:100%;
    object-fit:contain;
    display:block;
    border-radius:20px;

    @media (max-width:620px){
        justify-content:center;
        align-items:center;
        height:25em;
        width:100%;
        padding-top:1em;
    }
`
export const Title = styled.h2`
    font-size:1.3rem;
    color:rgba(40,72,126,1);
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
    max-height:140px;
    overflow:auto;
    padding:1em 0 0 0;
    color:rgba(40,72,126,1);

    @media (max-width:620px){
        text-align:center;
    }

`

export const Rating = styled.span`
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:100%;
    position: absolute;
    border:3px solid ${({ rating }) => (rating >= 5 && rating < 7 ? '#dba525' : rating >= 7 ? '#00cc00' : rating < 5 ? '#ee0025' : null)};
    top:0.5em;
    right:0.5em;
    background-color:#12253f;
    min-width:40px;
    min-height:40px;
    color:${({ rating }) => (rating >= 5 && rating < 7 ? '#dba525' : rating >= 7 ? '#00cc00' : rating < 5 ? '#ee0025' : null)};
    font-weight: 700;
    
     @media (max-width:620px){
        min-width:35px;
        min-height:35px;
        top:0.5em;
        right:0.5em;
    }

    @media (max-width:520px){
       position:relative;
       top:0.5em;
       right:0;
    }
`

