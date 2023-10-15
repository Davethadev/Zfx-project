import { useState } from "react";
import { Group, Code } from "@mantine/core";
import { Link } from "react-router-dom";
import {
  IconBellRinging,
  IconSettings,
  IconSwitchHorizontal,
  IconLogout,
  IconLayoutDashboard,
  IconCash,
  IconWallet,
  IconUser,
} from "@tabler/icons-react";
// import { MantineLogo } from "@mantine/ds";
import classes from "../css/Sidebar.module.css";

const data = [
  { link: "/dashboard", label: "Dashboard", icon: IconLayoutDashboard },
  { link: "/profile", label: "Profile", icon: IconUser },
  { link: "/deposits", label: "Deposits", icon: IconCash },
  { link: "/withdrawals", label: "Withdrawals", icon: IconWallet },
  { link: "/notifications", label: "Notifications", icon: IconBellRinging },
];

export function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === active || undefined}
      to={item.link}
      key={item.label}
      onClick={() => {
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={`hidden md:block ${classes.navbar}`}>
      <div className={classes.navbarMain}>
        <h1 className="text-white text-xl font-[500] my-4">Zfx</h1>
        {links}
      </div>

      <div className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <Link to={"/login"} className={classes.link}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </Link>
      </div>
    </nav>
  );
}
