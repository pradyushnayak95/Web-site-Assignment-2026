import { MapPin, Briefcase, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { Job } from '../../types/career';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

interface JobCardProps {
  job: Job;
  onApply: (jobTitle: string) => void;
}

export default function JobCard({ job, onApply }: JobCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card hover={true} padding="none" className="bg-white border-border overflow-hidden">
      {/* Header Summary */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-surface/30 transition-colors duration-150"
      >
        <div>
          <div className="flex items-center gap-2 flex-wrap mb-2">
            <h3 className="text-xl font-bold text-secondary font-heading">
              {job.title}
            </h3>
            <Badge variant="primary" className="text-[10px] tracking-normal px-2.5">
              {job.type}
            </Badge>
          </div>
          
          <div className="flex items-center gap-4 text-xs text-text-muted flex-wrap">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {job.location}
            </span>
            <span className="flex items-center gap-1">
              <Briefcase className="w-3.5 h-3.5" />
              {job.department}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              Exp: {job.experience}
            </span>
          </div>
        </div>

        <button 
          className="self-start md:self-auto flex items-center gap-1.5 text-sm font-semibold text-primary"
          aria-label={isOpen ? 'Collapse job details' : 'Expand job details'}
        >
          {isOpen ? (
            <>
              Hide Details
              <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              View Details
              <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      {/* Accordion Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-border"
          >
            <div className="p-6 bg-surface/10 space-y-6">
              {/* Description */}
              <div>
                <p className="text-sm text-text leading-relaxed">{job.description}</p>
              </div>

              {/* Requirements */}
              <div>
                <h4 className="text-sm font-bold text-secondary uppercase tracking-wider mb-2.5">
                  Requirements
                </h4>
                <ul className="list-disc list-inside space-y-1.5">
                  {job.requirements.map((req, idx) => (
                    <li key={idx} className="text-sm text-text-light leading-relaxed">
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Responsibilities */}
              <div>
                <h4 className="text-sm font-bold text-secondary uppercase tracking-wider mb-2.5">
                  Responsibilities
                </h4>
                <ul className="list-disc list-inside space-y-1.5">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-sm text-text-light leading-relaxed">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Apply Button */}
              <div className="pt-4 border-t border-border flex justify-between items-center flex-wrap gap-4">
                <span className="text-xs text-text-muted font-mono">Posted on: {job.postedDate}</span>
                <Button 
                  onClick={() => onApply(job.title)}
                  variant="cta" 
                  size="sm"
                >
                  Apply For This Position
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
