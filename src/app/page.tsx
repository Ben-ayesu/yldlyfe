import VideoBackground from "./components/ui/VideoBackground";
import Header from "./components/layout/Header";
import ShopButton from "./components/ui/ShopButton";
import SocialLinks from "./components/ui/SocialLinks";
import HamburgerMenu from "./components/ui/HamburgerMenu";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <VideoBackground />

      <div className="z-10 flex flex-col items-center min-h-screen">
        <Header />
        <div className="flex-grow flex flex-col items-center justify-center">
          <ShopButton />
        </div>
      </div>

      <div className="absolute bottom-4 right-4">
        <SocialLinks />
      </div>
      <div className="absolute bottom-4 left-4">
        <HamburgerMenu />
      </div>
    </div>
  );
}
