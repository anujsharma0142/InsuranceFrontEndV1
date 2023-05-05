import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@mui/material/Card';
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CancelIcon from '@mui/icons-material/Cancel';
export default function ImgMediaCard({count, classes}) {
  return (
      <Card className={classes}>
        <CardHeader
          avatar={
            <CancelIcon color="error" fontSize="large"/>
          }
          action={
            <Avatar color="warning" className='mt-2 text-dark' style={{ backgroundColor: '#fff' }} fontSize="large" >
              {count}
            </Avatar>
          }
          title="Rejected"
          subheader="The rejected request count is"
        />
      </Card>
  );
}
