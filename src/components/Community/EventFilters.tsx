interface EventFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function EventFilters({ activeFilter, onFilterChange }: EventFiltersProps) {
  const filters = ['all', 'upcoming', 'ongoing', 'past'];

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeFilter === filter
              ? 'bg-gdg-blue text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}