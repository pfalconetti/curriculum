import './Card.scss';

interface CardProps {
  name: string;
  value: string | number;
}

export default function Card({ name, value }: CardProps) {
  return (
    <div className="card">
      <div className="card-label">{name}</div>
      <div className="card-value">{value}</div>
    </div>
  );
}
