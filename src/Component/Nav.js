import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const NavBar = ({ setMyRate, myRate }) => {
    const navigate = useNavigate()
    return (
        <div className='bar'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <div>
                    <Navbar.Brand href="#Movies-Cards">Movies Cards</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                </div>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div>
                        <Nav className="mr-auto">
                            <Nav.Link >Home</Nav.Link>
               <button onClick={()=> navigate (-1)}> Go back</button>
                            <div>
                                <div className="search-container">
                                </div>
                            </div>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar