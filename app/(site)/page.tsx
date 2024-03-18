import AboutPage from "../components/pages/AboutPage";
import HomePage from "../components/pages/HomePage";
import SkitOneClick from "../components/pages/SkitOneClick";
import SkitSpecialists from "../components/pages/SkitSpecialists";
import SkitWellness from "../components/pages/SkitWellness";

export default function Home() {
  return (
    <div>
      <HomePage />
      <AboutPage />
      <SkitSpecialists />
      <SkitOneClick />
      <SkitWellness />
    </div>
  );
}
