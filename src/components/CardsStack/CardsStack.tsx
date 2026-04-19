import Card from '../Card/Card';
import data from '../../assets/data/simpleDonutData.json';
import './CardsStack.scss';

interface DataItem {
  name: string;
  value: number;
}

export default function CardsStack() {
  const items = data as DataItem[];

  return (
    <div className="cards-stack">
      {items.map((item) => (
        <Card key={item.name} name={item.name} value={item.value} />
      ))}
    </div>
  );
}
