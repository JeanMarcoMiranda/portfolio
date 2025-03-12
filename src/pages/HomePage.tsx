import AboutPreview from "@/features/home/AboutPreview"
import FeaturedProjects from "@/features/home/FeaturedProjects"
import Hero from "@/features/home/Hero"
import SkillsOverview from "@/features/home/SkillsOverview"

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <AboutPreview/>
      <FeaturedProjects/>
      <SkillsOverview/>
    </div>
  )
}

export default HomePage