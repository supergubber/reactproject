import React,{useState} from "react";
import {
  Container,
  Grid,
  Drawer,
  Box,
  Stack,AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tabs,
  Tab,
  CssBaseline,
  ListSubheader,
  Button,
ListItemAvatar,
  Avatar,
  Typography
} from "@mui/material";
import{Inbox,Home,Undo,Dashboard,Image} from "@mui/icons-material";
import {Outlet,Link} from "react-router-dom";
import MenuItems from "../json-api/drawerMenu";
import ProductMenu from "../json-api/product";

const drawerWidth = 250;
const Dashboardone = () =>{
  const [Active,setActive] = useState(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Nav =({data})=>{
    const design = (
      <ListItemButton sx={{ml:1}}>
        <ListItemIcon sx={{color:"white"}}>
          <span className="material-icons">{data.icon}</span>
        </ListItemIcon>
        <ListItemText sx={{color:"white"}} primary={data.label} />
      </ListItemButton>
    );
    return design;
  }

  const NavHeader = ({data}) =>{
    const design = (
      <List subheader={<ListSubheader sx={{color:"white",background:"#111111"}}>{data.cat}</ListSubheader>
      }>
        {
            data.menus.map((items)=>{
            return <Nav data={items} key={items.id}/>
          })
        }
      </List>
    );
    return design;
  }

  const ProNav = ({data}) =>{
    console.log(data);
    const design = (
      <ListItem>
       <ListItemAvatar>
         <Avatar src="https://mui.com/static/images/avatar/3.jpg" />
       </ListItemAvatar>
       <ListItemText primary={data.primary} secondary={
         <>
         <Typography sx={{color:"white",fontSize:"13px"}}>
          {data.secondary}
         </Typography>
         </>
       }  sx={{color:"white"}}/>
       </ListItem>
    );
    return design;
  }
  const Product=({data})=>{
    const design = (
      <>
        <List subheader={<ListSubheader sx={{background:"#111111",color:"white",fontWeight:"bold"}}>{data.cat}</ListSubheader>}>
          {data.promenu.map((items)=>{
            return <ProNav data={items} key={items.id} />
          })}
        </List>
      </>
    );
    return design;
  }

  const design = (
    <>
        <Container sx={{backgroundColor:"#010101",height:"100vh"}} maxWidth="xxl">
          <AppBar position="fixed" sx={{backgroundColor:"#1F1F1F",zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Stack direction="row" justifyContent="space-between">
              <Toolbar>
                <img src="../../logo.webp" width="180" />
              </Toolbar>
              <Toolbar sx={{width:"70%"}}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  textColor="inherit"
                   // variant="fullWidth"
                  // aria-label="full width tabs example"
                     // variant="fullWidth"
                  sx={{color:"rgba(255, 255, 255, 0.7)"}}
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: "#fff",
                    }
                  }}
                >
                  <Tab label="Virtual Trading"
                    // {...a11yProps(0)}
                    sx={{mr:20}}
                  />
                  <Tab label="Traduction"
                    // {...a11yProps(1)}
                    sx={{mr:20}}
                  />
                  <Tab label="Trade Bunch"
                    // {...a11yProps(2)}
                    sx={{mr:20}}
                  />
                  <Tab label="A.I Trading"
                    sx={{mr:20}}
                  />
                </Tabs>
              </Toolbar>

              <Toolbar>
              <IconButton sx={{color:"white",backgroundColor:"rgba(255, 255, 255, 0.2)"}}>
                <Undo />
                </IconButton>
              </Toolbar>
            </Stack>
          </AppBar>

          <Drawer
           variant="permanent"
           anchor="left"
            sx={{
              width:drawerWidth,
              "& .MuiDrawer-paper":{
                width:drawerWidth,
                backgroundColor:"#111111"
              }
            }}
          >
          <Toolbar />

          <List subheader={<ListSubheader sx={{backgroundColor:"#111111",my:2}}><Button variant="outline" startIcon={<Dashboard />}  sx={{width:"90%",mr:2,backgroundColor:"rgba(255, 255, 255, 0.2)",color:"white"}} color="inherit">Dashboard</Button></ListSubheader>} />
            {
              MenuItems.map((items)=>{
                return <NavHeader data={items} key={items.id}/>
              })
            }
          </Drawer>
          <Drawer
           variant="permanent"
           anchor="right"
            sx={{
              width:drawerWidth,
              "& .MuiDrawer-paper":{
                width:drawerWidth,
                backgroundColor:"#111111"
              }
            }}
          >
          <Toolbar />
            {
              ProductMenu.map((items)=>{
                return <Product data={items} key={items.id}/>
              })
            }
          </Drawer>
          <Toolbar />
          <Box sx={{mb:100,width:"66%",marginLeft:"250px"}}>

            <h1 style={{color:"white"}}>one</h1>
          </Box>
        </Container>
    </>
  );
  return design;
}
export  default Dashboardone;
