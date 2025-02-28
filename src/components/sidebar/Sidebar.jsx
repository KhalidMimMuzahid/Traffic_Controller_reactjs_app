/* eslint-disable react/prop-types */

import {
  Drawer,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  Button,
} from "@material-tailwind/react";
import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FancyText from "../microComponent/fancyText";
import { useDispatch } from "react-redux";
import { logout } from "../../app/features/auth/authSlice";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isCPanelExpanded, setCPanelExpanded] = useState(false);
  const closeDrawer = () => setOpen(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/signin");
  };

  return (
    <Fragment>
      <Drawer
        open={open}
        onClose={closeDrawer}
        className="bg-secondary shadow-neutral shadow-inner flex flex-col justify-between"
      >
        <div>
          {/* Header */}
          <div className="mb-2 flex items-center justify-between p-4">
            <Typography variant="h5" color="primary">
              <FancyText text={"AI Policing"} />
            </Typography>
            <IconButton
              variant="text"
              color="accent"
              className="text-accent"
              onClick={closeDrawer}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>

          {/* Menu Items */}
          <List className="gap-2">
            <ListItem className="bg-accent hover:bg-neutral text-primary">
              Dashboard
            </ListItem>
            <ListItem className="bg-accent hover:bg-neutral text-primary">
              <Link
                to="/zones"
                className="hover:text-secondary transition-colors"
              >
                Zones
              </Link>
            </ListItem>
            <ListItem className="bg-accent hover:bg-neutral text-primary">
              <Link
                to="/analytics"
                className="hover:text-secondary transition-colors"
              >
                Analytics
              </Link>
            </ListItem>

            {/* C Panel (Expandable Menu) */}
            <ListItem
              className="bg-accent hover:bg-neutral text-primary flex flex-col justify-between items-center cursor-pointer "
              onClick={() => setCPanelExpanded(!isCPanelExpanded)}
            >
              <div className="flex justify-between   w-full">
                <div className="flex items-center">
                  <ListItemPrefix>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </ListItemPrefix>
                  C Panel
                </div>
                <motion.span
                  animate={{ rotate: isCPanelExpanded ? 90 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="inline-block"
                >
                  ▶
                </motion.span>
              </div>

              {/* Expandable Sub-menu */}
              <AnimatePresence>
                {isCPanelExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className=""
                  >
                    <List className="ml-6 border border-accent">
                      <ListItem className="bg-tertiary text-primary hover:bg-neutral">
                        <Link to="/cpanel/users">Users</Link>
                      </ListItem>
                      <ListItem className="bg-tertiary text-primary hover:bg-neutral">
                        <Link to="/zones">Zones</Link>
                      </ListItem>
                      <ListItem className="bg-tertiary text-primary hover:bg-neutral">
                        <Link to="/cameras">Cameras</Link>
                      </ListItem>
                    </List>
                  </motion.div>
                )}
              </AnimatePresence>
            </ListItem>
          </List>
        </div>

        {/* Logout Button */}
        <div className="p-4">
          <Button
            onClick={handleLogout}
            className="w-full bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition"
          >
            Logout
          </Button>
        </div>
      </Drawer>
    </Fragment>
  );
};

export default Sidebar;
