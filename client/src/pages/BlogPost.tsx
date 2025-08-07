import React from 'react'
import Markdown from 'react-markdown'

const testMarkdown = "testing, this is *markdown* isn't it **please work**"

const BlogPost = () => {
  return (<>
    <div>BlogPost</div>
    <Markdown>
        {testMarkdown} 
    </Markdown>
  </>
    
  )
}

export default BlogPost