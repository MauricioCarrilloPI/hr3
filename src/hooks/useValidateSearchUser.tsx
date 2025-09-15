import axios from 'axios';

const useValidateSearchUser = () => {
  const validateSearchUser = async (id:number | null) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_AUTH_VERCEL}/auth/search/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user:', error);
      return { error: 'Failed to fetch user' };
    }
  };

  return { validateSearchUser };
};

export default useValidateSearchUser;