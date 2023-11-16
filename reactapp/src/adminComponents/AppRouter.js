//appRouter
import React from 'react';
import{BrowserRouter,Route,Routes} from 'react-router-dom';
import Branch from './Branch';
//import Bran
import AddBranch from './AddBranch';
import EditBranch from './EditBranch';
import EmpTable from './EmpTable';
import AddEmp from './AddEmp';
import EditEmp from './EditEmp';
import ProjectTable from './ProjectTable';
import AddProject from './AddProject';
import EditProject from './EditProject';
import AdminDash from './AdminDash';
import Header from './Header';
import './Header.css';
import Sidebar from './Sidebar';
//import DeleteBranch from './DeleteBranch';


const AppRouter = () => {
    return (
        <div className='app-container'>
     
      <BrowserRouter>
      <Header />
        <div className='content-container'>
          <div className='sidebar-container'>
            <Sidebar />
          </div>
          <div className='body-container'>
            <Routes>
                   <Route path='/' element={<AdminDash/>}></Route>
                   
                   <Route path='/branch' element={<Branch/>}/>
                   <Route path='/create' element={<AddBranch/>}/>
                   <Route path='/edit/:id' element={<EditBranch />} />
                
                
                 
                  
                   <Route path='/emp' element={<EmpTable/>}/>
                   <Route path='/empcreate' element={<AddEmp/>}/>
                   <Route path='/empedit/:id' element={<EditEmp />} />
                  
                    <Route path='/project' element={<ProjectTable/>}/>
                   <Route path='/projectcreate' element={<AddProject/>}/>
                   <Route path='/projectedit/:id' element={<EditProject />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
    )
}

export default AppRouter
