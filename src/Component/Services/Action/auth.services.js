// Store user information in local storage
export const storeUserInfo = ({ accessToken }) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("portfolioToken", accessToken);
  }
};

// Retrieve user information from local storage
export const getUserInfo = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("portfolioToken");
  }
  return null;
};

// Remove user information from local storage
export const removeFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("portfolioToken");
  }
};

// Check if the user is logged in
export const isLoggedIn = () => {
  const authToken = getUserInfo();
  return !!authToken;
};
