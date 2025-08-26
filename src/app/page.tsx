import Link from "next/link";
import Image from "next/image";
import { SocialLinks } from "@/components/SocialLinks";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto layout-margins py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left Column - Text Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              I'm Marcos Nikel. I live in{" "}
              <span className="text-blue-500 dark:text-blue-400">São Paulo</span>, where I build the next{" "}
              <span className="bg-blue-600 text-white px-2 py-1 rounded">
                level
              </span>
              .
            </h1>
          </div>

          <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed font-mono">
            <p>
              I have always been close to computers since I was a kid. I spent my whole childhood playing Perfect World since I was 6 years old and got my first contact with programming when I was 10, creating my own server. Life happened and I ended up studying nutrition in high school and later started college in that field. After studying nutrition for a whole year before pivoting to Computer Science, this was the best decision I ever made, transforming a hobby into my career.
            </p>

            <p>
              The only thing that I like more than computers and programming is challenging myself in some physical way—in the gym, running, or other activities that push my limits.
            </p>

            <p>
              Currently I work at the largest company in South America, <Link href="https://www.mercadolivre.com.br/" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 transition-colors duration-200 font-semibold">Mercado Libre</Link>, as a Software Engineer where I work mostly with <span className="text-blue-500 dark:text-blue-400 font-semibold">Golang</span>, Cloud Services and Gen AI.
            </p>
          </div>

          {/* Social Links */}
          <SocialLinks />
        </div>

        {/* Right Column - Image */}
        <div className="lg:pl-8">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-800">
            <Image
              src="/me.jpeg"
              alt="Marcos Nikel"
              width={600}
              height={750}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
