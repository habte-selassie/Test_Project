// const MoreTraveledPath = () => {
//     return ( 
//        <h1>a</h1>
//      );
// }
 
// export default MoreTraveledPath;

function NoMatch(props){
  //const location = useLocation()
  return(
    <h1>{window.location.pathname} is not a matching path</h1>
  )
}
export default NoMatch