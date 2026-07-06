import { useState } from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';
import Card from '../ui/Card';

interface TechCategory {
  name: string;
  items: string[];
}

const techCategories: TechCategory[] = [
  { name: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux Toolkit', 'HTML5/CSS3'] },
  { name: 'Backend', items: ['Node.js', 'Express', 'NestJS', 'Python', 'FastAPI', 'Go', '.NET Core'] },
  { name: 'Cloud & DevOps', items: ['AWS', 'Microsoft Azure', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'] },
  { name: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch', 'DynamoDB'] },
  { name: 'Mobile', items: ['React Native', 'Swift (iOS)', 'Kotlin (Android)', 'Flutter'] },
  { name: 'AI & Data Science', items: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI APIs', 'LangChain', 'Pandas'] },
];

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="py-20 bg-white" aria-labelledby="tech-stack-title">
      <Container>
        <SectionHeading
          badge="Technology Stack"
          title="Modern Stacks for Modern Products"
          subtitle="We leverage stable, scalable, and secure technologies to ensure long-term codebase health and performance."
        />

        {/* Tab Headers */}
        <div className="flex flex-wrap justify-center gap-2 mb-8" role="tablist" aria-label="Technology Categories">
          {techCategories.map((cat, idx) => (
            <button
              key={cat.name}
              role="tab"
              aria-selected={activeCategory === idx}
              aria-controls={`tech-panel-${idx}`}
              id={`tech-tab-${idx}`}
              onClick={() => setActiveCategory(idx)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeCategory === idx
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-surface text-text-light hover:text-primary hover:bg-primary/5'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Tab Content Panel */}
        <div
          role="tabpanel"
          id={`tech-panel-${activeCategory}`}
          aria-labelledby={`tech-tab-${activeCategory}`}
          className="max-w-2xl mx-auto"
        >
          <Card hover={false} padding="lg" className="bg-surface border-none text-center">
            <h3 className="font-heading font-bold text-secondary text-lg mb-6">
              Our {techCategories[activeCategory].name} Competency
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {techCategories[activeCategory].items.map((tech) => (
                <Badge key={tech} variant="primary" className="text-sm px-4 py-2 font-medium normal-case bg-white border border-border text-secondary hover:border-primary/50 transition-colors">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
