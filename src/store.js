import { create } from 'zustand';
import axios from 'axios';

const useStore = create((set) => ({
  characters: [],
  loading: false,

  fetchCharacters: async () => {
    set({ loading: true });
    try {
      let allResults = [];
      let url = 'https://rickandmortyapi.com/api/character';
      
      for (let i = 0; i < 3; i++) {
        if (!url) break;
        const response = await axios.get(url);
        allResults = [...allResults, ...response.data.results];
        url = response.data.info.next;
      }

      set({ characters: allResults, loading: false });
    } catch (error) {
      console.error("Ошибка:", error);
      set({ loading: false });
    }
  },
}));

export default useStore;