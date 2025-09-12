import SensorCard from './sensorCard';

export default function Sensor() {
  const sensorDetails = [
    {
      title: 'Real-Time Energy Monitoring',
      subtext:
        'Tracks key power data—including voltage, current, energy use, and power factor—with industry-grade accuracy. You get trusted insights to manage energy smarter.',
    },
    {
      title: 'For Commercial and Industrial Environments',
      subtext:
        'Built tough and compact, Pai Hardware fits into factories, office buildings, and energy facilities without fuss—using DIN-rail or wall mounting options',
    },
    {
      title: 'Built-In Uptime Protection',
      subtext:
        'No power? No problem. With triple power input and 24-hour battery backup, Pai Hardware keeps measuring and reporting, even during outages.',
    },
    {
      title: 'Easy to Install, Easy to Maintain',
      subtext:
        'Lightweight, under 500g, and compact enough for tight spaces—plus designed for simple setup without specialist tools or complex wiring.',
    },
  ];

  return (
    <>
      <div className="grid gap-6 p-4">
        <div
          className="p-1 w-full max-w-50"
          style={{
            background: 'linear-gradient(to right, #031936, #1570EF)',
            borderRadius: '8px',
          }}
        >
          <div
            className="bg-[#0F1114] w-full h-full p-3 "
            style={{
              border: 'none',
              borderRadius: '4px',
            }}
          >
            Pai Enterprise Sensor
          </div>
        </div>

        <div className="grid gap-4">
          <h2 className="metallic-text-long text-3xl md:text-5xl font-semibold">
            Precision you can install. Intelligence you can trust
          </h2>
          <p className=" text-gray-300 text-secondary mb-10">
            Track and transmit your power usage with precision hardware built
            for modern factories, facilities, and enterprises
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {sensorDetails.map((det, index) => (
              <SensorCard
                index={index + 1}
                title={det.title}
                subtext={det.subtext}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
