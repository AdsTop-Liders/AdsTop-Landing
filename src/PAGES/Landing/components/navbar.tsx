import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <>
      <div className="px-6 font-google">
        <div className="w-auto outline flex justify-between items-center outline-red-500">
          <h1 className=" py-2 font-bold ">AdsTop</h1>
          <ul className="flex items-center gap-8 ">
            <li>
              <a href="#">How it Works?</a>
            </li>
            <li>
              <a href="#">Solutions</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
          <div className="flex gap-2 items-center">
            <a href="#" className="text-[#4b5563] font-medium">Log In</a>
            <Button variant={"default"} className="rounded-[60px]">Get Started</Button>
          </div>
        </div>
      </div>
    </>
  );
}
