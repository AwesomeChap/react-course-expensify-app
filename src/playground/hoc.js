import React from 'react';
import ReactDOM from 'react-dom';

const info = (props)=>(
    <div>
        <h1>Info</h1>
        <p>The info is : {props.info}</p>
    </div>
);

// const withAdminWarning = (WrappedComponent)=>{
//   return (props)=>(
//     <div>
//         {props.isAdmin && <p>This is private info. Please don't share!</p>}
//         <WrappedComponent {...props}/>
//     </div>
//   );
// };

const AuthInfo = (WrappedComponent)=>{
  return(props)=>(
      <div>
          {props.isAuthenticated ? <WrappedComponent {...props}/> : <h2>Authentication Error!</h2>}
      </div>
  );
};

const AdminInfo = AuthInfo(info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="There are the details"/>, document.getElementById('app'));
ReactDOM.render(<AdminInfo isAuthenticated={true} info="There are the details"/>, document.getElementById('app'));
