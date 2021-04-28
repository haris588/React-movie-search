import React from 'react'
import { Container, Row, Title } from './styles/main'

export default function Main({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Main.Row = function MainRow({children, ...restProps}){
    return <Row {...restProps}>{children}</Row>
}

Main.Title = function MainTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}
