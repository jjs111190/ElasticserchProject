import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { FilterSection } from './components/FilterSection';
import { ProjectGrid } from './components/ProjectGrid';
import { Footer } from './components/Footer';
import { useSearch } from './hooks/useSearch';
import { projects, categories, allTags } from './data/projects';

function App() {
  const [loading, setLoading] = useState(true);
  const {
    filters,
    filteredProjects,
    updateSearch,
    updateCategory,
    toggleTag,
    clearFilters
  } = useSearch(projects);

  // 비동기적으로 데이터 로딩 시뮬레이션
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="space-y-8">
          <FilterSection
            searchQuery={filters.search}
            onSearchChange={updateSearch}
            categories={categories}
            selectedCategory={filters.category}
            onCategoryChange={updateCategory}
            availableTags={allTags}
            selectedTags={filters.tags}
            onToggleTag={toggleTag}
            onClearFilters={clearFilters}
            resultsCount={filteredProjects.length}
          />
          
          <ProjectGrid projects={filteredProjects} loading={loading} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;