import useQueryTopics from "../../hooks/topics/useTopics"
import useTopicStore from "./Store"
import TopicCard from "./TopicCard"
import useAuthStore from "../auth/Store"
import CreatePost from "../posts/CreatePost"

const Topics = () => {

    const {topic, select} = useTopicStore()

    const {access} = useAuthStore()

    const { data: topics, isLoading, isError, error } = useQueryTopics()

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>{error.message}</p>

  return (
    <div className="w-[280px] my-4 flex flex-col justify-start items-start gap-8 fixed">
        <h2 className="text-3xl my-10 font-bold">Categorías</h2>
        <ul className="flex flex-col gap-12">
            <div className={`flex justify-start items-center gap-4 ${topic == 0 && 'bg-slate-900'} py-2 px-4 rounded-3xl`}>
                <div className={`w-[14px] h-[14px] rounded-full bg-slate-500`}></div>
                <p onClick={() => select(0)} className="text-xl hover:text-slate-400 cursor-pointer">Todas las categorías</p>
            </div>
            
            {topics?.map(topic => <TopicCard key={topic.id} topic={topic}/>)}
        </ul>
        {access && <CreatePost />}
    </div>
  )
}

export default Topics