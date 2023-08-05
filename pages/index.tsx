import  DarkLayout  from "@/components/layouts/DarkLayout";
import  MainLayout  from "@/components/layouts/MainLayout";
import { ReactElement } from "react";
import type {NextPageWithLayout} from './_app';

export default function Home(){
  return (
    <>
      <div className={`description`}>
        <a href="/about" target="_blank" rel="noopener noreferrer">
          Ir a About
        </a>
        <p>
          Get started by editing&nbsp;
          <code className={`code`}>pages/index.tsx</code>
        </p>
        <div></div>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
