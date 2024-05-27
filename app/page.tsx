import FeaturesSection from "@/components/features_section";
import HeroSection from "@/components/hero-section";
import PostSection from "@/components/posts_section";
import { POSTS } from "@/utils/posts";

export default function Home() {
  return (
    <>
        <div className="absolute bottom-4 left-4">
        <span className="sm:hidden">XS</span>
        <span className="hidden sm:block md:hidden">SM</span>
        <span className="hidden md:block lg:hidden ">MD</span>
        <span className="hidden lg:block xl:hidden">LG</span>
        <span className="hidden xl:block 2xl:hidden">XL</span>
    </div>
      {/* Hero Section */}
      <HeroSection />
      {/* Features Section */}
      <FeaturesSection />
      {/* Posts Section */}
      <PostSection posts={POSTS} />
      {/* Article Section */}
    </>
  );
}
