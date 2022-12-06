import MainLayout from "layout/main-layout";
import { PropsWithChildren } from "react";
import { Splash } from "@/components/splash";
interface HomeProps {}
export default function Home({ children }: PropsWithChildren<HomeProps>) {
  return (
    <MainLayout>
      <Splash />
    </MainLayout>
  );
}
