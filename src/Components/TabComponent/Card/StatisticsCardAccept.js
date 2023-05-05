import React from "react";
import Card from '@mui/material/Card';
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function ImgMediaCard({count, classes}) {
  return (
    // Render a Card component with the specified class name
    <Card className={classes}> 
      <CardHeader
        // Display a green checkmark icon on the left of the CardHeader component
        avatar={<CheckCircleIcon color="success" fontSize="large"/>}
        // Display an Avatar component on the right of the CardHeader component
        action={
          <Avatar color="warning" className='mt-2 text-dark' style={{ backgroundColor: '#fff' }} fontSize="large" >
            {count}
          </Avatar>
        }
        title="Approved"
        subheader="The approved request count is"
      />
    </Card>
  );
}




// import React from "react";
// import Card from '@mui/material/Card';
// import CardHeader from "@material-ui/core/CardHeader";
// import Avatar from "@material-ui/core/Avatar";
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// export default function ImgMediaCard({count, classes}) {
//   return (
//     //Render a Card component with the specified class name
//       <Card className={classes}> 
//         <CardHeader
//           avatar={
//               <CheckCircleIcon color="success" fontSize="large"/>
//           }
//           action={
//             <Avatar color="warning" className='mt-2 text-dark' style={{ backgroundColor: '#fff' }} fontSize="large" >
//               {count}
//             </Avatar>
//           }
//           title="Approved"
//           subheader="The approved request count is"
//         />
//       </Card>
//   );
// }
