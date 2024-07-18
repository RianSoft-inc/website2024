import AboutFirstPage from "@/components/about/AboutFirstPage";
import AboutRian from "@/components/about/AboutRian";
import AboutTimeline from "@/components/about/AboutTimeline";
import AboutValues from "@/components/about/AboutValues";

const AboutPage: React.FC = () => {
  return (
    <div className="mt-14">
      {/* <h1 className="text-4xl font-bold text-center my-8">About Page</h1> */}
      <AboutFirstPage />
      <AboutRian />
      <AboutValues />
      <AboutTimeline />
    </div>
  );
};

export default AboutPage;
