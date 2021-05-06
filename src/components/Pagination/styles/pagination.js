import styled from "styled-components";

export const Container = styled.div`
  max-width:1400px;
  margin: 0 auto;
  background: #191919;
`;

export const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 1em;
  width:100%;
  `;

export const Button = styled.button`
  display:inline-flex;
  justify-content:center;
  align-items: center;
  padding:0.8em 1.7em;
  border:0;
  cursor:pointer;
  background-color: #ea1616;
  border-radius:15px;
  color: rgba(255,255,255,0.9);
  font-family: inherit;
  font-weight: 700;
  text-transform: uppercase;

  &:hover {
    background-color: #7c2020;
    transform: scale(1.1)
  }
  &:disabled {
    background-color:#7f7f7f;
    transform: scale(1);
    opacity:0.2;
  }

  @media (max-width:620px){
    padding:0.6em 1.8em;
  }
`

export const PageText = styled.p`
    padding:0 1em;
    color:rgba(255,255,255,0.9);
`
