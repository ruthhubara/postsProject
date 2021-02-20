

// function setText(Component) {
//     return class setText extends React.Component{
//         constructor(props){
//             super(props);
//             this.state={text:"", mobile: ""};
//         }  
        
//         changeText=(newText)=>{
//             this.setState({text: changeTextToUpperCase(newText)})
//         }

//         changeMobile=(newText)=>{

//             this.setState({mobile: changeTextToUpperCase(newText)})
//         }

//         changeTextToUpperCase (text)
//         {
//             return text.toUpperCase();
//         }
//         render(){
//             return (
//                 <Component text={this.text}mobile={this.mobile}{...this.props}/>
//             );
//         }
//     }
   
// }
// export const UserFormHierOrderComponent=setText(class UserForm extends React.Component{
//     render (){
        
//         const { text,mobile }=this.props;
        
//         return(
//             <p>Ticks....{text,mobile}</p>
//         );
//     }
// });
// export const ShowTextkHierOrderComponent=setText(class ShowText extends React.Component{
//     render (){
        
//         const { text }=this.props;
//         return(
//             <p>Ticks....{text}</p>
//         );
//     }
// });

// export default function Example1(props) {
//     return(
//         <div className="row">
//             <Header></Header>
//             <div>Do the best test you can</div>
//         </div>
//     );
// };
// export default function Example2(props) {
//     return(
//         <div className="row">
//             <Header></Header>
//             <div>Examine yiurself carfully</div>
//         </div>
//     );
// };
// //customHook
// export function Header(props) {
//     return (
        
//             <div>Hllow Students</div>
//     );
// }
// export default function Router(props) {
//     return(
//         <Router>
//             <div>
//             <Menu/>
//                 <switch>
//                     <Route path="/UserDetails">
//                         <UserDetails/>
//                     </Route>
//                     <Route path="/buyDetails">
//                         <buyDetails/>
//                     </Route>
//                     <Route path="/paymentDetails">
//                         <paymentDetails/>
//                     </Route>
//                 </switch>
//             </div>
//         </Router>
//     )
// }
// function Menu() {
//     return (
//         <nav style={{ textAlign: 'left' }}>
            
//                 <div>
//                     <Link to="/UserDetails">UserDetails</Link>
                  
//                 </div>
//                 <div>
//                     <Link to="/buyDetails">buyDetails</Link>
//                 </div>
//                 <div>
//                     <Link to="/paymentDetails">paymentDetails</Link>
//                 </div>
 
//         </nav>
//     );
// }


