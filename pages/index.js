import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ArticleList from '../components/ArticleList'

export default function Home({articles}) {
  
  
  return (
    <div className={styles.container}>
     
      <h1>Welcome</h1>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`http://api.weatherapi.com/v1/search.json?key=70f4c5e1740e4c6e9bb62445220905&q=Cape Town`)
  const articles = await res.json()
  
  return{
    props: {
      articles
    }
  }
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return{
//     props: {
//       articles
//     }
//   }
// }