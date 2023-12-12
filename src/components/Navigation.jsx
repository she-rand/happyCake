import { faAddressBook, faCakeCandles, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container,Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <Navbar bg="danger" variant="white">
            <Container className="navbar d-flex justify-content-between">
                <div>
                <Navbar.Brand className="bold" style={{color:"white"}}>Happy Cake</Navbar.Brand>
                <FontAwesomeIcon style={{color:"white"}} icon={faCakeCandles} />
                 
                </div>
               <div>
                    <Link className="m-1" to="/">Home</Link>
                    <FontAwesomeIcon className="me-1" style={{color:"white"}} icon={faHouse} />
                    <Link className="m-2" to="/contacts">Contact</Link>
                    <FontAwesomeIcon className="me-1" style={{color:"white"}} icon={faAddressBook} />
                </div>
            </Container>
           
        </Navbar>

    )


};
export default Navigation;