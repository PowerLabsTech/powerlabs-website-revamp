import { fetchPodcasts } from '@/services/cms';
import PodCards from './podCards';
import { IPod } from '@/interfaces';

export default async function HeroPodcast() {
  const response = await fetchPodcasts();
  const pods = (response?.data as IPod[]) ?? ([] as IPod[]);

  return (
    <>
      {pods.map((pod) => (
        <PodCards key={pod.id} prop={pod} />
      ))}
    </>
  );
}
