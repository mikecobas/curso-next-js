import { Inter } from "next/font/google";
import { MainLayout } from "@/components/layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });
export default function contact() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>
      <div className={`description`}>
        <a href="/" target="_blank" rel="noopener noreferrer">
          Ir a Home
        </a>
        <p>
          Get started by editing&nbsp;
          <code className={`code`}>pages/contact.tsx</code>
        </p>
        <div></div>
      </div>
    </MainLayout>
  );
}
