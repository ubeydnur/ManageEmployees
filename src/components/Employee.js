import { Button } from 'react-bootstrap'
import {useContext} from 'react'
import { EmployeeContext } from '../contexts/EmployeeContext'

const Employee = ({ employees }) => {

    const {deleteEmployee}=useContext(EmployeeContext)

    return (
        //React.Fragment
        <>
            {
                employees.map(employee => (
                    <tr key={employee.id}>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.address}</td>
                        <td>{employee.phone}</td>
                        <td>
                            <div className='d-flex align-items-center'>
                                <Button variant='outline-warning' className='mr-2' data-toggle="modal">
                                    <i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i>
                                </Button>
                                <Button
                                    variant="outline-danger" data-toggle="modal"
                                    onClick={() => deleteEmployee(employee.id)}>
                                    <i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i>
                                </Button>
                            </div>
                        </td>
                    </tr>
                ))
            }
        </>
    )
}
export default Employee