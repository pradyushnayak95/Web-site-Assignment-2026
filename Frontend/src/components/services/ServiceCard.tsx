import { Check, Code2, Users, Compass, Palette, Shield, Layers, Zap } from 'lucide-react';
import type { Service } from '../../types/service';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

interface ServiceCardProps {
  service: Service;
}

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6" />,
  Smartphone: <Layers className="w-6 h-6" />, // mapped Smartphone to Layers for cleaner aesthetics
  Cloud: <Zap className="w-6 h-6" />,        // cloud
  Brain: <Shield className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  UserPlus: <Users className="w-6 h-6" />,
  Compass: <Compass className="w-6 h-6" />,
  Palette: <Palette className="w-6 h-6" />,
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card hover={true} padding="lg" className="bg-white border-border h-full flex flex-col">
      {/* Icon & Title */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
          {iconMap[service.icon] || <Code2 className="w-6 h-6" />}
        </div>
        <div>
          <h3 className="text-xl font-bold text-secondary font-heading">
            {service.title}
          </h3>
          <p className="text-primary text-xs font-semibold uppercase tracking-wider mt-0.5">
            {service.tagline}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
        {service.description}
      </p>

      {/* Features List */}
      <div className="space-y-4 mb-6">
        <p className="text-xs font-bold uppercase tracking-wider text-secondary">
          Core Focus Areas
        </p>
        <ul className="space-y-2.5">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="p-0.5 rounded bg-emerald-50 text-emerald-600 mt-0.5 shrink-0">
                <Check className="w-3.5 h-3.5" />
              </span>
              <div>
                <span className="text-sm font-semibold text-secondary block">
                  {feature.title}
                </span>
                <span className="text-xs text-text-muted block mt-0.5">
                  {feature.description}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack Badges */}
      {service.technologies && service.technologies.length > 0 && (
        <div className="pt-4 border-t border-border mt-auto">
          <p className="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-2">
            Primary Stacks
          </p>
          <div className="flex flex-wrap gap-1.5">
            {service.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="px-2 py-0.5 text-[10px] font-medium tracking-normal normal-case">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}
