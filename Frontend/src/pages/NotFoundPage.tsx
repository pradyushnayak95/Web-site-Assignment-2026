import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <div className="pt-24 pb-16 min-h-[60vh] flex items-center">
      <Container className="text-center">
        <h1 className="text-6xl font-bold text-secondary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-text-muted mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Button href="/" variant="primary">
          Back to Home
        </Button>
      </Container>
    </div>
  );
}
