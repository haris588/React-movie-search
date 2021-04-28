import React from 'react'
import { Container, Title, Wrapper, Form, Input, Button } from './styles/searchBar'

export default function SearchBar({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

SearchBar.Title = function SearchBarTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

SearchBar.Wrapper = function SearchBarWrapper({children, ...restProps}){
    return <Wrapper {...restProps}>{children}</Wrapper>
}

SearchBar.Form = function SearchBarForm({children, ...restProps}){
    return <Form {...restProps}>{children}</Form>
}

SearchBar.Input = function SearchBarInput({...restProps}){
    return <Input {...restProps}/>
}

SearchBar.Button = function SearchBarButton({children, ...restProps}){
    return <Button {...restProps}>{children}</Button>
}

