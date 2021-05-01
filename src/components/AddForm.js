import { Form,Button } from 'react-bootstrap'

const AddForm = () => {

    return (
        <Form>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control as="textarea" placeholder="Enter address" rows={3} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Phone number</Form.Label>
                <Form.Control type="text" placeholder="Enter phone" />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Add New Employee
            </Button>
        </Form>
    )
}
export default AddForm