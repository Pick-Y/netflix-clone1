
import styled  from "styled-components"
import Navbar from "./Navbar"
import NavBarRight from "./NavBarRight"


const HeaderContainer = styled.div`
display: flex;
flex-direcion: row;
justify-content: flex-end;
background-color: #0c0c0c;
height: 100%;
width: 100%;
`
const Header = () => {

    return (

        <>
        <HeaderContainer>
            <Navbar></Navbar>
            <NavBarRight />
        </HeaderContainer>
      
        
        </>
    )
}

export default Header;