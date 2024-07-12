import { Icon } from '@tremor/react';
import { RiClipboardFill, RiCheckFill } from '@remixicon/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';

interface Props {
    language: string,
    code: string,
}

const ContentCode = ({ language, code }: Props) => {

    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        setCopied(true)
        navigator.clipboard.writeText(code)
    }

  return (
    <div
        className='w-full'
    >
        
        <div className='w-full text-slate-400 px-4 overflow-hidden'>
            {copied 
            ? 
            <div className='w-full flex justify-end items-center'>
                <div className='flex items-center'>
                    <p>Copied</p>
                    <Icon icon={RiCheckFill} color='green' size='lg'/>
                </div>
            </div>
            : 
            <div className='w-full flex justify-end items-center'>
                <div onClick={handleCopy} className='flex items-center'>
                    <p className='  hover:text-slate-50'>Copy</p>
                    <Icon className='cursor-pointer' icon={RiClipboardFill} size='lg'/>
                </div>
            </div>
            }
            
        </div>
        <div className='mx-4 overflow-hidden'>
            <SyntaxHighlighter
                language={language}
                style={vscDarkPlus}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    </div>
  )
}

export default ContentCode