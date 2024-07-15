const titleMap = {
    '/': 'Home Page',
    '/dashboard': 'Dashboard',
    'healthcare' : 'Healthcare',
    '/login': 'Sign In',
    '/profile': 'User Profile',
    '/edit-profile': 'Edit Profile',
  };
  /**
   * Returns the title of a page based on its route path.
   * @param {string} path - The path of the page route.
   * @returns {string} The title of the page with the site name appended.
   */
  export const getTitleFromRoute = (path) => {
    if (titleMap[path]) {
      return `${titleMap[path]} | Coder`;
    }
  
    const userProfileRegex = /^\/user\/(\w+)$/;
    const postRegex = /^\/(my\/)?post\/(\w+)$/;
    const communityRegex = /^\/community\/(\w+)(\/report|\/reported-post|\/moderator)?$/;
  
    if (userProfileRegex.test(path)) {
      return 'User Profile | Coder';
    } else if (postRegex.test(path)) {
      return 'Post | Coder';
    } else if (communityRegex.test(path)) {
      return 'Community | Coder';
    }
  
    return 'Coder';
  };
  