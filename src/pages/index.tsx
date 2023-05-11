import Link from "next/link";
import Image from "next/image";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-black w-screen h-screen flex flex-col items-center justify-center">
      <p className="text-white text-[3.5vw]">Who's watching?</p>
      <div className="flex flex-row gap-5 mt-6">
        {USERS.map((user, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <Link
              href={"/browse"}
              className="w-[128px] h-[128px] rounded-xl overflow-hidden bg-white"
            >
              <Image src={user.avatar} width={128} height={128} alt="" />
            </Link>
            <p className="text-gray-400 text-sm">{user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const USERS = [
  {
    name: "Daniel",
    link: "/browse",
    avatar: "https://api.dicebear.com/6.x/pixel-art/jpg",
  },
  {
    name: "Kids",
    link: "//",
    avatar: "https://api.dicebear.com/6.x/pixel-art/jpg?seed=John",
  },
  {
    name: "Add Profile",
    link: "/",
    avatar: "https://api.dicebear.com/6.x/pixel-art/jpg?seed=Jane",
    //icon: ""
  },
];
