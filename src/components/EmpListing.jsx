import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const EmpListing = () => {

    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const url = "http://localhost:4000/api/user"
        await fetch(url).then((response) => response.json()).
            then((response) => {
                setData(response.data);
            }).catch((error) => {
                console.log("error", error);
            })
    }
    const loadEdit = (id) => {
        navigate('/employee/edit/' + id)
    }
    const loadRemove = (id) => {
        if (window.confirm('Do you want to delete data!!')) {
            const url = `${'http://localhost:4000/api/user/' + id}`
            Axios.delete(url)
                .then((response) => alert("Remove Successfully"), window.location.reload())
                .catch((error) => { console.log(error); })
            // fetch(url, {
            //     method: "DELETE"
            // }).then((response) => response.json)
            //     .then((response) => alert("Remove Successfully"), window.location.reload())
            //     .catch((error) => { console.log(error); })
        }
    }

    const loadDetail = (id) => {
        navigate('/employee/detail/' + id)
    }
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-title">
                        <h2 className='px-3 py-3'>Employee Listing</h2>
                    </div>
                    <div className="card-body">
                        <div>
                            <Link to="employee/create" className="btn btn-success my-3" >Add New (+)</Link>
                        </div>
                        <table className="table table-bordered">
                            <thead className='bg-dark text-white'>
                                <tr>
                                    <td>ID</td>
                                    <td>Name</td>
                                    <td>Surname</td>
                                    <td>Email</td>
                                    <td>Phone</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data && data.map((item, i) => (

                                        <tr key={item._id}>
                                            <td>{item._id}</td>
                                            <td>{item.first_name}</td>
                                            <td>{item.last_name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone_no}</td>
                                            <td>
                                                <a onClick={() => loadEdit(item._id)} className="btn btn-success mx-2">EDIT</a>
                                                <a onClick={() => loadRemove(item._id)} className="btn btn-danger mx-2">Remove</a>
                                                <a onClick={() => loadDetail(item._id)} className="btn btn-primary mx-2">Details</a>
                                            </td>
                                        </tr>

                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmpListing