import { Calendar, Clock, MapPin, Users, Video, Building2 } from 'lucide-react';

interface EventCardProps {
  event: any; // Fleksibel menerima data dari API
}

const categoryColors: any = {
  workshop: 'bg-blue-900/10 dark:bg-blue-400/10 text-blue-900 dark:text-blue-300 border-blue-200 dark:border-blue-700',
  discussion: 'bg-purple-900/10 dark:bg-purple-400/10 text-purple-900 dark:text-purple-300 border-purple-200 dark:border-purple-700',
  exhibition: 'bg-emerald-900/10 dark:bg-emerald-400/10 text-emerald-900 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700',
  webinar: 'bg-orange-900/10 dark:bg-orange-400/10 text-orange-900 dark:text-orange-300 border-orange-200 dark:border-orange-700'
};

const statusConfig: any = {
  upcoming: {
    label: 'Akan Datang',
    color: 'bg-blue-600 dark:bg-blue-500 text-white'
  },
  ongoing: {
    label: 'Sedang Berlangsung',
    color: 'bg-green-600 dark:bg-green-500 text-white'
  },
  full: {
    label: 'Penuh',
    color: 'bg-red-600 dark:bg-red-500 text-white'
  },
  published: { 
    label: 'Tersedia',
    color: 'bg-blue-600 dark:bg-blue-500 text-white'
  }
};

const categoryLabels: any = {
  workshop: 'Workshop',
  discussion: 'Diskusi',
  exhibition: 'Pameran',
  webinar: 'Webinar'
};

export function EventCard({ event }: EventCardProps) {
  // 1. Integrasi API: Ambil status dari status_event, fallback ke status biasa
  const currentEventStatus = event.status_event || event.status || 'upcoming';
  
  // Mapping field lainnya
  const dateStr = event.event_date || event.date;
  const timeStr = event.event_time || event.time || 'Waktu belum diatur';
  const category = event.category || 'workshop';
  const locationType = event.location_type || event.locationType || 'physical';
  const spotsLeft = event.spots_left !== undefined ? event.spots_left : event.spotsLeft;

  // Format date
  const eventDate = new Date(dateStr);
  const day = eventDate.getDate();
  const month = eventDate.toLocaleDateString('id-ID', { month: 'short' });
  
  const LocationIcon = locationType === 'online' ? Video : locationType === 'hybrid' ? Building2 : MapPin;

  // Gunakan config berdasarkan status_event
  const currentStatusUI = statusConfig[currentEventStatus] || statusConfig.published;
  
  return (
    <div className="glass-card rounded-2xl overflow-hidden group glass-card-hover h-full flex flex-col">
      {/* Event Poster Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img 
          src={event.image || 'https://images.unsplash.com/photo-1505373630103-91390e1b99f9'} 
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Date Badge */}
        <div className="absolute top-4 left-4 glass-card rounded-xl px-4 py-3 text-center shadow-xl backdrop-blur-md">
          <div className="text-2xl font-bold text-white">{isNaN(day) ? '-' : day}</div>
          <div className="text-xs uppercase text-white/90 tracking-wider">{month}</div>
        </div>
        
        {/* Status Badge (Menggunakan status_event dari API) */}
        <div className="absolute top-4 right-4">
          <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg ${currentStatusUI.color}`}>
            {currentStatusUI.label}
          </span>
        </div>

        {/* Category Badge */}
        <div className="absolute bottom-4 left-4">
          <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border ${categoryColors[category] || categoryColors.workshop}`}>
            {categoryLabels[category] || 'Event'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 line-clamp-2 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors">
          {event.title}
        </h3>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 flex-1">
          {event.description}
        </p>

        <div className="space-y-2.5 mb-5 pt-3 border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-gray-300">
            <Clock className="w-4 h-4 text-blue-900 dark:text-blue-400 flex-shrink-0" />
            <span>{timeStr}</span>
          </div>
          
          <div className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
            <LocationIcon className="w-4 h-4 text-blue-900 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <span className="flex-1">{event.location}</span>
          </div>
          
          {spotsLeft !== undefined && spotsLeft !== null && (
            <div className="flex items-center gap-2.5 text-sm">
              <Users className="w-4 h-4 text-blue-900 dark:text-blue-400 flex-shrink-0" />
              <span className={spotsLeft < 10 && spotsLeft > 0 ? 'text-orange-600 dark:text-orange-400 font-semibold' : 'text-gray-700 dark:text-gray-300'}>
                {spotsLeft === 0 ? 'Kuota Habis' : `${spotsLeft} tempat tersisa`}
              </span>
            </div>
          )}
        </div>

        {/* Join Button (Logika berdasarkan status_event) */}
        <button 
          disabled={currentEventStatus === 'full'}
          className={`w-full px-6 py-3.5 rounded-xl font-semibold transition-all shadow-lg ${
            currentEventStatus === 'full' 
              ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed' 
              : 'bg-gradient-to-br from-blue-900 to-blue-700 dark:from-blue-600 dark:to-blue-500 text-white hover:scale-[1.02] hover:shadow-xl shadow-blue-900/20 dark:shadow-blue-500/20'
          }`}
        >
          {currentEventStatus === 'full' ? 'Event Penuh' : currentEventStatus === 'ongoing' ? 'Bergabung Sekarang' : 'Daftar Sekarang'}
        </button>
      </div>
    </div>
  );
}