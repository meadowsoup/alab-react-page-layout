import {createPortal} from 'react-dom';


function Payload() {
     return createPortal(<h1>I AM PORTAL</h1>, document.getElementById("target"))
}

export default Payload