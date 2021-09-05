import './index.css'

const BlogItem = props => {
  const {blogs} = props
  const {title, description, publishedDate} = blogs

  return (
    <li className="list-item">
      <div className="row-container">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr className="line" />
    </li>
  )
}
export default BlogItem
