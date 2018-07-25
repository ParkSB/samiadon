import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Navigation() {
  return (
    <div className="navigation">
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit">
            { '부탁해요! 사미아돈!' }
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigation;
