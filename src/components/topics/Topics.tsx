import useQueryTopics from "../../hooks/topics/useTopics"
import TopicCard from "./TopicCard"

const Topics = () => {

    const { data: topics, isLoading, isError, error } = useQueryTopics()

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>{error.message}</p>

  return (
    <div>
        <h2 className="text-2xl my-10">Topics</h2>
        <ul className="flex flex-col gap-4">
            {topics?.map(topic => <TopicCard key={topic.id} topic={topic}/>)}
        </ul>
    </div>
  )
}

export default Topics