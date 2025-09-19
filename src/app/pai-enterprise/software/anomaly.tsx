import { AnomalyDetectionTabs } from '@/components/featureTab';

export default function Anomaly() {
  return (
    <>
      <div className="space-y-8 md:space-y-12 p-4">
        <div className="text-center">
          <h3 className="text-[#F6762C] font-semibold text-lg mb-2">
            Anomaly Detections
          </h3>
          <h2 className="metallic-text-long text-subheading ">
            Set custom notifications for alerts that matter
          </h2>
          <p className="text-gray-300 text-secondary max-w-3xl mx-auto mt-2">
            The Pai Enterprise Dashboard doesn’t just display numbers, it learns
            patterns. When something shifts out of place, it detects it
            instantly, giving you clarity before waste, downtime, or losses
            creep in.
          </p>
        </div>
        <div>
          <AnomalyDetectionTabs />
        </div>
      </div>
    </>
  );
}
