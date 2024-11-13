interface Repo {
    id: number;
    title: string;
    contributors: number;
    stars: number;
    description: string | null;
    tags: string[];
    url: string;
  }
  
  export const fetchRepos = async (): Promise<Repo[]> => {
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
  
    try {
      const response = await fetch(`https://api.github.com/users/web3normad/repos`, {
        headers,
      });
  
      if (!response.ok) {
        throw new Error('Error fetching repos');
      }
  
      const repos = await response.json();
  
      // Map data to the Repo interface
      return repos.map((repo: any) => ({
        id: repo.id,
        title: repo.name,
        contributors: repo.watchers_count,
        stars: repo.stargazers_count,
        description: repo.description,
        tags: ['Blog', 'Github', 'Docs', 'Website'], 
        url: repo.html_url,
      }));
    } catch (error) {
      console.error('Error fetching repository data:', error);
      return [];
    }
  };
  