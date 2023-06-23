// import React from "react";
// //import { useParams } from 'react-router-dom';

// const UserProfile = () => {
//     // let { id } = useParams()
//     return ( 
//         <div>
//           <h1>i am a backend developer living in addis ababa</h1>
//         </div>
//      );
// }
 
// export default UserProfile;
import { Link } from "react-router-dom"
function Header(props){
    return(
      <Link to='/users'>View a list of users</Link>
    )
  }
export default Header  