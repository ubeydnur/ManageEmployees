import { Form, Button } from 'react-bootstrap'
import { EmployeeContext } from '../contexts/EmployeeContext'
import { useContext, useState } from 'react'

const AddForm = () => {

    const { dispatch } = useContext(EmployeeContext)

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [address, setAddress] = useState("");
    // const [phone, setPhone] = useState(""); 

    const [newEmployee, setNewEmployee] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
    })

    const { name, email, address, phone } = newEmployee

    const onInputChange = (e) => {
        setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // addEmployee(name, email, address, phone)
        dispatch({ type: 'add_employee', employee: { name, email, address, phone } })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    name='name'
                    placeholder="Enter name"
                    required
                    value={name}
                    // onChange={e => setName(e.target.value)} 
                    onChange={e => onInputChange(e)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={email}
                    // onChane={e => setEmail(e.target.value)}
                    onChange={e => onInputChange(e)}
                    required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control
                    as="textarea"
                    name="address"
                    placeholder="Enter address"
                    rows={3}
                    value={address}
                    // onChane={e => setAddress(e.target.value)}
                    onChange={e => onInputChange(e)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                    type="text"
                    name="phone"
                    placeholder="Enter phone"
                    value={phone}
                    // onChane={e => setPhone(e.target.value)}
                    onChange={e => onInputChange(e)} />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Add New Employee
            </Button>
        </Form>
    )
}

export default AddForm