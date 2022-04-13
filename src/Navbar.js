import './Navbar.css';
import Dropdown from './Component/Dropdown';
import Search from './Movies/filter';


const list = [
    {
      label: "Faycal",
      url: "#",
    },
    {
      label: "GMC",
      url: "#",
    },
];
  



function Navbar() {
    return (
        <header className="Nav" >
            <div  className="Nav_title" >
                <h1>Movie<br/>Space</h1>
            </div>
            
            <nav className="nav">
          <form onSubmit={Search()} >
          <input className="searchbar" placeholder="Search" type="search" name="mov" />
        <button type='submit' className="searchbtn">
              </button>
            </form>
      </nav>
        <div className="location">
        <select className="Headselect" name="Whisconsin">
          <option value="Warsaw,Poland">Warsaw,Poland</option>
          <option value="Algeirs,Algeria">Algeirs,Algeria</option>
                </select>
                <div className="locationico" >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='yellow' viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
                </div>
        </div>
            
            <Dropdown title={"Profile"} options={list}></Dropdown>
            
        </header>
    )
}


export default Navbar;