import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import PeopleIcon from "@material-ui/icons/People";
import EditIcon from "@material-ui/icons/Edit";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Link from "next/link";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon
          style={{
            color: "#556cd6",
          }}
        />
      </ListItemIcon>
      <Link href="/dashboard/">
        <a>
          <ListItemText primary="Dashboard" />
        </a>
      </Link>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <AddCircleOutlineIcon
          style={{
            color: "#556cd6",
          }}
        />
      </ListItemIcon>
      <Link href="/dashboard/symptoms">
        <a>
          <ListItemText primary="Add Symptoms" />
        </a>
      </Link>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <AllInboxIcon
          style={{
            color: "#556cd6",
          }}
        />
      </ListItemIcon>
      <Link href="/dashboard/allSymptoms">
        <a>
          <ListItemText primary="View Symptoms" />
        </a>
      </Link>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <PeopleIcon
          style={{
            color: "#556cd6",
          }}
        />
      </ListItemIcon>
      <Link href="/dashboard/users">
        <a>
          <ListItemText primary="Users" />
        </a>
      </Link>
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Settings</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <VpnKeyIcon
          style={{
            color: "#556cd6",
          }}
        />
      </ListItemIcon>
      <Link href="/dashboard/changePassword">
        <a>
          <ListItemText primary="Change Password" />
        </a>
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <EditIcon
          style={{
            color: "#556cd6",
          }}
        />
      </ListItemIcon>
      <Link href="/dashboard/updateProfile">
        <a>
          <ListItemText primary="Update Profile" />
        </a>
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ExitToAppIcon
          style={{
            color: "red",
          }}
          onClick={() => console.log("SignOut")}
        />
      </ListItemIcon>
      <ListItemText onClick={() => console.log("SignOut")} primary="SignOut" />
    </ListItem>
  </div>
);
