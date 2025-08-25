import { MDXRemote } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import React from "react";
import Image from "next/image";

interface ComponentProps {
  children?: React.ReactNode;
  [key: string]: unknown;
}

interface LinkProps extends ComponentProps {
  href: string;
}

interface ImageProps extends ComponentProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface CalloutProps extends ComponentProps {
  emoji: React.ReactNode;
}

function Code({ children, ...props }: ComponentProps) {
  const codeHTML = highlight(children as string);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function CustomLink({ href, ...props }: LinkProps) {
  if (href.startsWith("/")) {
    return (
      <a
        href={href}
        {...props}
        className="text-red-600 dark:text-red-400 hover:underline"
      />
    );
  }

  if (href.startsWith("#")) {
    return (
      <a
        href={href}
        {...props}
        className="text-red-600 dark:text-red-400 hover:underline"
      />
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      className="text-blue-600 dark:text-blue-400 hover:underline"
    />
  );
}

function RoundedImage({ src, alt, width, height, ...props }: ImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className="rounded-lg"
      {...props}
    />
  );
}

function Callout({ emoji, children, ...props }: CalloutProps) {
  return (
    <div className="px-4 py-3 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm flex items-center text-neutral-900 dark:text-neutral-100 mb-8">
      <div className="flex items-center w-4 mr-4">{emoji}</div>
      <div className="w-full callout">{children}</div>
    </div>
  );
}

const components = {
  h1: (props: ComponentProps) => (
    <h1
      className="text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-white"
      {...props}
    />
  ),
  h2: (props: ComponentProps) => (
    <h2
      className="text-2xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white"
      {...props}
    />
  ),
  h3: (props: ComponentProps) => (
    <h3
      className="text-xl font-medium mt-4 mb-2 text-gray-900 dark:text-white"
      {...props}
    />
  ),
  p: (props: ComponentProps) => (
    <p
      className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"
      {...props}
    />
  ),
  ul: (props: ComponentProps) => (
    <ul
      className="mb-4 ml-6 list-disc text-gray-700 dark:text-gray-300"
      {...props}
    />
  ),
  ol: (props: ComponentProps) => (
    <ol
      className="mb-4 ml-6 list-decimal text-gray-700 dark:text-gray-300"
      {...props}
    />
  ),
  li: (props: ComponentProps) => <li className="mb-1" {...props} />,
  blockquote: (props: ComponentProps) => (
    <blockquote
      className="border-l-4 border-red-500 pl-4 italic my-4 text-gray-600 dark:text-gray-400"
      {...props}
    />
  ),
  code: Code,
  pre: (props: ComponentProps) => (
    <pre
      className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto mb-4 text-sm"
      {...props}
    />
  ),
  a: CustomLink,
  img: RoundedImage,
  Callout,
};

interface MDXContentProps {
  source: string;
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
