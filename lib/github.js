export async function getGithubStats(username) {
  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`);
    const user = await userRes.json();

    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
    const repos = await reposRes.json();

    if (!user || !repos || !Array.isArray(repos)) {
        return null;
    }

    // Calculate detailed stats
    const stats = {
      followers: user.followers,
      following: user.following,
      public_repos: user.public_repos,
      total_stars: repos.reduce((acc, repo) => acc + repo.stargazers_count, 0),
      total_forks: repos.reduce((acc, repo) => acc + repo.forks_count, 0),
    };

    // Calculate top languages
    const languages = {};
    repos.forEach(repo => {
      if (repo.language) {
        languages[repo.language] = (languages[repo.language] || 0) + 1;
      }
    });

    const topLanguages = Object.entries(languages)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([name, count]) => ({ name, count }));

    return { user, stats, topLanguages };
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return null;
  }
}
