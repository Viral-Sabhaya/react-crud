import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const EmpDetails = () => {
    const { empid } = useParams();
    const [data, setData] = useState({})

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const url = `${'http://localhost:4000/api/user/' + empid}`

        await Axios.get(url)
            .then((response) => {
                setData(response.data.data);
            }).catch((error) => {
                console.log("error", error);
            })

        // await fetch(url).then((response) => response.json()).
        //     then((response) => {
        //         setData(response.data);
        //     }).catch((error) => {
        //         console.log("error", error);
        //     })
    }
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-title my-3 mx-3 text-primary">
                        <h2>Employee Detail</h2>
                    </div>
                    <div className="card-body">
                        {
                            data &&
                            <div>
                                <h3 className='text-muted'>ID: <span className='text-danger'>{data._id}</span></h3><hr />
                                <h3 className='text-muted'>Full Name: <span className='text-danger'>{data.first_name} {data.last_name}</span></h3><hr />
                                <h3 className='text-muted'>Email: <span className='text-danger'>  {data.email}  </span></h3><hr />
                                <h3 className='text-muted'>Contact no:<span className='text-danger'> {data.phone_no}   </span></h3><hr />
                                <Link to="/" className='btn btn-danger'>Back to listing</Link>
                            </div>
                        }

                    </div>
                </div>

            </div>
        </>
    )
}

export default EmpDetails