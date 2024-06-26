import { Topic } from "../../services/topicsService"
import useTopicStore from "./Store"

interface Props {
    topic: Topic
}

const TopicCard = ({ topic }: Props) => {

    const select = useTopicStore(store => store.select)

  return (
    <div onClick={() => select(topic.id)}>
        <p className="text-xl hover:text-slate-400 cursor-pointer">{topic?.name}</p>
    </div>
  )
}

export default TopicCard