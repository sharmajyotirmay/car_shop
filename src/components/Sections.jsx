import React from 'react'
import styled from 'styled-components'

function Sections({car_name, image_link, car_des, LeftButton_text, RightButton_text}) {
  return (
    <Wrap image_link = {image_link}>
        <ItemText>
            <h1>{car_name}</h1>
            <p>{car_des}</p>
        </ItemText>
        <Button>
        <ButtonGroup>
            <LeftButton>
                {LeftButton_text}
            </LeftButton>
            <RightButton>
                {RightButton_text}
            </RightButton>
        </ButtonGroup>
        <DownArrow src="/images_bac/images/down-arrow.svg"/>
        </Button>
    </Wrap>
  )
}

export default Sections

const Wrap = styled.div`
width: 100vw;
height: 100vh;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
display: flex;
flex-direction: column;
justify-content: space-between;
background-image: ${props => `url("/images_bac/images/${props.image_link}")`}
`

const ItemText = styled.div`
padding-top: 15vh;
text-align: center;
`

const ButtonGroup = styled.div`
display: flex;
justify-content: center;
gap: 2rem;
margin-bottom: 30px;
`

const LeftButton = styled.div`
background-color: rgba(23,26,32,0.8);
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.6;
text-transform: uppercase;
font-size: 12px;
cursor : pointer;
`

const RightButton = styled(LeftButton)`
background-color: white;
opacity: .65;
color: black;
`

const Button = styled.div`
`
const DownArrow = styled.img`
margin-top: 20px;
height: 40px;
cursor : pointer;
animation: animateDown 1.5s infinite;
`