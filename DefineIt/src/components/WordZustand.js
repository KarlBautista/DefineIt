import { create } from "zustand"

const useWord = create((set) => ({
    word: null,
    storeWord: (newWord) => set(() => ({ word: newWord }))

}));

export default useWord;