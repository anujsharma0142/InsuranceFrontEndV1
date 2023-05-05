import React from "react";
import Card from '@mui/material/Card';
import CardHeader from "@material-ui/core/CardHeader";
import PendingIcon from '@mui/icons-material/Pending';
import Avatar from '@mui/material/Avatar';

export default function ImgMediaCard({count, classes}) {
  return (
    // Render a Card component with the specified class name
    <Card className={classes}>
      <CardHeader
        // Display a yellow warning icon on the left of the CardHeader component
        avatar={<PendingIcon color="warning" fontSize="large" />}
        // Display an Avatar component on the right of the CardHeader component
        action={
          <Avatar color="warning" className='mt-2 text-dark' style={{ backgroundColor: '#fff' }} fontSize="large" >
            {count}
          </Avatar>
        }
        // Display "Pending" as the title of the CardHeader component
        title="Pending"
        // Display "The pending request count is" as the subheader of the CardHeader component
        subheader="The pending request count is"
      />
    </Card>
  );
}

