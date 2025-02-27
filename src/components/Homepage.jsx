import Header from "./header"
import SearchBar from "./SearchBar"
import EmployeeList from "./EmployeeList"
// import Learner from "./Learner"

function Homepage() {
     return(
          <div>
          <Header />
          <SearchBar />
          <EmployeeList />
          {/* <Learner /> */}
          </div>
     );
}

export default Homepage