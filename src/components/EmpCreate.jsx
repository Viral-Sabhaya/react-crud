import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const EmpCreate = () => {

    const [detail, setDetail] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_no: "",
        active: "",
    })
    const [validation, setValidation] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let url = "http://localhost:4000/api/user"
        fetch(url, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(detail)
        }).then((response) => response.json)
            .then((response) => alert("Saved Successfully"), navigate('/'))
            .catch((error) => { console.log(error); })
    }

    const handleCreateEmp = (e) => {
        const { name, value } = e.target
        setDetail({ ...detail, [name]: value })
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
                                            <input type="text" name='first_name' onMouseDown={e => setValidation(true)} value={detail.name} onChange={handleCreateEmp} className="form-control " />
                                            {detail.first_name.length == 0 && validation && "Enter a name"}
                                        </div>
                                    </div>
                                    <div className="col-lg-12 my-2">
                                        <div className="form-group">
                                            <label htmlFor="surname">Surname</label>
                                            <input type="text" name='last_name' value={detail.surname} onChange={handleCreateEmp} className="form-control" />
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

export default EmpCreate