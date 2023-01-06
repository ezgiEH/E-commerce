import { SendSharp } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'


const Container = styled.div`
    height: 40vh;
    background-color: #fcf5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`

const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign: "center" })}
`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: "80%" })}
`

const Input = styled.input`
    flex:8;
    border: none;
    height: 90%;
    padding-left: 20px;
`

const Button = styled.button`
    flex: 1;
    height: 100%;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
`
const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely updates from your favorite products.</Desc>
            <InputContainer>
                <Input placeholder="Your Email" />
                <Button>
                    <SendSharp />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter