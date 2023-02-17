import React from "react";

import { Box } from "@mui/material";

import { flex } from "@common/theme";
import { CreateIcon, DashboardIcon } from "@features/routing/assets";
import { NavItem } from "@features/routing/components/nav-item";
import { NavTile } from "@features/routing/types";

export const SideNavBar: React.FC = () => {
  const navTiles: NavTile[] = [
    {
      title: "Form",
      redirectTo: "/form",
      icon: (isActive) => <CreateIcon active={isActive} />,
    },
    {
      title: "Submissions",
      redirectTo: "/form-data",
      icon: (isActive) => <DashboardIcon active={isActive} />,
    },
  ];

  const getIsActive = (navTile: NavTile) => {
    return navTile.redirectTo === location.pathname || `${navTile.redirectTo}/` === location.pathname;
  };

  return (
    <>
      <Box sx={{ ...flex("column", "center", "space-between"), height: "90%" }}>
        <Box sx={{ width: "100%" }}>
          {navTiles.map((navTile, index) => {
            return (
              <NavItem
                key={index}
                renderIcon={() => navTile.icon(getIsActive(navTile))}
                title={navTile.title}
                isFirst={index === 0}
                to={navTile.redirectTo}
              />
            );
          })}
        </Box>
      </Box>
    </>
  );
};
