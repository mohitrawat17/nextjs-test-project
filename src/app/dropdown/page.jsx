
const page = () => {


  return (
    <div style={{display:"flex",flexDirection:"column", alignItems:"center", justifyContent:"center" ,height:"100%", width:"100%"}}>
      {/* <button className="btn" >Click to open dropdown</button> */}
      <input type="checkbox" id="dropdownToggle" className="dropdown-toggle" />
      <label htmlFor="dropdownToggle" className="btn">
        Click to toggle dropdown
      </label>
      <div className='main-drop'>
       <h6>option 1</h6>
       <h6>option 2</h6>
       <h6>option 3</h6>
       <h6>option 4</h6>
       <h6>option 5</h6>
      </div>

    </div>
  )
}

export default page
