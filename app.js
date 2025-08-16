// Enterprise Content Dashboard Application
class ContentDashboard {
    constructor() {
        // Application State
        this.state = {
            currentSection: 'feed',
            searchQuery: '',
            searchResults: [],
            favorites: JSON.parse(localStorage.getItem('favorites')) || [],
            readItems: JSON.parse(localStorage.getItem('readItems')) || [],
            userPreferences: JSON.parse(localStorage.getItem('userPreferences')) || {
                categories: ['Technology', 'Science', 'Sports', 'Business'],
                contentTypes: ['News', 'Movies', 'Podcasts'],
                theme: 'dark',
                language: 'en',
                autoplayVideos: false,
                notifications: true
            },
            isLoading: false,
            theme: localStorage.getItem('theme') || 'dark'
        };

        // Mock Data
        this.mockData = {
            "mockNews": [
                {
                    "id": "n1",
                    "title": "AI Revolution in Software Development: How Machine Learning is Changing Code",
                    "description": "Explore the latest developments in AI-assisted programming and how it's transforming the way developers write code.",
                    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
                    "category": "Technology",
                    "source": "TechCrunch",
                    "publishedAt": "2024-12-15T10:30:00Z",
                    "readTime": "5 min read",
                    "tags": ["AI", "Programming", "Machine Learning"],
                    "type": "news"
                },
                {
                    "id": "n2", 
                    "title": "Global Climate Summit 2024: Major Breakthrough in Renewable Energy",
                    "description": "World leaders announce new commitments to sustainable energy with revolutionary solar technology.",
                    "image": "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop",
                    "category": "Environment",
                    "source": "Reuters",
                    "publishedAt": "2024-12-14T15:45:00Z",
                    "readTime": "8 min read",
                    "tags": ["Climate", "Renewable Energy", "Sustainability"],
                    "type": "news"
                },
                {
                    "id": "n3",
                    "title": "Stock Market Hits Record High as Tech Sector Surges",
                    "description": "Major technology companies lead market gains amid strong quarterly earnings and AI investments.",
                    "image": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
                    "category": "Finance",
                    "source": "Bloomberg",
                    "publishedAt": "2024-12-14T09:15:00Z",
                    "readTime": "6 min read",
                    "tags": ["Stocks", "Technology", "Markets"],
                    "type": "news"
                },
                {
                    "id": "n4",
                    "title": "Premier League Transfer Window: Major Signings Shake Up Season",
                    "description": "Top clubs complete blockbuster transfers as competition intensifies for championship title.",
                    "image": "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=250&fit=crop",
                    "category": "Sports",
                    "source": "ESPN",
                    "publishedAt": "2024-12-13T18:20:00Z",
                    "readTime": "4 min read",
                    "tags": ["Football", "Transfers", "Premier League"],
                    "type": "news"
                },
                {
                    "id": "n5",
                    "title": "Breakthrough in Quantum Computing Could Revolutionize Encryption",
                    "description": "Scientists achieve new milestone in quantum computing that could impact cybersecurity worldwide.",
                    "image": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop",
                    "category": "Technology",
                    "source": "Nature",
                    "publishedAt": "2024-12-13T14:00:00Z",
                    "readTime": "7 min read",
                    "tags": ["Quantum Computing", "Encryption", "Science"],
                    "type": "news"
                },
                {
                    "id": "n6",
                    "title": "New Space Mission Discovers Water on Mars Subsurface",
                    "description": "NASA's latest rover mission finds significant water deposits beneath Martian surface, boosting colonization hopes.",
                    "image": "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=250&fit=crop",
                    "category": "Science",
                    "source": "NASA News",
                    "publishedAt": "2024-12-12T11:30:00Z",
                    "readTime": "9 min read",
                    "tags": ["Space", "Mars", "NASA"],
                    "type": "news"
                }
            ],
            "mockMovies": [
                {
                    "id": "m1",
                    "title": "Quantum Paradox",
                    "description": "A mind-bending sci-fi thriller about parallel universes and the consequences of quantum manipulation.",
                    "image": "https://images.unsplash.com/photo-1489599512549-37540aa0d6a2?w=300&h=450&fit=crop",
                    "category": "Sci-Fi Thriller",
                    "rating": 8.7,
                    "releaseYear": 2024,
                    "readTime": "147 min",
                    "tags": ["Sci-Fi", "Thriller", "Mind-bending"],
                    "source": "Netflix Original",
                    "type": "movies"
                },
                {
                    "id": "m2",
                    "title": "The Last Symphony",
                    "description": "An emotional drama about a composer's final masterpiece and the legacy of classical music.",
                    "image": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=450&fit=crop",
                    "category": "Drama",
                    "rating": 9.1,
                    "releaseYear": 2024,
                    "readTime": "128 min",
                    "tags": ["Drama", "Music", "Emotional"],
                    "source": "Amazon Prime",
                    "type": "movies"
                },
                {
                    "id": "m3",
                    "title": "Digital Uprising",
                    "description": "A cyberpunk action film exploring the battle between humans and AI in a dystopian future.",
                    "image": "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=450&fit=crop",
                    "category": "Action Cyberpunk",
                    "rating": 8.3,
                    "releaseYear": 2024,
                    "readTime": "135 min",
                    "tags": ["Action", "Cyberpunk", "AI"],
                    "source": "HBO Max",
                    "type": "movies"
                },
                {
                    "id": "m4",
                    "title": "Ocean's Mystery",
                    "description": "An underwater adventure revealing ancient secrets hidden in the deepest trenches of the ocean.",
                    "image": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=450&fit=crop",
                    "category": "Adventure Mystery",
                    "rating": 8.0,
                    "releaseYear": 2024,
                    "readTime": "112 min",
                    "tags": ["Adventure", "Mystery", "Ocean"],
                    "source": "Disney+",
                    "type": "movies"
                },
                {
                    "id": "m5",
                    "title": "The Innovation Wars",
                    "description": "A documentary exploring the fierce competition between tech giants and startup disruptors.",
                    "image": "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=450&fit=crop",
                    "category": "Documentary",
                    "rating": 8.8,
                    "releaseYear": 2024,
                    "readTime": "95 min",
                    "tags": ["Documentary", "Technology", "Business"],
                    "source": "Netflix Documentary",
                    "type": "movies"
                }
            ],
            "mockPodcasts": [
                {
                    "id": "p1",
                    "title": "Future of Work Podcast",
                    "description": "Weekly discussions on remote work, AI automation, and the evolving workplace landscape.",
                    "image": "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=300&h=300&fit=crop",
                    "category": "Business",
                    "source": "Sarah Chen",
                    "readTime": "45 min avg",
                    "rating": 4.8,
                    "tags": ["Remote Work", "AI", "Business"],
                    "type": "podcasts"
                },
                {
                    "id": "p2",
                    "title": "Code & Coffee",
                    "description": "Casual conversations about programming, developer culture, and the latest in software development.",
                    "image": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=300&fit=crop",
                    "category": "Technology",
                    "source": "Alex Rodriguez",
                    "readTime": "35 min avg",
                    "rating": 4.7,
                    "tags": ["Programming", "Software", "Developer Culture"],
                    "type": "podcasts"
                },
                {
                    "id": "p3",
                    "title": "Mindful Living",
                    "description": "Practical guidance for mental health, meditation, and finding balance in modern life.",
                    "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
                    "category": "Health",
                    "source": "Dr. Maya Patel",
                    "readTime": "25 min avg",
                    "rating": 4.9,
                    "tags": ["Mental Health", "Meditation", "Wellness"],
                    "type": "podcasts"
                },
                {
                    "id": "p4",
                    "title": "Sports Analytics Deep Dive",
                    "description": "Data-driven analysis of sports performance, betting strategies, and industry trends.",
                    "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
                    "category": "Sports",
                    "source": "Mike Thompson",
                    "readTime": "50 min avg",
                    "rating": 4.6,
                    "tags": ["Sports Analytics", "Data", "Performance"],
                    "type": "podcasts"
                }
            ],
            "trendingTopics": [
                "Artificial Intelligence",
                "Climate Change", 
                "Quantum Computing",
                "Space Exploration",
                "Renewable Energy",
                "Cryptocurrency",
                "Remote Work",
                "Mental Health"
            ],
            "searchSuggestions": [
                "AI breakthrough 2024",
                "Climate summit results",
                "Tech stock analysis", 
                "Space mission updates",
                "Quantum computing news",
                "Renewable energy trends",
                "Sports transfer news",
                "Health wellness tips"
            ]
        };

        // Search debounce timer
        this.searchTimeout = null;

        this.init();
    }

    // Initialize the application
    init() {
        this.applyTheme(this.state.theme);
        this.setupEventListeners();
        this.renderInitialContent();
        this.hideLoadingScreen();
    }

    // Hide loading screen and show app
    hideLoadingScreen() {
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
            document.querySelector('.app-container').style.display = 'flex';
        }, 1500);
    }

    // Setup all event listeners
    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = e.currentTarget.dataset.section;
                this.navigateToSection(section);
            });
        });

        // Mobile menu toggle
        document.getElementById('mobile-menu-toggle')?.addEventListener('click', () => {
            document.getElementById('sidebar').classList.toggle('open');
        });

        // Theme toggle
        document.getElementById('theme-toggle')?.addEventListener('click', () => {
            this.toggleTheme();
        });

        // Search functionality
        const searchInput = document.getElementById('search-input');
        searchInput?.addEventListener('input', (e) => {
            this.handleSearch(e.target.value);
        });

        searchInput?.addEventListener('focus', () => {
            this.showSearchSuggestions();
        });

        searchInput?.addEventListener('blur', () => {
            setTimeout(() => this.hideSearchSuggestions(), 200);
        });

        // Search filters
        document.getElementById('content-type-filter')?.addEventListener('change', (e) => {
            this.filterSearchResults(e.target.value, 'type');
        });

        document.getElementById('category-filter')?.addEventListener('change', (e) => {
            this.filterSearchResults(e.target.value, 'category');
        });

        // Load more content
        document.getElementById('load-more-feed')?.addEventListener('click', () => {
            this.loadMoreContent();
        });

        // Preferences
        document.getElementById('save-preferences')?.addEventListener('click', () => {
            this.savePreferences();
        });

        document.getElementById('reset-preferences')?.addEventListener('click', () => {
            this.resetPreferences();
        });

        document.getElementById('clear-favorites')?.addEventListener('click', () => {
            this.clearFavorites();
        });

        // View toggle for favorites
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.toggleFavoritesView(e.target.dataset.view);
            });
        });

        // Close sidebar on outside click (mobile)
        document.addEventListener('click', (e) => {
            const sidebar = document.getElementById('sidebar');
            const mobileToggle = document.getElementById('mobile-menu-toggle');
            
            if (window.innerWidth <= 768 && 
                !sidebar.contains(e.target) && 
                !mobileToggle.contains(e.target) && 
                sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
            }
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                document.getElementById('sidebar').classList.remove('open');
            }
        });
    }

    // Navigation between sections
    navigateToSection(section) {
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector(`[data-section="${section}"]`).classList.add('active');

        // Update active section
        document.querySelectorAll('.content-section').forEach(sec => {
            sec.classList.remove('active');
        });
        document.getElementById(`${section}-section`).classList.add('active');

        // Update page title
        const titles = {
            feed: 'Personal Feed',
            trending: 'Trending Now',
            favorites: 'Your Favorites',
            search: 'Search Results',
            preferences: 'Preferences'
        };
        document.getElementById('page-title').textContent = titles[section];

        // Update state
        this.state.currentSection = section;

        // Load section-specific content
        this.loadSectionContent(section);

        // Close mobile menu
        document.getElementById('sidebar').classList.remove('open');
    }

    // Load content for specific section
    loadSectionContent(section) {
        switch (section) {
            case 'feed':
                this.renderFeedContent();
                break;
            case 'trending':
                this.renderTrendingContent();
                break;
            case 'favorites':
                this.renderFavoritesContent();
                break;
            case 'search':
                this.renderSearchContent();
                break;
            case 'preferences':
                this.renderPreferencesContent();
                break;
        }
    }

    // Render initial content
    renderInitialContent() {
        this.renderFeedContent();
        this.renderPreferencesContent();
    }

    // Get all content combined
    getAllContent() {
        return [
            ...this.mockData.mockNews,
            ...this.mockData.mockMovies,
            ...this.mockData.mockPodcasts
        ];
    }

    // Get personalized content based on user preferences
    getPersonalizedContent() {
        const allContent = this.getAllContent();
        const userCategories = this.state.userPreferences.categories;
        const userContentTypes = this.state.userPreferences.contentTypes.map(type => type.toLowerCase());
        
        return allContent.filter(item => {
            const categoryMatch = userCategories.some(cat => 
                item.category.toLowerCase().includes(cat.toLowerCase()) ||
                item.tags?.some(tag => tag.toLowerCase().includes(cat.toLowerCase()))
            );
            const typeMatch = userContentTypes.includes(item.type);
            return categoryMatch && typeMatch;
        });
    }

    // Create content card
    createContentCard(item) {
        const template = document.getElementById('content-card-template');
        const card = template.content.cloneNode(true);
        
        const cardElement = card.querySelector('.content-card');
        cardElement.dataset.id = item.id;
        cardElement.dataset.type = item.type;
        
        // Set image
        const img = card.querySelector('.card-image img');
        img.src = item.image;
        img.alt = item.title;
        
        // Set content
        card.querySelector('.category-tag').textContent = item.category;
        card.querySelector('.read-time').textContent = item.readTime;
        card.querySelector('.card-title').textContent = item.title;
        card.querySelector('.card-description').textContent = item.description;
        card.querySelector('.card-source').textContent = item.source;
        
        // Set favorite status
        const favoriteBtn = card.querySelector('.favorite-btn');
        const isFavorited = this.state.favorites.some(fav => fav.id === item.id);
        if (isFavorited) {
            favoriteBtn.classList.add('favorited');
            favoriteBtn.querySelector('i').className = 'fas fa-heart';
        }
        
        // Set read status
        const readBtn = card.querySelector('.read-btn');
        const isRead = this.state.readItems.includes(item.id);
        if (isRead) {
            readBtn.classList.add('read');
            cardElement.style.opacity = '0.7';
        }
        
        // Event listeners
        favoriteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleFavorite(item);
        });
        
        readBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleReadStatus(item.id);
        });
        
        cardElement.addEventListener('click', () => {
            this.openContentDetail(item);
        });

        // Drag and drop for favorites section
        if (this.state.currentSection === 'favorites') {
            cardElement.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', item.id);
                cardElement.classList.add('dragging');
            });

            cardElement.addEventListener('dragend', () => {
                cardElement.classList.remove('dragging');
            });
        }
        
        return cardElement;
    }

    // Render feed content
    renderFeedContent() {
        const grid = document.getElementById('feed-grid');
        const personalizedContent = this.getPersonalizedContent();
        
        grid.innerHTML = '';
        personalizedContent.slice(0, 6).forEach(item => {
            const card = this.createContentCard(item);
            grid.appendChild(card);
        });
    }

    // Render trending content
    renderTrendingContent() {
        const grid = document.getElementById('trending-grid');
        const tagsContainer = document.getElementById('trending-tags');
        
        // Render trending topics
        tagsContainer.innerHTML = '';
        this.mockData.trendingTopics.forEach(topic => {
            const tag = document.createElement('span');
            tag.className = 'topic-tag';
            tag.textContent = topic;
            tag.addEventListener('click', () => {
                this.searchByTopic(topic);
            });
            tagsContainer.appendChild(tag);
        });
        
        // Render trending content (mock trending by shuffling all content)
        const allContent = this.getAllContent();
        const trendingContent = this.shuffleArray([...allContent]).slice(0, 8);
        
        grid.innerHTML = '';
        trendingContent.forEach(item => {
            const card = this.createContentCard(item);
            grid.appendChild(card);
        });
    }

    // Render favorites content
    renderFavoritesContent() {
        const grid = document.getElementById('favorites-grid');
        
        if (this.state.favorites.length === 0) {
            grid.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-heart"></i>
                    <h3>No favorites yet</h3>
                    <p>Start exploring and save content you love!</p>
                </div>
            `;
            return;
        }
        
        grid.innerHTML = '';
        this.state.favorites.forEach(item => {
            const card = this.createContentCard(item);
            grid.appendChild(card);
        });
        
        this.setupDragAndDrop();
    }

    // Setup drag and drop for favorites
    setupDragAndDrop() {
        const grid = document.getElementById('favorites-grid');
        
        grid.addEventListener('dragover', (e) => {
            e.preventDefault();
            grid.classList.add('drag-over');
        });
        
        grid.addEventListener('dragleave', () => {
            grid.classList.remove('drag-over');
        });
        
        grid.addEventListener('drop', (e) => {
            e.preventDefault();
            grid.classList.remove('drag-over');
            // Here you would implement reordering logic
            this.showToast('success', 'Favorites Reordered', 'Your favorites have been reordered successfully');
        });
    }

    // Render search content
    renderSearchContent() {
        const grid = document.getElementById('search-results-grid');
        const countElement = document.getElementById('search-results-count');
        
        if (this.state.searchResults.length === 0) {
            grid.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-search"></i>
                    <h3>No results found</h3>
                    <p>Try adjusting your search terms or filters</p>
                </div>
            `;
            countElement.textContent = 'No results found';
            return;
        }
        
        grid.innerHTML = '';
        this.state.searchResults.forEach(item => {
            const card = this.createContentCard(item);
            grid.appendChild(card);
        });
        
        countElement.textContent = `${this.state.searchResults.length} results found`;
    }

    // Render preferences content
    renderPreferencesContent() {
        this.renderCategoryPreferences();
        this.renderContentTypePreferences();
        this.renderDisplaySettings();
    }

    // Render category preferences
    renderCategoryPreferences() {
        const container = document.getElementById('category-preferences');
        const categories = ['Technology', 'Science', 'Business', 'Sports', 'Health', 'Environment', 'Entertainment'];
        
        container.innerHTML = '';
        categories.forEach(category => {
            const div = document.createElement('div');
            div.className = 'checkbox-item';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `cat-${category.toLowerCase()}`;
            checkbox.checked = this.state.userPreferences.categories.includes(category);
            
            const label = document.createElement('label');
            label.htmlFor = `cat-${category.toLowerCase()}`;
            label.textContent = category;
            
            div.appendChild(checkbox);
            div.appendChild(label);
            container.appendChild(div);
        });
    }

    // Render content type preferences
    renderContentTypePreferences() {
        const container = document.getElementById('content-type-preferences');
        const types = ['News', 'Movies', 'Podcasts'];
        
        container.innerHTML = '';
        types.forEach(type => {
            const div = document.createElement('div');
            div.className = 'checkbox-item';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `type-${type.toLowerCase()}`;
            checkbox.checked = this.state.userPreferences.contentTypes.includes(type);
            
            const label = document.createElement('label');
            label.htmlFor = `type-${type.toLowerCase()}`;
            label.textContent = type;
            
            div.appendChild(checkbox);
            div.appendChild(label);
            container.appendChild(div);
        });
    }

    // Render display settings
    renderDisplaySettings() {
        document.getElementById('autoplay-setting').checked = this.state.userPreferences.autoplayVideos;
        document.getElementById('notifications-setting').checked = this.state.userPreferences.notifications;
    }

    // Handle search with debouncing
    handleSearch(query) {
        clearTimeout(this.searchTimeout);
        this.state.searchQuery = query;
        
        this.searchTimeout = setTimeout(() => {
            this.performSearch(query);
        }, 300);
        
        if (query.length > 0) {
            this.showSearchSuggestions();
        } else {
            this.hideSearchSuggestions();
        }
    }

    // Perform actual search
    performSearch(query) {
        if (!query.trim()) {
            this.state.searchResults = [];
            this.renderSearchContent();
            return;
        }
        
        const allContent = this.getAllContent();
        const results = allContent.filter(item => {
            const searchIn = [
                item.title,
                item.description,
                item.category,
                item.source,
                ...(item.tags || [])
            ].join(' ').toLowerCase();
            
            return searchIn.includes(query.toLowerCase());
        });
        
        this.state.searchResults = results;
        
        // Auto-switch to search section if not already there
        if (this.state.currentSection !== 'search') {
            this.navigateToSection('search');
        } else {
            this.renderSearchContent();
        }
    }

    // Show search suggestions
    showSearchSuggestions() {
        const container = document.getElementById('search-suggestions');
        const query = this.state.searchQuery;
        
        container.innerHTML = '';
        
        if (query.length === 0) {
            // Show recent searches or popular suggestions
            this.mockData.searchSuggestions.forEach(suggestion => {
                const item = document.createElement('div');
                item.className = 'suggestion-item';
                item.innerHTML = `
                    <i class="fas fa-search"></i>
                    <span>${suggestion}</span>
                `;
                item.addEventListener('click', () => {
                    document.getElementById('search-input').value = suggestion;
                    this.handleSearch(suggestion);
                    this.hideSearchSuggestions();
                });
                container.appendChild(item);
            });
        } else {
            // Show filtered suggestions
            const filtered = this.mockData.searchSuggestions.filter(s => 
                s.toLowerCase().includes(query.toLowerCase())
            );
            
            filtered.slice(0, 5).forEach(suggestion => {
                const item = document.createElement('div');
                item.className = 'suggestion-item';
                item.innerHTML = `
                    <i class="fas fa-search"></i>
                    <span>${suggestion}</span>
                `;
                item.addEventListener('click', () => {
                    document.getElementById('search-input').value = suggestion;
                    this.handleSearch(suggestion);
                    this.hideSearchSuggestions();
                });
                container.appendChild(item);
            });
        }
        
        container.classList.add('show');
    }

    // Hide search suggestions
    hideSearchSuggestions() {
        document.getElementById('search-suggestions').classList.remove('show');
    }

    // Filter search results
    filterSearchResults(value, filterType) {
        if (!this.state.searchQuery) return;
        
        let filtered = this.getAllContent().filter(item => {
            const searchIn = [
                item.title,
                item.description,
                item.category,
                item.source,
                ...(item.tags || [])
            ].join(' ').toLowerCase();
            
            return searchIn.includes(this.state.searchQuery.toLowerCase());
        });
        
        if (value !== 'all') {
            if (filterType === 'type') {
                filtered = filtered.filter(item => item.type === value);
            } else if (filterType === 'category') {
                filtered = filtered.filter(item => 
                    item.category.toLowerCase().includes(value.toLowerCase())
                );
            }
        }
        
        this.state.searchResults = filtered;
        this.renderSearchContent();
    }

    // Search by topic (from trending)
    searchByTopic(topic) {
        document.getElementById('search-input').value = topic;
        this.handleSearch(topic);
        this.navigateToSection('search');
    }

    // Toggle favorite status
    toggleFavorite(item) {
        const index = this.state.favorites.findIndex(fav => fav.id === item.id);
        
        if (index > -1) {
            this.state.favorites.splice(index, 1);
            this.showToast('info', 'Removed from Favorites', `${item.title} removed from favorites`);
        } else {
            this.state.favorites.push(item);
            this.showToast('success', 'Added to Favorites', `${item.title} added to favorites`);
        }
        
        // Save to localStorage
        localStorage.setItem('favorites', JSON.stringify(this.state.favorites));
        
        // Update UI if on current section
        if (this.state.currentSection === 'favorites') {
            this.renderFavoritesContent();
        }
        
        // Update favorite buttons
        this.updateFavoriteButtons(item.id);
    }

    // Update favorite button states
    updateFavoriteButtons(itemId) {
        const isFavorited = this.state.favorites.some(fav => fav.id === itemId);
        document.querySelectorAll(`[data-id="${itemId}"] .favorite-btn`).forEach(btn => {
            if (isFavorited) {
                btn.classList.add('favorited');
                btn.querySelector('i').className = 'fas fa-heart';
            } else {
                btn.classList.remove('favorited');
                btn.querySelector('i').className = 'far fa-heart';
            }
        });
    }

    // Toggle read status
    toggleReadStatus(itemId) {
        const index = this.state.readItems.indexOf(itemId);
        
        if (index > -1) {
            this.state.readItems.splice(index, 1);
            this.showToast('info', 'Marked as Unread', 'Item marked as unread');
        } else {
            this.state.readItems.push(itemId);
            this.showToast('success', 'Marked as Read', 'Item marked as read');
        }
        
        // Save to localStorage
        localStorage.setItem('readItems', JSON.stringify(this.state.readItems));
        
        // Update UI
        this.updateReadStatus(itemId);
    }

    // Update read status UI
    updateReadStatus(itemId) {
        const isRead = this.state.readItems.includes(itemId);
        document.querySelectorAll(`[data-id="${itemId}"]`).forEach(card => {
            if (isRead) {
                card.style.opacity = '0.7';
                card.querySelector('.read-btn').classList.add('read');
            } else {
                card.style.opacity = '1';
                card.querySelector('.read-btn').classList.remove('read');
            }
        });
    }

    // Clear all favorites
    clearFavorites() {
        if (this.state.favorites.length === 0) return;
        
        if (confirm('Are you sure you want to clear all favorites?')) {
            this.state.favorites = [];
            localStorage.setItem('favorites', JSON.stringify(this.state.favorites));
            this.renderFavoritesContent();
            this.showToast('info', 'Favorites Cleared', 'All favorites have been cleared');
        }
    }

    // Toggle favorites view
    toggleFavoritesView(view) {
        const grid = document.getElementById('favorites-grid');
        if (view === 'list') {
            grid.style.gridTemplateColumns = '1fr';
        } else {
            grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(320px, 1fr))';
        }
    }

    // Load more content (simulate infinite scroll)
    loadMoreContent() {
        const btn = document.getElementById('load-more-feed');
        btn.textContent = 'Loading...';
        btn.disabled = true;
        
        setTimeout(() => {
            const allContent = this.getAllContent();
            const personalizedContent = this.getPersonalizedContent();
            const currentGrid = document.getElementById('feed-grid');
            const currentCount = currentGrid.children.length;
            
            // Load next 3 items
            const newItems = personalizedContent.slice(currentCount, currentCount + 3);
            newItems.forEach(item => {
                const card = this.createContentCard(item);
                currentGrid.appendChild(card);
            });
            
            btn.textContent = 'Load More Content';
            btn.disabled = false;
            
            if (currentGrid.children.length >= personalizedContent.length) {
                btn.style.display = 'none';
            }
            
            this.showToast('success', 'Content Loaded', `${newItems.length} new items loaded`);
        }, 1000);
    }

    // Open content detail (mock)
    openContentDetail(item) {
        this.showToast('info', 'Opening Content', `Opening ${item.title}...`);
        // Here you would implement a modal or navigate to detail page
    }

    // Save user preferences
    savePreferences() {
        const categories = [];
        document.querySelectorAll('#category-preferences input:checked').forEach(input => {
            categories.push(input.labels[0].textContent);
        });
        
        const contentTypes = [];
        document.querySelectorAll('#content-type-preferences input:checked').forEach(input => {
            contentTypes.push(input.labels[0].textContent);
        });
        
        this.state.userPreferences = {
            ...this.state.userPreferences,
            categories,
            contentTypes,
            autoplayVideos: document.getElementById('autoplay-setting').checked,
            notifications: document.getElementById('notifications-setting').checked
        };
        
        localStorage.setItem('userPreferences', JSON.stringify(this.state.userPreferences));
        this.showToast('success', 'Preferences Saved', 'Your preferences have been saved successfully');
        
        // Refresh feed content based on new preferences
        if (this.state.currentSection === 'feed') {
            this.renderFeedContent();
        }
    }

    // Reset preferences to default
    resetPreferences() {
        if (confirm('Are you sure you want to reset all preferences to default?')) {
            this.state.userPreferences = {
                categories: ['Technology', 'Science', 'Sports', 'Business'],
                contentTypes: ['News', 'Movies', 'Podcasts'],
                theme: 'dark',
                language: 'en',
                autoplayVideos: false,
                notifications: true
            };
            
            localStorage.setItem('userPreferences', JSON.stringify(this.state.userPreferences));
            this.renderPreferencesContent();
            this.showToast('info', 'Preferences Reset', 'All preferences have been reset to default');
        }
    }

    // Toggle theme
    toggleTheme() {
        const newTheme = this.state.theme === 'dark' ? 'light' : 'dark';
        this.state.theme = newTheme;
        this.applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        
        this.showToast('success', 'Theme Changed', `Switched to ${newTheme} theme`);
    }

    // Apply theme
    applyTheme(theme) {
        document.documentElement.setAttribute('data-color-scheme', theme);
        const themeIcon = document.querySelector('#theme-toggle i');
        if (themeIcon) {
            themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    // Show toast notification
    showToast(type, title, message) {
        const template = document.getElementById('toast-template');
        const toast = template.content.cloneNode(true);
        
        const toastElement = toast.querySelector('.toast');
        toastElement.classList.add(type);
        
        const iconMap = {
            success: '✓',
            error: '✗',
            info: 'i'
        };
        
        toast.querySelector('.toast-icon').textContent = iconMap[type];
        toast.querySelector('.toast-title').textContent = title;
        toast.querySelector('.toast-message').textContent = message;
        
        const closeBtn = toast.querySelector('.toast-close');
        closeBtn.addEventListener('click', () => {
            toastElement.remove();
        });
        
        document.getElementById('toast-container').appendChild(toast);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (toastElement.parentNode) {
                toastElement.remove();
            }
        }, 5000);
    }

    // Utility: Shuffle array
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.contentDashboard = new ContentDashboard();
});