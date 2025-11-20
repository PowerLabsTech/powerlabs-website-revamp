import { fetchEvents } from '@/services/cms';
import InvestorsCard from './investorsCard';
import { IEvents } from '@/interfaces';

export default async function HeroEvents() {
  const response = await fetchEvents();
  const events = (response?.data ?? []) as IEvents[];

  return (
    <>
      {events.map((event) => (
        <InvestorsCard key={event.id} event={event} />
      ))}
    </>
  );
}
