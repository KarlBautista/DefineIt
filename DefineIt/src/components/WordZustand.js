import { create } from "zustand"

const useWord = create((set) => ({
    word: null,
    synonyms: null,
    antonyms: null,
    storeWord: (newWord) => set(() => ({ word: newWord })),
    storeSynonyms: (newWord) => set(() => {
        if(!newWord || !Array.isArray(newWord) || !newWord[0]){
            return { synonyms: []}
        }
        const allSynonyms = newWord[0].meanings.flatMap((meaning) => meaning.synonyms || []);
        return { synonyms: allSynonyms }
    }
),
    storeAntonyms: (newWord) => set(() => {
        if(!newWord || !Array.isArray(newWord) || !newWord[0]){
            return { antonyms: []}
        }
        const allAntonyms = newWord[0].meanings.flatMap((meaning) => meaning.antonyms || []);
        return { antonyms: allAntonyms }
    }
),
    isLoading: false,
    isError: false,
    storedIsLoading: (loading) => set(() => ({ isLoading: loading })),
    storedError: (error) => set(() => ({ isError: error}))

}));

export default useWord;
