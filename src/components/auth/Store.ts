import { create } from "zustand"

interface APIRes {
    access: string,
    refresh: string,
}

interface AuthStore {
    access: string,
    refresh: string,
    populateAuth: (jwt: APIRes) => void,
    wipeAuth: () => void
}

const useAuthStore = create<AuthStore>(set => ({
    access: '',
    refresh: '',
    populateAuth: (jwt) => set(() => ({...jwt})),
    wipeAuth: () => set(() => ({access: '', refresh: ''}))
}))

export default useAuthStore