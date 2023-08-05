import  DarkLayout  from "@/components/layouts/DarkLayout";
import  MainLayout  from "@/components/layouts/MainLayout";
import { ReactElement } from "react";
import type {NextPageWithLayout} from '../_app';

export default function Pricing(){
  return (
    <>
      <div className={`description`}>
        <h1>Pricing</h1>
        <a href="/" target="_blank" rel="noopener noreferrer">
          Ir a Home
        </a>
        <p>
          Get started by editing&nbsp;
          <code className={`code`}>pages/pricing.tsx</code>
        </p>
        <div></div>
      </div>
    </>
  );
}

Pricing.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
