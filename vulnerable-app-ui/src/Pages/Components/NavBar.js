import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SchoolIcon from "@mui/icons-material/School";
import { useNavigate } from "react-router-dom";
import { getUserRole, Roles, isEnterprise } from "../../Utils/Utils";

const pages = [
    {
        name: "Movies",
        route: "/movies",
        hide: false,
    },
    {
        name: "Add Movie",
        route: "/addmovie",
        hide: !isEnterprise(),
    },
    {
        name: "Users",
        route: "/users",
        hide: getUserRole() !== Roles.Admin,
    },
];

const settings = ["Profile", "Account", "Logout"];

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    let navigate = useNavigate();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (route) => {
        setAnchorElNav(null);
        return navigate(route);
    };

    const handleCloseUserMenu = (setting) => {
        setAnchorElUser(null);

        if (setting === "Logout") {
            sessionStorage.removeItem("token");
            localStorage.removeItem("role");

            return navigate("/login");
        }
    };

    return (
        <AppBar position="static" className="navbar">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <SchoolIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        UTN
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages
                                .filter((x) => !x.hide)
                                .map((page) => (
                                    <MenuItem
                                        key={page.name}
                                        onClick={() => handleCloseNavMenu(page.route)}
                                    >
                                        <Typography textAlign="center">{page.name}</Typography>
                                    </MenuItem>
                                ))}
                        </Menu>
                    </Box>
                    <SchoolIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        UTN
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        {pages
                            .filter((x) => !x.hide)
                            .map((page) => (
                                <Button
                                    key={page.name}
                                    onClick={() => handleCloseNavMenu(page.route)}
                                    sx={{ my: 2, color: "white", display: "block" }}
                                >
                                    {page.name}
                                </Button>
                            ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem
                                    key={setting}
                                    onClick={() => handleCloseUserMenu(setting)}
                                >
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;
