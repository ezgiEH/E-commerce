import { Facebook, Instagram, Mail, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'
import styled from 'styled-components'
import {mobile} from '../responsive'


const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`

//Left Section
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    fonst-size:
`
const Desc = styled.p`
    margin: 20px 0;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 30px;
`

//Center Section
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
`
const Title =styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
     width: 50%;
     margin-bottom: 10px;
`

//Right Section
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#fff8f8"})}
`
const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const Payment  = styled.img`
    width: 100%;
`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>AREW.</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Earum quis ad nulla, 
                praesentium perspiciatis voluptatem dolorem 
                deleniti pariatur at quae saepe sunt necessitatibus 
                dolores, neque in esse voluptas voluptate fugit!</Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter />
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>
        </Left>

        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>

        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight: "10px"}} />Address: Turkey
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight: "10px"}}/>Phone: +90 534 760 59 96
            </ContactItem>
            <ContactItem>
                <Mail style={{marginRight: "10px"}}/>Mail: ezgihocaoglu@hotmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>

    </Container>
  )
}

export default Footer