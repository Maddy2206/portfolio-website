"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download, Mail } from "lucide-react";
const Homepage = () => {

  const downloadResume = () => {
    const url = '/Resume_Medhansh.pdf'; // Adjust this path to match the location of your PDF file in the public folder
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Resume_Medhansh.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-full flex flex-col lg:flex-row lg:py-5">
      <div className="h-1/2 lg:h-full lg:w-1/2 lg:px-10 relative lg:translate-x-5">
        <Image src='/profile.png' height={400} width={400} />
      </div>
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        <h1 className="text-4xl md:text-4xl font-bold lg:text-5xl">Hello, I am</h1>
        <h1 className="text-6xl font-bold">Medhansh Rawat</h1>
        <p className="md:text-xl">
        I am a third-year student pursuing my B.Tech in Computer Science and Engineering at IIT Mandi. I am passionate about Web Development, Machine Learning, Generative AI, and problem-solving with a strong affinity for Mathematics.
        </p>
        <div className="flex gap-4">
          <Button onClick={downloadResume} className='flex gap-2'><Download></Download>Resume</Button>
          <Link href="/Contact">
            <Button className='flex gap-2'>
              <Mail></Mail>
              Contact</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
