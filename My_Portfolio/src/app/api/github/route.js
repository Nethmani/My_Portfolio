// import { NextResponse } from 'next/server';

// // Cache duration in seconds (10 minutes)
// const CACHE_DURATION = 600;

// export async function GET() {
//   try {
//     // Your GitHub username
//     const username = 'oshadha2k01';
    
//     // Add caching headers to the response
//     const response = NextResponse.next();
//     response.headers.set('Cache-Control', `max-age=${CACHE_DURATION}, s-maxage=${CACHE_DURATION}, stale-while-revalidate`);
    
//     // Function to fetch repositories with pagination
//     async function fetchAllRepos() {
//       let page = 1;
//       let allRepos = [];
//       let hasMoreRepos = true;
      
//       // Fetch repos page by page until we get all of them
//       while (hasMoreRepos) {
//         const response = await fetch(
//           `https://api.github.com/users/${username}/repos?per_page=100&page=${page}&sort=updated`,
//           {
//             headers: {
//               'Accept': 'application/vnd.github.v3+json',
//               'User-Agent': 'NextJS-Portfolio-App'
//             },
//             // Ensure we don't cache the response to always get fresh data
//             cache: 'no-store'
//           }
//         );
        
//         if (!response.ok) {
//           console.error(`Error fetching page ${page}:`, await response.text());
//           throw new Error(`GitHub API responded with status: ${response.status}`);
//         }
        
//         const repos = await response.json();
        
//         // Add repos to our collection
//         allRepos = [...allRepos, ...repos];
        
//         // Check if we got a full page (100 items). If not, we've reached the end.
//         if (repos.length < 100) {
//           hasMoreRepos = false;
//         } else {
//           page++;
//         }
//       }
      
//       return allRepos;
//     }
    
//     // Get all repositories
//     const repos = await fetchAllRepos();
//     console.log(`Successfully fetched ${repos.length} repositories`);
    
//     return NextResponse.json(repos);
//   } catch (error) {
//     console.error('Error fetching repos:', error);
//     return NextResponse.json(
//       { error: 'Failed to fetch GitHub repositories' },
//       { status: 500 }
//     );
//   }
// }