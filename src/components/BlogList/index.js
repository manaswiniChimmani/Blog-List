// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul>
      {blogsList.map(each => (
        <BlogItem items={each} key={each.id} />
      ))}
    </ul>
  )
}
export default BlogList
