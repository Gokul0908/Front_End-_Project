import React from 'react';
import { Link } from 'react-router-dom';

function DeleteBranch() {
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
            <h2 className='mb-4'>Delete Details</h2>
            <form>
                <div className='mb-2'>
                    <label htmlFor='BranchName'><strong>Branch Name :</strong> </label>
                    <input type='text' name='branchName' className='form-control' placeholder='Enter branch name' 
                    />
                </div>
                
                <div  className='mb-2'>
                    <label htmlFor='Location'><strong>Location:</strong> </label>
                    <input type='text' name='location' className='form-control' placeholder='Enter Location'
                     />
                </div>
                <div  className='mb-3'>
                    <label htmlFor='sector'><strong>Sector:</strong> </label>
                    <input type='text' name='sector' className='form-control' placeholder='Enter Sector' 
                    />
                </div>
                <div className='pt-3'>
                <button className='btn btn-success'>Delete</button>
                <Link to="/" className='btn btn-primary ms-3' >Back</Link>
                </div>
            </form>

        </div>
        
    </div>
    )
}

export default DeleteBranch
