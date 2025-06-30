import { NextResponse } from 'next/server';

// Add this line to make it work with static export
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // GitHub username
    const username = 'Vidumini16';
    
    // Get GitHub token from environment variable
    const githubToken = process.env.GITHUB_TOKEN;
    
    if (!githubToken) {
      console.error('GitHub token is not set in environment variables');
      return NextResponse.json(
        { error: 'GitHub token is not configured. Please add GITHUB_TOKEN to your environment variables.' },
        { status: 500 }
      );
    }
    
    // Function to fetch all repositories with pagination
    async function fetchAllRepos() {
      let page = 1;
      let allRepos = [];
      let hasMoreRepos = true;
      
      while (hasMoreRepos) {
        const headers = {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'NextJS-Portfolio-App',
          'Authorization': `token ${githubToken}` // Changed from Bearer to token
        };
        
        try {
          const response = await fetch(
            `https://api.github.com/users/${username}/repos?per_page=100&page=${page}&sort=updated&direction=desc`,
            {
              headers,
              cache: 'no-store'
            }
          );

          if (!response.ok) {
            const errorText = await response.text();
            console.error('GitHub API Error:', {
              status: response.status,
              statusText: response.statusText,
              headers: Object.fromEntries(response.headers.entries()),
              body: errorText
            });
            
            if (response.status === 403) {
              throw new Error('GitHub API rate limit exceeded');
            }
            if (response.status === 401) {
              throw new Error('GitHub API authentication failed - please check your token');
            }
            throw new Error(`GitHub API error: ${response.status} ${response.statusText} - ${errorText}`);
          }

          const repos = await response.json();
          
          if (!Array.isArray(repos)) {
            console.error('Unexpected GitHub API response:', repos);
            throw new Error('GitHub API returned invalid response format');
          }
          
          allRepos = [...allRepos, ...repos];
          
          // If we got less than 100 repos, we've reached the end
          if (repos.length < 100) {
            hasMoreRepos = false;
          } else {
            page++;
          }
        } catch (fetchError) {
          console.error('Error fetching repos page', page, ':', fetchError);
          throw fetchError;
        }
      }
      
      return allRepos;
    }

    // Fetch all repositories
    const repos = await fetchAllRepos();
    
    if (!Array.isArray(repos)) {
      console.error('Invalid repos response:', repos);
      throw new Error('Invalid repositories response format');
    }
    
    // Filter out repositories we don't want to show
    const filteredRepos = repos.filter(repo => 
      repo.name !== 'Vidumini16' && 
      repo.name !== 'My_Portfolio' &&
      repo.name !== 'GymSystem' &&
      repo.name !== 'ant-design' 
    );
    
    // Define specific order for priority repositories
    const priorityOrder = [
      "ITPM-Project",
      "Luxury-Villa",
      "WanderVibe", 
      "CodeMaster",
      "Interactix",
      "course-registration-application", 
      "Book-Review-Web", 
      "Project_ITP",
      "To-Do-List-MERN-Stack",
      "To-Do-List",
      "server-monitoring-system",
      "ERP-System",
      "Academic-Day-Plan-App",
      "Android-Studio-SimpleCarGame",
      "Android-Studio-SimpleFoodApp",
      "Online-Video-Browsing-System-LoginUI",
      "Online-Bus-Booking-System",
      "QR-Generator",
      "Restaurant-Frontend-Demo",
      "ui-practice"
    ];
    
    // Map the response to match your expected format
    const formattedRepos = filteredRepos.map(repo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || '',
      language: repo.language,
      html_url: repo.html_url,
      homepage: repo.homepage,
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      updated_at: repo.updated_at
    }));
    
    // Custom sort function: priority repos first, then the rest by update date
    formattedRepos.sort((a, b) => {
      const indexA = priorityOrder.indexOf(a.name);
      const indexB = priorityOrder.indexOf(b.name);
      
      // If both repos are in priority list, sort by priority order
      if (indexA >= 0 && indexB >= 0) {
        return indexA - indexB;
      }
      
      // If only a is in priority list, it comes first
      if (indexA >= 0) return -1;
      
      // If only b is in priority list, it comes first
      if (indexB >= 0) return 1;
      
      // For non-priority repos, sort by update date (most recent first)
      return new Date(b.updated_at) - new Date(a.updated_at);
    });
    
    // Log successful response
    console.log(`Successfully fetched and formatted ${formattedRepos.length} repositories`);
    
    return NextResponse.json(formattedRepos);
  } catch (error) {
    console.error('Error in GitHub API route:', error);
    
    // Return error response with status code and detailed message
    return NextResponse.json(
      { 
        error: error.message || 'Failed to fetch GitHub repositories',
        details: error.stack
      },
      { 
        status: error.message.includes('rate limit') ? 429 : 
               error.message.includes('authentication') ? 401 : 500 
      }
    );
  }
}
