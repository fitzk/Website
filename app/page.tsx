import Image from "next/image";
import Nav from "@/app/nav";
import Contributions from './contributions.png'

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Image width={800} height={800} alt="contributions" src={Contributions}></Image>
      </main>
    </>
  );
}
