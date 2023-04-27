import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const EmpEdit = () => {
    const [detail, setDetail] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_no: "",
        active: "",
    })
    const navigate = useNavigate();
    const { empid } = useParams();


    const handleSubmit = (e) => {
        e.preventDefault();
        const url = `${'http://localhost:4000/api/user/'}`

        Axios.put(url, detail)
            .then((response) => alert("Saved Successfully"), navigate('/'))
            .catch((error) => { console.log(error); })

        // fetch(url, {
        //     method: "PUT",
        //     headers: { "content-type": "application/json" },
        //     body: JSON.stringify(detail)
        // }).then((response) => response.json)
        //     .then((response) => alert("Saved Successfully"), navigate('/'))
        //     .catch((error) => { console.log(error); })
    }

    const handleCreateEmp = (e) => {
        const { name, value } = e.target
        setDetail({ ...detail, [name]: value })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const url = `${'http://localhost:4000/api/user/' + empid}`
        await fetch(url).then((response) => response.json()).
            then((response) => {
                setDetail(response.data);
            }).catch((error) => {
                console.log("error", error);
            })
    }

    return (
        <>
            <div className="container">
                <div className="offset-lg-3 col-lg-6">
                    <form onSubmit={handleSubmit} className="container">
                        <div className="card">
                            <div className="card-title text-align-left mx-4 my-3">
                                <h2>Employee Create</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12 my-2 ">
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" name='first_name' value={detail.first_name} onChange={handleCreateEmp} className="form-control " />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 my-2">
                                        <div className="form-group">
                                            <label htmlFor="surname">Surname</label>
                                            <input type="text" name='last_name' value={detail.last_name} onChange={handleCreateEmp} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 my-2">
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" name='email' value={detail.email} onChange={handleCreateEmp} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 my-2">
                                        <div className="form-group">
                                            <label htmlFor="phone_no">Contact no.</label>
                                            <input type="number" name='phone_no' value={detail.phone_no} onChange={handleCreateEmp} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 my-2">
                                        <div className="form-check">
                                            <input type="checkbox" name='active' value={detail.active} onChange={handleCreateEmp} className="form-check-input" />
                                            <label className="form-check-label">IsActive</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 my-2 ">
                                        <div className="form-group">
                                            <button type='submit' className='btn btn-success mx-2'>Save</button>
                                            <Link to="/" className='btn btn-danger'>Back</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </>
    )
}

export default EmpEdit