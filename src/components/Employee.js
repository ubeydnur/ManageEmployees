import { Button, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { useContext, useState, useEffect } from 'react'
import { EmployeeContext } from '../contexts/EmployeeContext'
import EditForm from './EditForm'

const Employee = ({ employee }) => {

    const { deleteEmployee } = useContext(EmployeeContext)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        handleClose();
    }, [employee])

    return (
        //React.Fragment
        <>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>{employee.phone}</td>
            <td>
                <div className='d-flex align-items-center'>
                    <OverlayTrigger
                        overlay={
                            <Tooltip id={`tooltip-top`}>
                                Edit
                            </Tooltip>
                        }>
                        <Button
                            variant='outline-warning'
                            className='mr-2'
                            data-toggle="modal"
                            onClick={handleShow}>
                            <i className="material-icons">&#xE254;</i>
                        </Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        overlay={
                            <Tooltip id={`tooltip-top`}>
                                Delete
                            </Tooltip>
                        }>
                        <Button
                            variant="outline-danger"
                            data-toggle="modal"
                            onClick={() => deleteEmployee(employee.id)}>
                            <i className="material-icons">&#xE872;</i>
                        </Button>
                    </OverlayTrigger>
                </div>
            </td>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton >
                    <Modal.Title>Update Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditForm theEmployee={employee} />
                </Modal.Body>
            </Modal>
        </>
    )
}
export default Employee