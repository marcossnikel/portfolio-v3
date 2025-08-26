import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-col gap-16 md:gap-24">
        <div className="flex animate-in flex-col gap-8">
          <div className="animate-in" style={{animationDelay: "0.1s", animationFillMode: "both"}}>
            <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight">
              I'm Marcos Nikel. I live in{" "}
              <span className="text-accent">São Paulo</span>, where I build the next{" "}
              <span className="bg-accent text-white px-2 py-1 rounded">
                level
              </span>
              .
            </h1>
          </div>
          <div className="flex flex-col gap-6 text-secondary md:flex-row md:gap-8">
            <div className="flex flex-col gap-6">
              <p className="animate-in" style={{animationDelay: "0.2s", animationFillMode: "both"}}>
                I have always been close to computers since I was a kid. I spent my whole childhood playing Perfect World since I was 6 years old and got my first contact with programming when I was 10, creating my own server. Life happened and I ended up studying nutrition in high school and later started college in that field. After studying nutrition for a whole year before pivoting to Computer Science, this was the best decision I ever made, transforming a hobby into my career.
              </p>
              <p className="animate-in" style={{animationDelay: "0.3s", animationFillMode: "both"}}>
                The only thing that I like more than computers and programming is challenging myself in some physical way—in the gym, running, or other activities that push my limits.
              </p>
              <p className="animate-in" style={{animationDelay: "0.4s", animationFillMode: "both"}}>
                Currently I work at the largest company in South America,{" "}
                <Link 
                  href="https://www.mercadolivre.com.br/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-semibold text-accent hover:text-primary transition-colors duration-200"
                >
                  Mercado Libre
                </Link>
                , as a Software Engineer where I work mostly with{" "}
                <span className="font-semibold text-accent">Golang</span>, Cloud Services and Gen AI.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="animate-in flex aspect-[4/5] relative overflow-hidden rounded-3xl bg-secondary shadow-2xl" style={{animationDelay: "0.2s", animationFillMode: "both"}}>
                <Image
                  src="/me.jpeg"
                  alt="Marcos Nikel"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="animate-in flex flex-col gap-2 text-sm" style={{animationDelay: "0.6s", animationFillMode: "both"}}>
                <div className="flex gap-2">
                  <a
                    href="https://x.com/marcosnikel_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-md bg-secondary px-3 py-2 text-secondary hover:bg-tertiary transition-colors duration-200"
                  >
                    <span className="text-tertiary">@</span>
                    Twitter
                  </a>
                  <a
                    href="https://github.com/marcossnikel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-md bg-secondary px-3 py-2 text-secondary hover:bg-tertiary transition-colors duration-200"
                  >
                    <span className="text-tertiary">⚡</span>
                    GitHub
                  </a>
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://www.linkedin.com/in/mnikel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-md bg-secondary px-3 py-2 text-secondary hover:bg-tertiary transition-colors duration-200"
                  >
                    <span className="text-tertiary">💼</span>
                    LinkedIn
                  </a>
                  <a
                    href="mailto:marcosnikeldev@gmail.com"
                    className="flex items-center gap-2 rounded-md bg-secondary px-3 py-2 text-secondary hover:bg-tertiary transition-colors duration-200"
                  >
                    <span className="text-tertiary">✉</span>
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}