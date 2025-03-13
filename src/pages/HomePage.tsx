import AboutPreview from "@/features/home/AboutPreview";
import FeaturedProjects from "@/features/home/FeaturedProjects";
import Hero from "@/features/home/Hero";
import RecentPosts from "@/features/home/RecentPosts";

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutPreview />
      <RecentPosts />
      <FeaturedProjects />
    </>
  );
};

export default HomePage;
