// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {items} = props
  const {title, description, publishedDate} = items
  return (
    <div>
      <li>
        <div className="c1">
          <h1 className="h1">{title}</h1>
          <p className="p1">{publishedDate}</p>
        </div>
        <div>
          <p className="p2">{description}</p>
        </div>
      </li>
      <hr />
    </div>
  )
}
export default BlogItem
