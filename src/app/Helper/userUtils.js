
export const getLoggedUser = () => {
    // Check if running in the browser
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('loggedUser');
      if (storedUser) {
        return JSON.parse(storedUser);
      }
    }
  
    return null;
  };
  
  export const setLoggedUser = (user) => {
    // Check if running in the browser
    if (typeof window !== 'undefined') {
      localStorage.setItem('loggedUser', JSON.stringify(user));
    }
  };
  
  export const clearLoggedUser = () => {
    // Check if running in the browser
    if (typeof window !== 'undefined') {
      localStorage.removeItem('loggedUser');
    }
  };
  