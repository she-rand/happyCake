import { Button, Container, Form } from "react-bootstrap";

const ContactPage = () => {
return(
    <>
   <Container className="main m-3">
        <h3 >Tell Us, How can we help you?</h3>
      <Form className="form row col-10 col-sm-9 col-md-8 col-lg-6 mx-auto mt-5 border border-light rounded p-4">
            
            <Form.Group className="mb-3 col-12 col-md">
                <Form.Label>Email</Form.Label>
                <Form.Control name="email"/>
            </Form.Group>
            <Form.Group
                className="mb-5 col-12 col-md"
                controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control name="photo"/>
            </Form.Group>
            <Button
                variant="light"
                className="col-5 col-sm-4 col-md-3 mx-auto"
                type="submit">
                Send
            </Button>
        </Form>  
   </Container>
   
    </>
)
};
export default ContactPage;