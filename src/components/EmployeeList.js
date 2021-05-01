import Employee from './Employee'
import { useContext, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { EmployeeContext } from '../contexts/EmployeeContext'
import AddForm from './AddForm'

const EmployeeList = () => {

    const { employees } = useContext(EmployeeContext)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        //React.Fragment
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b>Employees</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <Button variant="success" data-toggle="modal" onClick={handleShow}>
                            <i className="material-icons">&#xE147;</i> <span>Add New Employee</span>
                        </Button>
                    </div>
                </div>
            </div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <Employee employees={employees} />
                </tbody>
            </table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton >
                    <Modal.Title>Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm />
                </Modal.Body>
            </Modal>
        </>
    )
}
export default EmployeeList