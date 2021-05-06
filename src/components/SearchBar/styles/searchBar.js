import styled from "styled-components";

export const Container = styled.div`
max-width:1400px;
  margin:0 auto;
  background-image: url('images/background.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size:cover;
  background-blend-mode: multiply;
  background-color: rgba(0,0,0,0.35);  
`;

export const Wrapper = styled.div`
  position:relative;
  display:flex;
  flex-direction:column;
  justify-content:center;
  width:100%;
  padding:2em;
`;

export const Title = styled.h1`
  font-size:1.6em;
  color:rgba(255,255,255,0.9);
  max-width:500px;
  padding:2em 0;
  
  @media (max-width:620px){
    display:none;
  }
`;

export const Form = styled.form`
  position:relative;
  padding:2em 0;
`;

export const Input = styled.input`
  border: 0;
  padding: 1.2em 1em;
  font-family: inherit;
  border-radius:30px;
  width:100%;
`;

export const Button = styled.button`
  display:inline-flex;
  justify-content: center;
  align-items:center;
  position:absolute;
  right:-1px;
  background-color: #ea1616;
  color: rgba(255,255,255,0.9);
  cursor:pointer;
  border:0;
  border-radius:30px;
  font-family: inherit;
  padding: 1.2em 3em;
  font-weight: 700;
  text-transform: uppercase;

  &:hover {
    background-color: #7c2020;
  }

  @media (max-width:720px){
    padding:1.23em 2.2em;
    bottom:2.38em;
  }
`