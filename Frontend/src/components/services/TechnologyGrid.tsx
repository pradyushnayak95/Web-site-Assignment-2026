import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

interface TechItem {
  name: string;
  items: string[];
}

const competencies: TechItem[] = [
  { name: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Go', 'C# (.NET)', 'SQL', 'Bash'] },
  { name: 'Frontend Architectures', items: ['React', 'Next.js', 'Redux Toolkit', 'Tailwind CSS', 'Vite', 'HTML5/CSS3'] },
  { name: 'Backend Architectures', items: ['Node.js (Express/NestJS)', 'FastAPI', 'ASP.NET Core', 'Go Microservices'] },
  { name: 'Cloud & Infrastructure', items: ['Amazon Web Services (AWS)', 'Microsoft Azure', 'Docker Containerization', 'Kubernetes Clusters', 'Terraform (IaC)'] },
  { name: 'CI/CD Pipelines', items: ['GitHub Actions', 'GitLab CI', 'Jenkins Pipelines', 'Automated QA Testing'] },
  { name: 'Databases & Storage', items: ['PostgreSQL', 'MongoDB', 'Redis Caching', 'Elasticsearch', 'DynamoDB'] },
];

export default function TechnologyGrid() {
  return (
    <section className="py-20 bg-white" aria-labelledby="tech-competency-title">
      <Container>
        <SectionHeading
          badge="Technologies"
          title="Full-Stack Technical Competency"
          subtitle="Our developers write clean, typed, and well-tested code using state-of-the-art architectures and cloud methodologies."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((comp, idx) => (
            <Card key={idx} hover={false} className="bg-surface border-none p-6">
              <h3 className="font-heading font-bold text-secondary text-lg mb-4 pb-2 border-b border-border">
                {comp.name}
              </h3>
              <ul className="space-y-2">
                {comp.items.map((item) => (
                  <li key={item} className="text-sm text-text-light flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
