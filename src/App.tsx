import Header from "./components/Header";
import Section from "./components/Section";
import ExperienceItem from "./components/ExperienceItem";
import EducationItem from "./components/EducationItem";
import StarRating from "./components/StarRating";
import LanguageItem from "./components/LanguageItem";
import InterestItem from "./components/InterestItem";

// Import JSON data
import experiencesData from "./informations/experiences.json";
import educationData from "./informations/education.json";
import skillsData from "./informations/skills.json";
import languagesData from "./informations/languages.json";
import interestsData from "./informations/interests.json";

function App() {
    const reversedExperiences = [...experiencesData.experiences].reverse();
    const reversedEducation = [...educationData.education].reverse();

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <div className="mb-6">
                    <Header />
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                        <Section title="WORK EXPERIENCE">
                            <div className="relative pt-4">
                                {reversedExperiences.map((exp, index) => (
                                    <ExperienceItem
                                        key={exp.period}
                                        {...exp}
                                        index={index}
                                        isLast={index === reversedExperiences.length - 1}
                                    />
                                ))}
                            </div>
                        </Section>

                        <Section title="EDUCATION AND QUALIFICATIONS">
                            <div className="relative pt-4">
                                {reversedEducation.map((edu, index) => (
                                    <EducationItem
                                        key={edu.period}
                                        {...edu}
                                        index={index}
                                        isLast={index === reversedEducation.length - 1}
                                    />
                                ))}
                            </div>
                        </Section>
                    </div>

                    <div className="md:col-span-1">
                        <Section title="SKILLS">
                            <div className="space-y-6">
                                <div className="bg-white p-5 rounded-md shadow-md">
                                    <h3 className="text-lg font-semibold text-red-700 mb-3">Frontend</h3>
                                    {skillsData.frontend.map((skill, index) => (
                                        <StarRating key={skill.skill} {...skill} index={index} />
                                    ))}
                                </div>

                                <div className="bg-white p-5 rounded-md shadow-md">
                                    <h3 className="text-lg font-semibold text-red-700 mb-3">Backend</h3>
                                    {skillsData.backend.map((skill, index) => (
                                        <StarRating
                                            key={skill.skill}
                                            {...skill}
                                            index={index + skillsData.frontend.length}
                                        />
                                    ))}
                                </div>

                                <div className="bg-white p-5 rounded-md shadow-md">
                                    <h3 className="text-lg font-semibold text-red-700 mb-3">Databases</h3>
                                    {skillsData.databases.map((skill, index) => (
                                        <StarRating
                                            key={skill.skill}
                                            {...skill}
                                            index={index + skillsData.frontend.length + skillsData.backend.length}
                                        />
                                    ))}
                                </div>
                            </div>
                        </Section>

                        <Section title="LANGUAGES">
                            <div className="bg-white p-5 rounded-md shadow-md">
                                {languagesData.languages.map((lang, index) => (
                                    <LanguageItem key={lang.language} {...lang} index={index} />
                                ))}
                            </div>
                        </Section>

                        <Section title="INTERESTS">
                            <div className="bg-white p-5 rounded-md shadow-md">
                                {interestsData.interests.map((interest, index) => (
                                    <InterestItem key={interest} name={interest} index={index} />
                                ))}
                            </div>
                        </Section>
                    </div>
                </div>

                <footer className="mt-10 text-center text-gray-500 text-sm">
                    <p>© 2025 Krystian Kijak</p>
                </footer>
            </div>
        </div>
    );
}

export default App;
