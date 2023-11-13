import React from 'react';
import{BrowserRouter,Route,Routes} from 'react-router-dom';
import Branch from './Branch';
import AddEmp from './AddBranch';
import EditBranch from './EditBranch';
import DeleteBranch from './DeleteBranch';


const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Branch/>}/>
                    <Route path='/create' element={<AddEmp/>}/>
                    <Route path='/edit' element={<EditBranch/>}/>
                    <Route path='/delete' element={<DeleteBranch/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter
