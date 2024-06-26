import useQueryTopics from "../../hooks/topics/useTopics"
import useTopicStore from "./Store"
import TopicCard from "./TopicCard"

const Topics = () => {

    const select = useTopicStore(store => store.select)

    const { data: topics, isLoading, isError, error } = useQueryTopics()

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>{error.message}</p>

  return (
    <div className="w-[240px] my-4">
        <h2 className="text-2xl my-10 font-bold">Categorías</h2>
        <ul className="flex flex-col gap-12">
            <p onClick={() => select(0)} className="text-xl hover:text-slate-400 cursor-pointer">Todas las categorías</p>
            {topics?.map(topic => <TopicCard key={topic.id} topic={topic}/>)}
        </ul>
    </div>
  )
}

export default Topics