import ProductsCard from "@/Components/page/ProductsCard";
import ProfileCard from "@/Components/page/ProfileCard";
import QRCard from "@/Components/page/QRCard";

export default function Home() {
  return (
    <div className="flex md:flex-row flex-col gap-3 justify-center items-start">
      <div className="flex flex-col justify-center flex-1 gap-3 md:sticky static md:top-2 ">
        <ProfileCard />
        <QRCard />
      </div>
      <ProductsCard />
    </div>
  );
}
