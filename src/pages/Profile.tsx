import { useState } from "react";
import {
  FileInput,
  TextInput,
  Image,
  Stack,
  Button,
  Group,
} from "@mantine/core";
import { useGlobalContext } from "../context";
import { MobileNav } from "../components/MobileNav";
import { Nav } from "../components/Nav";

export function Profile() {
  const { isNav } = useGlobalContext();
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);

  const handleChange = (selectedFile: File | null) => {
    setProfilePhoto(selectedFile);
  };

  return (
    <>
      <MobileNav />
      {isNav && <Nav />}
      <main className={`${!isNav && "px-4 mt-4"}`}>
        <h1 className="text-[28px] font-[500]">Profile</h1>
        <div className="w-48 mx-auto border border-dashed border-primary">
          {profilePhoto ? (
            <>
              <Image
                fit="contain"
                w={200}
                src={URL.createObjectURL(profilePhoto)}
              />
            </>
          ) : (
            <>
              <Image
                fit="contain"
                w={200}
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNoI83LE6coWbjtfISJoUk2y3crwih-XG2yVxfVDNQXw&s"
                }
              />
            </>
          )}
          <Group className="relative w-full">
            <label
              className="flex justify-center w-full my-1 text-primary text-[12px]"
              htmlFor="upload-photo"
            >
              Update Photo
            </label>
            <FileInput
              className="absolute w-28 opacity-0"
              onChange={handleChange}
            />
          </Group>
        </div>
        <Stack className="w-full md:w-[388px] mx-auto mt-8">
          <Group className="flex flex-col md:flex-row">
            <TextInput label="First name" placeholder="John" />
            <TextInput label="Last name" placeholder="Doe" />
          </Group>
          <Group className="flex flex-col md:flex-row">
            <TextInput label="Phone number" placeholder="+2345678910" />
            <TextInput label="Email" placeholder="user@example.com" />
          </Group>
        </Stack>
        <div className="w-full flex justify-end mt-8 pr-12">
          <Button className="text-white font-[500] bg-primary p-2">
            Save changes
          </Button>
        </div>
      </main>
    </>
  );
}
