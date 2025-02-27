import EmployeeListItem from "./EmployeeListItem";

function EmployeeList() {
     return(
          <div className="Employee-List"> 
               <EmployeeListItem name="James King" title="President and CEO" />
               <EmployeeListItem name="Julie Taylor" title="VP of Marketing" />
               <EmployeeListItem name="Eugene Lee" title="CFO" />
               <EmployeeListItem name="John Williams" title="VP of Engineering" />
               <EmployeeListItem name="Ray Moore" title="VP of Sales" />
               <EmployeeListItem name="Paul Jones" title="QA Manager" />
          </div>
     );
}

export default EmployeeList;