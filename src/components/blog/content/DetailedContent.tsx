import { Content } from "../../../services/api/contentService"
import DeleteContent from "./DeleteContent"
import UpdateContent from "./UpdateContent"
import useAuthStore from "../../auth/Store"
import { useState } from "react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs, darcula, vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ContentCode from "./ContentCode"

interface Props {
    content: Content,
    postId: number,
    sectionId: number
}

const DetailedContent = ({content, postId, sectionId}: Props) => {

    const contentId = content.id
    if (!contentId) return null

    const codeString = `
    import React from 'react';

    const HelloWorld = () => {
      return <h1>Hello, world!</h1>;
    };

    export default HelloWorld;
  `
    const access = useAuthStore(store => store.access)
    const [update, setUpdate] = useState(false)
    

  return (
    <>
      <ContentCode 
        language="javascript"
        code={codeString}
      />
      <div 
        className={`w-full flex justify-start items-center gap-8 px-6
          ${access ? 'ml-8' : 'ml-2'}`}
      >
          {access && <UpdateContent sectionId={sectionId} postId={postId} update={update} setUpdate={setUpdate} content={content}/>}
          {access && !update && <DeleteContent contentId={contentId} postId={postId}/>}
          {!update && <p className="lg:text-2xl text-xl lg:leading-[3.2rem] leading-10">{content.content}</p>}

      </div>
    </>
  )
}

export default DetailedContent