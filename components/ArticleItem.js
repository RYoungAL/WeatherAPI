import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'

const ArticleItem = ({article}) => {
  console.log(article.name)
  return (
    <Link href= {"/article/"+article.name} className={articleStyles.grid}>
        <a className={articleStyles.card}>
            <h3>{article.name} &rarr;</h3>
            <p>{article.country}</p>       
        </a>
    </Link>
  )
}

export default ArticleItem