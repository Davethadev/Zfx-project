import {
  Button,
  TextInput,
  Stack,
  Checkbox,
  Anchor,
  PasswordInput,
  Flex,
  Select,
} from "@mantine/core";
import { IconBrandGoogle } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { countries } from "../data";

export function SignUp() {
  return (
    <main className="h-[100vh] overflow-y-auto md:flex items-center">
      <div className=" bg-primary h-full hidden md:flex justify-center items-center w-[40vw]">
        <h1 className="text-[24px] font-[600] text-white">Welcome to Zfx</h1>
      </div>
      <section className="h-full w-[85%] mx-auto md:w-[60vw] flex flex-col md:flex-row justify-center items-center">
        <h1 className="text-[24px] text-center my-4 md:hidden">Zfx</h1>
        <form className="w-full md:w-[386px] mx-auto" action="">
          <h1 className="text-[24px] font-[600]">Create Account</h1>
          <small className="text-gray">Invest and start earning today</small>
          <Button
            leftSection={<IconBrandGoogle size={16} strokeWidth={4.5} />}
            className="text-white font-[500] bg-primary p-2 my-4 w-full md:w-[386px]"
          >
            Sign up with Google
          </Button>
          <div className="flex items-center justify-between gap-2">
            <span className="w-[25%] md:w-[128px] h-[1px] bg-gray"></span>
            <small className="text-gray text-[12px]">
              or Sign up with Email
            </small>
            <span className="w-[25%] md:w-[128px] h-[1px] bg-gray"></span>
          </div>
          <Stack>
            {/* <Group>
              <TextInput
                className="w-full md:w-auto"
                label="First name"
                placeholder="John"
              />
              <TextInput
                className="w-full md:w-auto"
                label="Last name"
                placeholder="Doe"
              />
            </Group> */}
            <TextInput
              label="Email"
              placeholder="johndoe@example.com"
              className="w-full md:w-[386px]"
            />
            <Select
              label="Country"
              placeholder="Select country"
              data={countries}
            />
            <TextInput
              label="Referral code"
              placeholder="Enter your referral code"
              className="w-full md:w-[386px]"
            />
            <Flex gap={12} justify={"space-between"}>
              <PasswordInput
                className="w-[194px]"
                label="Password"
                placeholder="******"
              />
              <PasswordInput
                className="w-[194px]"
                label="Confirm Password"
                placeholder="******"
              />
            </Flex>

            <Button className="text-white font-[500] bg-primary p-2 w-full md:w-[386px]">
              Sign Up
            </Button>
            <Checkbox
              className="w-full md:w-[85%]"
              label={
                <>
                  By continuing you accept our standard
                  <Anchor href="#" inherit className="mx-1 text-primary">
                    terms and conditions
                  </Anchor>
                  and our
                  <Anchor href="#" inherit className="mx-1 text-primary">
                    privacy
                  </Anchor>
                  policy
                </>
              }
            />
            <small className="text-center">
              Already have an account?{" "}
              <Link className="text-primary" to={"/login"}>
                Log In
              </Link>
            </small>
          </Stack>
        </form>
      </section>
    </main>
  );
}
