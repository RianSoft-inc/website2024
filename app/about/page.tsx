import AboutFirstPage from "@/components/about/AboutFirstPage";
import AboutRian from "@/components/about/AboutRian";
import AboutTimeline from "@/components/about/AboutTimeline";
import AboutValues from "@/components/about/AboutValues";

const AboutPage: React.FC = () => {
  return (
    <div className="mt-40">
      <AboutFirstPage />
      <AboutRian />
      <AboutValues />
      <AboutTimeline />
    </div>
  );
};

export default AboutPage;
