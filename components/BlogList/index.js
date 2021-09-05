import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsData} = props

  return (
    <div className="ul-list">
      {blogsData.map(item => (
        <BlogItem key={item.id} blogs={item} />
      ))}
    </div>
  )
}

export default BlogList
