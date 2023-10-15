import { useState } from "react";
import { Link } from "react-router-dom";
import {
  IconBellRinging,
  IconLayoutDashboard,
  IconCash,
  IconWallet,
  IconUser,
} from "@tabler/icons-react";
import classes from "../css/Nav.module.css";
import { useGlobalContext } from "../context";

const data = [
  { link: "/dashboard", label: "Dashboard", icon: IconLayoutDashboard },
  { link: "/profile", label: "Profile", icon: IconUser },
  { link: "/deposits", label: "Deposits", icon: IconCash },
  { link: "/withdrawals", label: "Withdrawals", icon: IconWallet },
  { link: "/notifications", label: "Notifications", icon: IconBellRinging },
];

export function Nav() {
  const { setIsNav } = useGlobalContext();
  const [active, setActive] = useState("Dashboard");

  const handleClick = (label: string) => {
    setActive(label);
    setIsNav(false);
  };
  const links = data.map((item) => {
    const { link, label } = item;
    return (
      <Link
        className={classes.link}
        data-active={label === active || undefined}
        to={link}
        key={label}
        onClick={() => handleClick(label)}
      >
        <item.icon className={classes.linkIcon} stroke={1.5} />
        <span>{label}</span>
      </Link>
    );
  });

  return (
    <nav className={`${classes.navbar}`}>
      <div className={classes.navbarMain}>{links}</div>
    </nav>
  );
}
