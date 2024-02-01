import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import styles from "@/app/ui/home.module.css"
import Link from 'next/link';
import {lusitana} from "./ui/fonts"
import Image from "next/image"
import Input from 'postcss/lib/input';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
        <div
          className={styles.shape}
        />
        <p
          className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
        >
          <strong>Welcome to Acme.</strong>

        </p>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <label htmlFor="Sign In"></label>

        </div>
    </main>
  );
}
