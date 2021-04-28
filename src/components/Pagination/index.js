import React from 'react'
import { Container, Wrapper, Button, PageText } from './styles/pagination'

export default function Pagination({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Pagination.Wrapper = function PaginationWrapper({children, ...restProps}){
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Pagination.Button = function PaginationButton({children, ...restProps}){
    return <Button {...restProps}>{children}</Button>
}

Pagination.PageText = function PaginationPageText({children, ...restProps}){
    return <PageText {...restProps}>{children}</PageText>
}

