import { Form, Button } from 'react-bootstrap'
import { EmployeeContext } from '../contexts/EmployeeContext'
import { useContext,useState } from 'react'

const EditForm = ({theEmployee}) => {

    const { updateEmployee } = useContext(EmployeeContext)

    const employee =theEmployee
    const id =employee.id

    const [name,setName]=useState(employee.name)
    const [email,setEmail]=useState(employee.email)
    const [address,setAddress]=useState(employee.address)
    const [phone,setPhone]=useState(employee.phone)

    
    const updatedEmployee={id,name,email,address,phone}
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        updateEmployee(id,updatedEmployee)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    name='name'
                    value={name}
                    onChange={e=>setName(e.target.value)}
                    placeholder="Enter name"
                    required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    placeholder="Enter email"
                    required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control
                    as="textarea"
                    name="address"
                    value={address}
                    onChange={e=>setAddress(e.target.value)}
                    placeholder="Enter address"
                    rows={3} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={e=>setPhone(e.target.value)}
                    placeholder="Enter phone" />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Update Employee
            </Button>
        </Form>
    )
}

export default EditForm