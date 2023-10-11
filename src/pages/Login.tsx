import { Stack, TextInput, PasswordInput, Button } from "@mantine/core";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <main className="h-[100vh] md:flex items-center">
      <div className="bg-primary h-full hidden md:flex justify-center items-center w-[40vw]">
        <h1 className="text-[24px] font-[600] text-white">Welcome to Zfx</h1>
      </div>

      <section className="h-full w-full md:w-[60vw] flex flex-col md:flex-row justify-center items-center">
        <h1 className="text-[24px] text-center my-4 md:hidden">Zfx</h1>
        <form className="w-[85%] md:w-[55%] mx-auto" action="">
          <h1 className="text-[24px] font-[600] my-4">Login</h1>
          <Stack>
            <TextInput label="Email" placeholder="johndoe@example.com" />
            <PasswordInput label="Password" placeholder="******" />
            <Link to={"/forgotpassword"}>
              <small className=" text-primary my-4 w-full flex justify-end">
                Forgot Password?
              </small>
            </Link>
            <Link to={"/dashboard"}>
              <Button className="text-white font-[500] bg-primary p-2 w-full">
                Login
              </Button>
            </Link>
          </Stack>
        </form>
      </section>
    </main>
  );
}
