import logo from './logo.svg';
import './App.css';
import { CoinDetailsPage } from './pages/CoinDetailsPage';
import { CoinSummaryPage } from './pages/CoinSummaryPage';
import { Header } from './components/Header';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import { WatchListContextProvider } from './context/WatchListContext';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
function App() {
  return (
    <div className="App">

<WatchListContextProvider>
<BrowserRouter>
   {/* <Header/> */}

   {/* <Navbar bg="dark" variant="dark" >

    <div style={{marginLeft:"2px"}}> 

        <img
          alt=""
          src="/logo192.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          style={{marginLeft:"0px !important",marginTop:"-3px"}}
        />
  <div style={{display:"inline"}}>&nbsp</div>


      </div>
      <h3 style={{display:"inline",color:"white", marginTop:"3px"}}>Cryptoverse</h3>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Link  style={{ textDecoration: "none",marginTop:"15px" }} to={`/coins/bitcoin`}> <p className="nav-bar-itemz"  style={{color:"white",display:"inline",margin:"0px 10px"}}>Home</p></Link>
      <Link style={{ textDecoration: "none",marginTop:"15px" }} to={`/portfolio`}>   <p className="nav-bar-itemz" style={{color:"white",display:"inline",margin:"0px 10px"}}> portfolio </p></Link>
      <Link style={{ textDecoration: "none",marginTop:"15px" }} to={`/coins/bitcoin`}> <p className="nav-bar-itemz" style={{color:"white",display:"inline",margin:"0px 10px"}}> crypto-news </p> </Link>
      <Link style={{ textDecoration: "none",marginTop:"15px" }} to={`/coins/bitcoin`}>  <p className="nav-bar-itemz" style={{color:"white",display:"inline",margin:"0px 15px"}}> top trending stocks </p>  </Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="zzxc">
          <NavDropdown.Item href="#action/3.1" > Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
 <p style={{display:'inline'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <li class="nav-item dropdown auth-drop-down" >
                            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user"></i> 
                                </a>
                            <div class="dropdown-menu dropdown-menu-right dropdown-unique" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
      </Nav>
    </Navbar.Collapse>


  </Navbar>   */}
  
{/* <br/>
<br/> */}
<nav class="navbar navbar-dark navbar-expand-sm bg-dark fixed-top">
        <div class="container">
        <a href="/" class="navbar-brand">
        <i class="fas fa-blog"></i> &nbsp;
        Blog Template
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>


        <div id="navbarCollapse" class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a href="" class="nav-link active">
                    Home
                </a>
            </li>
            <li class="nav-item">
                <a href="" class="nav-link active">
                    Blog
                </a>
            </li>
            <li class="nav-item">
                <a href="" class="nav-link active">
                    About
                </a>
            </li>
            <li class="nav-item">
                <a href="" class="nav-link active">
                    Contact
                </a>
            </li>
        </ul>
        </div>



    </div>
  </nav>
   <Route exact path="/" component={CoinSummaryPage}/>
   <Route  path="/coins/:id" component={CoinDetailsPage}/>
<Route path="/portfolio" component={()=><div style={{color:"white"}}>portfolio</div>}/>
</BrowserRouter>
</WatchListContextProvider>

    </div>
  );
}

export default App;


