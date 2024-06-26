import { useParams } from "react-router-dom"

const SinglePostPage = () => {

    const params = useParams()

  return (
    <div>
        <p>SinglePostPage</p>
        <>{console.log('params', params)}</>
    </div>
  )
}

export default SinglePostPage