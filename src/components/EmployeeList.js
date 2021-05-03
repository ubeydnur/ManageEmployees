import Employee from './Employee'
import { useContext, useState, useEffect } from 'react'
import { Button, Modal, Alert } from 'react-bootstrap'
import { EmployeeContext } from '../contexts/EmployeeContext'
import AddForm from './AddForm'
import Pagination from './Pagination'

const EmployeeList = () => {

    const { sortedEmployees } = useContext(EmployeeContext)

    const [showAlert, setShowAlert] = useState(false)
    const [show, setShow] = useState(false);
    const [currentPage, setCurrentPage] = useState(1)
    const [employeesPerPage] = useState(2)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //const handleShowAlert = () => setShowAlert(true)

    const handleShowAlert = () => {
        setShowAlert(true)
        setTimeout(() => {
            setShowAlert(false)
        }, 2000)
    }

    useEffect(() => {
        handleClose();
        return () => {
            handleShowAlert()
        }
    }, [sortedEmployees])

    // const myRef=useRef(null)

    // const onButtonClick=() =>{
    //     myRef.current.focus()
    // }

    const indexOfLastEmployee = currentPage * employeesPerPage
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage
    const currentEmployees = sortedEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee)
    const totalPagesNum = Math.ceil(sortedEmployees.length / employeesPerPage)

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
            <Alert
                show={showAlert}
                variant="success"
            >
                Employee List was successfully updated!
            </Alert>
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
                    {/* <Employee employees={employees} /> */}
                    {
                        // localeCompare ile isimleri sıralıyoruz.
                        currentEmployees.map((employee) => (
                            <tr key={employee.id}>
                                <Employee employee={employee} />
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Pagination pages={totalPagesNum} setCurrentPage={setCurrentPage} />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton >
                    <Modal.Title>Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm />
                </Modal.Body>
            </Modal>
            {/* <input ref={myRef} type="text"></input>
            <button onClick={onButtonClick}>Focus Input</button> */}
        </>
    )
}
export default EmployeeList

// //sort() içinde isimleri sıralıyoruz
// employees.sort((a, b) => (a.name < b.name ? -1 : 1)).map((employee) => (
//     <tr key={employee.id}>
//         <Employee employee={employee} />
//     </tr>
// ))

// // localeCompare ile isimleri sıralıyoruz.
// currentEmployees.sort((a, b) => a.name.localeCompare(b.name)).map((employee) => (
//     <tr key={employee.id}>
//         <Employee employee={employee} />
//     </tr>
// ))