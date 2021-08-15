import Link from 'next/link'
import {useRouter} from 'next/router'

function Home(){

    const route = useRouter()

const handleClick = () => {
    console.log("order placed")
    route.push("/product")
}

return(
    <h11>
        <div className="div center"> Home </div>
        
        <hr></hr>
        <Link href="/product">
            <a>product       </a>
        </Link>
        <Link href="/blogs/blog1">
        <a>Blog1</a>
        </Link>
        <hr></hr>
        <button onClick={handleClick} className="ui primary button">
            Place order
        </button>
    </h11>
)    

}

export default Home