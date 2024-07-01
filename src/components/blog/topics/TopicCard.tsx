import { Topic } from "../../../services/api/topicsService"
import useTopicStore from "./Store"

interface Props {
    topic: Topic
}

const TopicCard = ({ topic }: Props) => {

    const {topic: selectedTopic ,select} = useTopicStore()
    const color = topic?.color

  return (
    <div className={`flex justify-start items-center gap-4 ${selectedTopic == topic.id && 'bg-slate-900'} py-2 px-4 rounded-3xl`} onClick={() => select(topic.id)}>
        <div style={{backgroundColor: color}} className={`w-[14px] h-[14px] rounded-full`}></div>
        <p className="text-xl hover:text-slate-400 cursor-pointer">{topic?.name}</p>
    </div>
  )
}

export default TopicCard