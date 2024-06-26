import { Topic } from "../../services/topicsService"

interface Props {
    topic: Topic
}

const TopicCard = ({ topic }: Props) => {
  return (
    <div>
        <p className="text-xl">{topic?.name}</p>
    </div>
  )
}

export default TopicCard