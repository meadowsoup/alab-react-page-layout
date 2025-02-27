function EmployeeListItem({name, title}) {
     return(
          <div className="Employee-Item">
               {/* <img src="" alt="" />
               <h2></h2> */}
               <div className="employee-avatar"></div>
               <div className="employee-info">
                    <p className="employee-name">{name}</p>
                    <p className="employee-title">{title}</p>
               </div>
          </div>
     );
}

export default EmployeeListItem;