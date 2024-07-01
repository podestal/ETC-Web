import { create } from "zustand"

interface TopicStore {
    topic: number,
    select: (id: number) => void
}

const useTopicStore = create<TopicStore>(set => ({
    topic: 0,
    select: (topicId: number) => set(() => ({topic: topicId}))
}))

export default useTopicStore