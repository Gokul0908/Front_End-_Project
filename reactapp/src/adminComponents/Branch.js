import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Branch = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/employee')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, []);

    return (
        <div className='container mt-5 '>
            <h3 className=' d-flex justify-content-center'>Branch List</h3>
            <div className=' d-flex justify-content-end'>
            <Link to="/create" className="btn btn-success">AddBranch
            </Link>{"\n"}
            </div>
            <table className='table table-striped'>
                <thead>
                    <tr className='bg-secondary'>
                        <th>ID</th>
                        <th>BranchName</th>
                        <th>Location</th>
                        <th>Sector</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, i) => {
                        return <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.branchName}</td>
                            <td>{d.location}</td>
                            <td>{d.sector}</td>
                            <td>
                                <Link to="/edit" className='btn btn-sm btn-primary me-2'>Edit</Link>
                                <Link to="/delete" className='btn btn-sm btn-danger me-2'>Delete</Link>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Branch;
