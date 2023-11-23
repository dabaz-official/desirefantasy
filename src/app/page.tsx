import NavigationBar from "@df/components/layout/NavigationBar";
import HomeProducts from "@df/components/sections/HomeProducts";
import Masthead from "@df/components/sections/Masthead";
import Promo from "@df/components/sections/Promo";
import ScrollObserver from "@df/utils/ScrollObserver";
import Footer from "@df/components/layout/Footer";

export default function Home() {
  return (
    <ScrollObserver>
      <Masthead />
      <NavigationBar />
      <Promo />
      <HomeProducts />
      <Footer />
    </ScrollObserver>
  )
}