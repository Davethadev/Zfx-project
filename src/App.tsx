import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { useLocation } from "react-router-dom";
// import { Welcome } from "./Welcome/Welcome";
// import { ColorSchemeToggle } from "./ColorSchemeToggle/ColorSchemeToggle";
import { Routes, Route } from "react-router-dom";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";
import { ForgotPassword } from "./pages/ForgotPassword";
import { HomePage } from "./pages/Homepage";
import { Dashboard } from "./pages/Dashboard";
import { Withdrawals } from "./pages/Withdrawals";
import { Sidebar } from "./components/Sidebar";
import { Deposits } from "./pages/Deposits";
import { Notifications } from "./pages/Notifications";
import { Profile } from "./pages/Profile";
import { UserProfile } from "./components/UserProfile";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<MainLayout />} />
        </Routes>
      </>
      {/* <ColorSchemeToggle /> */}
    </MantineProvider>
  );
}

function MainLayout() {
  const location = useLocation();
  const excludedPaths = [
    "/dashboard",
    "/withdrawals",
    "/deposits",
    "/notifications",
    "/profile",
  ];
  const shouldRenderSidebarAndUserProfile = excludedPaths.some((path) =>
    location.pathname.includes(path)
  );

  return (
    <>
      <main className="flex">
        {shouldRenderSidebarAndUserProfile && <Sidebar />}
        <section
          className={
            shouldRenderSidebarAndUserProfile ? "w-full md:w-4/5" : "w-full"
          }
        >
          {shouldRenderSidebarAndUserProfile && <UserProfile />}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/withdrawals" element={<Withdrawals />} />
            <Route path="/deposits" element={<Deposits />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            {/* <Route path="/welcome" element={<Welcome />} /> */}
          </Routes>
        </section>
      </main>
    </>
  );
}
