import { useRouter } from 'next/router' 

function productDetial(){
    const router = useRouter()
    const productID = router.query.productID
return(
    <h1> Product detail page for id - {productID}</h1>
)
}

export default productDetial