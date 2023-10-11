import { Stack, TextInput, Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export function ForgotPassword() {
  return (
    <main className="h-[100vh] md:flex items-center">
      <div className="bg-primary h-full hidden md:flex justify-center items-center w-[40vw]">
        <h1 className="text-[24px] font-[600] text-white">Welcome to Zfx</h1>
      </div>
      <section className="h-full w-full md:w-[60vw] flex flex-col md:flex-row justify-center items-center">
        <form action="">
          <Stack>
            <Link to={"/login"}>
              <IconArrowLeft />
            </Link>
            <h1 className="text-[24px] font-[600] my-4">Forgot Password</h1>
            <small>
              Enter the email address associated with your account <br /> to
              reset your password.
            </small>
            <TextInput label="Email" placeholder="johndoe@example.com" />
            <Button className="text-white font-[500] bg-primary p-2">
              Submit
            </Button>
          </Stack>
        </form>
      </section>
    </main>
  );
}
