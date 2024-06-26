import { Topic } from "../../services/topicsService"
import useTopicStore from "./Store"

interface Props {
    topic: Topic
}

const TopicCard = ({ topic }: Props) => {

    const select = useTopicStore(store => store.select)
    const color = topic?.color

  return (
    <div className="flex justify-start items-center gap-4" onClick={() => select(topic.id)}>
        <div style={{backgroundColor: color}} className={`w-[14px] h-[14px] rounded-full`}></div>
        <p className="text-xl hover:text-slate-400 cursor-pointer">{topic?.name}</p>
    </div>
  )
}

export default TopicCard