import React,{useState } from 'react';
import ReactDOM from 'react-dom/client';
import './project.css';


// NAV BAR
function Component(){
   return (
    

      <nav className="navbar navbar-expand-lg bg-warning navbar-light sticky-top p-0">
        <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
           <img src="Navbar_Logo.png" alt=" Logo" style={{width:"40px"}}  />
            <img src="menu.png" alt="Logo" style={{width:"25px"}} className='ms-3 hide'/>
            <span className='ms-3 text-light hide'>Dream Technologies</span>
        </a>
       
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
               <div className='mt-3 '>
                        <form className="d-flex ">
                      
                          <input className="form-control srh " type="search" placeholder="Search here" aria-label="Search"/>
                          <i className="fa-solid fa-magnifying-glass mt-2 iconn"></i>
                        </form> 
                    </div>
                <i class="fa-solid fa-font-awesome text-white mt-4"></i>
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu fade-up m-0">
                        <a href="#" className="dropdown-item">Products</a>
                        <a href="#" className="dropdown-item">Our Team</a>
                        <a href="#" className="dropdown-item">Testimonial</a>
                        <a href="#" className="dropdown-item">Our Works</a>
                    </div>
                </div>

                <a href="#" className="nav-item nav-link"><i class="fa-solid fa-bell text-white"></i><sup className="badge bg-primary icon1">4</sup></a>
                <a href="#" className="nav-item nav-link"><i class="fa-solid fa-comment text-white"></i><sup className="badge bg-primary icon1">4</sup></a>
                </div>
            <a className="navbar-brand hide1" href="#"><img src="pic-2.png" alt=" Logo" style={{width:"40px"}} className="rounded-pill mt-2 "/></a> 
            <div className="nav-item dropdown me-5">
                    <a href="#" className="nav-link dropdown-toggle text-white" style={{fontFamily:"Times New Roman', Times, serif"}} data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu fade-up m-0 ">
                        <a href="#" className="dropdown-item ">Products</a>
                        <a href="#" className="dropdown-item">Our Team</a>
                        <a href="#" className="dropdown-item">Testimonial</a>
                        <a href="#" className="dropdown-item">Our Works</a>
                    </div>
                </div>
         
        </div>
    </nav>
     );
  }
//NAVBAR END

//ADD Buttons
  // function Add(){
  //   const[modal,setmodal]=useState(false)
  //     return (
  //       <div className='add' id="add">
  //         <div>
  //           <h4>Subscrpitions</h4>
  //           <p>Plan / Dashborad</p>
  //       </div>
  //         <Modal size='md' isOpen={modal}
  //         toggle={()=>setmodal(!modal)}>
  //       <ModalHeader toggle={()=>setmodal(!modal)}>
  //       <h5>Add Plan</h5>
  //      </ModalHeader>
  //       <ModalBody>
  //         <form>
  //             <Row>
  //                <Col lg={12}>
  //                 <div className="row">
  //                   <div className="col-6 mb-2">
  //                       <label>name</label>
  //                       <input
  //                       type='text' className="form-control" placeholder='enter the name'/>
  //                   </div>
  //                   <div className="col-6 mb-2">
  //                       <label>name</label>
  //                       <input
  //                       type='text' className="form-control" placeholder=''/>
  //                   </div>
  //                   <div className="col-6">
  //                       <label>name</label>
  //                       <label for="sel1" className="form-label">Plan Amount</label>
  //                         <select className="form-select" id="sel1" name="sellist1">
  //                           <option>Monthly</option>
  //                           <option>weekly</option>
  //                           <option>yearly</option>
  //                           <option>day</option>
  //                         </select>
  //                   </div>
  //                   <div className="col-6">
  //                   <label>name</label>
  //                       <label for="sel1" className="form-label">Plan Amount</label>
  //                         <select className="form-select" id="sel1" name="sellist1">
  //                           <option>Monthly</option>
  //                           <option>weekly</option>
  //                           <option>yearly</option>
  //                           <option>day</option>
  //                         </select>
  //                   </div>
  //                   <div className="col-6">
  //                   <label>name</label>
  //                       <label for="sel1" className="form-label">Plan Amount</label>
  //                         <select className="form-select" id="sel1" name="sellist1">
  //                           <option>Monthly</option>
  //                           <option>weekly</option>
  //                           <option>yearly</option>
  //                           <option>day</option>
  //                         </select>
  //                   </div>
  //                   <div className="col-6">
  //                   <label>name</label>
  //                       <label for="sel1" className="form-label">Plan Amount</label>
  //                         <select className="form-select" id="sel1" name="sellist1">
  //                           <option>Monthly</option>
  //                           <option>weekly</option>
  //                           <option>yearly</option>
  //                           <option>day</option>
  //                         </select>
  //                   </div>
  //                   <label className="mt-3">Comments</label>
  //                 <div className="form-floating mb-3 ">
  //                   <textarea className="form-control " id="comment" name="text" placeholder="Comment goes here"></textarea>
  //                   <label for="comment"></label>
  //                 </div>
  //                 <label className="form-check-label" for="mySwitch">Status</label>
  //                 <div className="form-check form-switch ">
  //                   <input className="form-check-input bg-danger" type="checkbox" id="mySwitch" name="darkmode" value="yes" checked/>
  //                 </div>
  //                   <button type="submit" className="btn mt-3 btn3">Submit</button>
  //                 </div>
  //                </Col>
  //             </Row>
  //         </form>
  //       </ModalBody>
  //     </Modal>
  //     <button className='btn mm' onClick={()=>setmodal(true)}>+Add subscrpitions</button>
  //       </div>
  //     );
  //   }
    //ADD Buttons end


    function Add(){
      return (
       
    <div className="container mt-3 mb-5">
                  <div className='float-start'>
                        <h3>Subscriptions</h3>
                        <p>Plan/<span className="text-danger">Annual income</span></p>
                    </div>
                
                  
                
          <div className='float-end'>
                  <button type="button" 
                class="btn btn-warning rounded-pill" 
                style={{width:"140px"}}
                data-bs-toggle="modal" 
                data-bs-target="#static"> 
            Add Subscription
        </button> 
        </div>
  
        <div class="modal fade" 
             id="static" 
             data-bs-backdrop="static"> 
            <div class="modal-dialog"> 
                <div class="modal-content"> 
                    <div class="modal-header border-0"> 
                        <h5 class="modal-title ms-auto"> 
                           Add Plan
                        </h5> 
                        <button type="button" 
                                class="btn-close bg-secondary rounded-pill" 
                                data-bs-dismiss="modal" 
                                aria-label="Close"> 
                        </button> 
                    </div> 
                    <div class="modal-body "> 
                    <div className="row">
          <div className="col-md-6  mb-2">
              <label className='mb-2 '>name</label>
              <input
              type='text' className="form-control" placeholder='' value="name"/>
          </div>
          <div className="col-md-6  mb-2">
              <label className='mb-2 '>name</label>
              <input
              type='text' className="form-control" placeholder=''/>
          </div>
          <div className="col-md-6 mt-2 mb-2">
              
              <label for="sel1" className="form-label ">Plan Amount</label>
                <select className="form-select" id="sel1" name="sellist1">
                  <option>Monthly</option>
                  <option>weekly</option>
                  <option>yearly</option>
                  <option>day</option>
                </select>
          </div>
          <div className="col-md-6 mt-2 mb-2">
     
              <label for="sel1" className="form-label ">Plan Amount</label>
                <select className="form-select" id="sel1" name="sellist1">
                  <option>Monthly</option>
                  <option>weekly</option>
                  <option>yearly</option>
                  <option>day</option>
                </select>
          </div>
          <div className="col-md-6 mt-2 mb-2">
        
              <label for="sel1" className="form-label ">Plan Amount</label>
                <select className="form-select" id="sel1" name="sellist1">
                  <option>Monthly</option>
                  <option>weekly</option>
                  <option>yearly</option>
                  <option>day</option>
                </select>
          </div>
          <div className="col-md-6 mt-2 mb-2">
          
              <label for="sel1" className="form-label ">Plan Amount</label>
                <select className="form-select" id="sel1" name="sellist1">
                  <option>Monthly</option>
                  <option>weekly</option>
                  <option>yearly</option>
                  <option>day</option>
                </select>
          </div>
          <label className="comment">Comments</label>
        <div className="form-floating mb-3  ">
      
          <textarea className="form-control h-100" id="comment" rows="5" name="text" placeholder=""></textarea>
         
        </div>
        <div className="form-check form-switch">
        <label className="form-check-label " for="mySwitch">Status</label><br/>
        <input className="form-check-input bg-danger ms-0  " style={{height:"25px",width:"50px"}} type="checkbox" id="mySwitch" name="darkmode" value="yes"/>

</div>
</div>


<div className="modal-footer border-0">
<button type="button" className="btn btn-warning text-light rounded-pill mx-auto" style={{width:"180px"}} >Submit</button>
</div>

</div>
</div>
</div>
</div>
</div>
);
  }

function Mul(){
      return(
    
        <div className="btn-group   btn1" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" />
        <label className="btn btn-outline-secondary  " for="btnradio1">Apple</label>
      
        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" checked/>
        <label className="btn btn-outline-secondary " for="btnradio2">Samsung</label>
      
       
      </div>
 );
    }
  

    

    //Cards
    function Sub(){
      return(
        <div className="container" id="bcard">
           <div className="row mt-1">
                      <div className="col-md-4 mb-3">
                         <div className="card shadow-sm">
                          <div className="card-body">
                              <h5 className="card-title text-center">Free</h5>
                              <h1 className="card-title text-center">$0<sub>/mo</sub></h1>
                              <p><i class="fa-solid fa-check ms-2 text-success"></i>User</p>
                              <p><i className="fa-solid fa-check ms-2 text-success"></i>5gb storage </p>
                              <p><i className="fa-solid fa-check ms-2 text-success"></i>50gb projects</p>
                              <p><i className="fa-solid fa-check ms-2 text-success"></i>5gb storage </p>
                              <p><i className="fa-solid fa-check ms-2 text-success"></i>50gb projects</p>
                             
                                <button type="button" className="btn btn-secondary w-100">Edit</button>
                             
                              
                            </div>
                         </div>
                      </div>

                     <div className="col-md-4 mb-3">
                          <div className="card shadow-sm">
                            <div className="card-body">
                              <h5 className="card-title text-center">Professional</h5>
                              <h1 className="card-title text-center">$886<sub>/mo</sub></h1>
                              <p><i class="fa-solid fa-check ms-2 text-success"></i>User</p>
                              <p><i className="fa-solid fa-check ms-2 text-success"></i>5gb storage phone</p>
                              <p><i className="fa-solid fa-check ms-2 text-success"></i>50gb projects</p>
                              <p><i className="fa-solid fa-check ms-2 text-success"></i>5gb storage </p>
                              <p><i className="fa-solid fa-check ms-2 text-success"></i>50gb projects</p>
                              
                                <button type="button" className="btn btn-secondary w-100">Edit</button>
                           
                            </div>
                         </div>
                      </div>

                      <div className="col-md-4">
                          <div className="card shadow-sm">
                            <div className="card-body">
                              <h5 className="card-title text-center">Enterprise</h5>
                              <h1 className="card-title text-center">$388<sub>/mo</sub></h1>
                              <p><i class="fa-solid fa-check ms-2 text-success"></i>User</p>
                              <p><i className="fa-solid fa-check ms-2 text-success"></i>5gb storage </p>
                              <p><i className="fa-solid fa-check ms-2 text-success"></i>50gb projects</p>
                              <p><i className="fa-solid fa-check ms-2 text-success"></i>5gb storage </p>
                              <p><i className="fa-solid fa-check ms-2 text-success"></i>50gb projects</p>
                            
                                <button type="button" className="btn btn-secondary w-100">Edit</button>
                             
                            </div>
                         </div>
                      </div>
            </div>
        </div>
      );
      }
      //Cards end

      //Table 
      function Table()
      {
        return (
          <div class="table-responsive-sm"> 
          <div className="container  pt-4" id="tble">
              <table className="table caption-top shadow-sm">
                  <caption className="border">Road to Web-Developer </caption>
              <tbody>
                <tr>
                    <th scope="col">No<i className="fa-solid fa-down-long"></i></th>
                    <th scope="col">Course<i className="fa-solid fa-down-long"></i></th>
                    <th scope="col">Practice<i className="fa-solid fa-down-long"></i></th>
                    <th scope="col">Exercise<i className="fa-solid fa-down-long"></i></th>
                    <th scope="col">Exercise<i className="fa-solid fa-down-long"></i></th>
                    <th scope="col">Exercise<i className="fa-solid fa-down-long"></i></th>
               </tr>
              <tr>
                <th scope="row">1</th>
                <td>HTML- Basics</td>
                <td>Tag usage</td>
                <td>Create a Form</td>
                <td>Create a Form</td>
                <td><button type="button" className="btn btn-primary bg-primary ">Sony</button></td>
             </tr>
            <tr>
                <th scope="row">2</th>
                <td>HTML- Basics</td>
                <td>Tag usage</td>
                <td>Create a Form</td>
                <td>Create a Form</td>
                <td><button type="button" className="btn btn-primary bg-primary">Sony</button></td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>CSS- Basics</td>
                <td>Properties usage</td>
                <td>Design a Form</td>
                <td>Create a Form</td>
                <td><button type="button" className="btn btn-primary bg-primary">Sony</button></td>
            </tr>
            </tbody>
          </table>
        </div>
        </div>
        );
      }
      //Table end

      //Footer
      function Div(){
        return (
                <div id="footer">
                  <i className="fa-solid fa-gear"></i>
                </div>
           );
          }

    function Parent(){
      return(
        <>
        <Component/>
        <Add/>
        <Mul/>
        <Sub/>
        <Table/>
        <Div/>
     </>
        );
    }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Parent/>);











