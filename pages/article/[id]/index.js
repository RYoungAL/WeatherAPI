import {useRouter} from 'next/router'
import Link from 'next/link'

const article = ({article}) => {
    
    const router = useRouter()
    const name = router.query
    console.log(name)
    return (
        <>
            <h1>This is article 1</h1>
            <p>{article.region}</p>
            <br />
            <Link href='/'>Go Back</Link>
        </>
    )
    
}

export const getStaticProps = async (context) => {
    
    const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=70f4c5e1740e4c6e9bb62445220905&q=${context.params.cityName}&aqi=no/`)

    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=70f4c5e1740e4c6e9bb62445220905&q=CapeTown&aqi=no/`)

    const articles = await res.json()

    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback:false
    }
}