import {useRouter} from 'next/router'

function docs(){
    const router = useRouter()
    const {params = []} = router.query

    if(params.length === 2){
        return <h1> Viewing document for feature {params[0]} and concept {params[1]}</h1>
    }
    else if(params.length === 1)
    {
        return <h1> Viewing document for feature {params[0]}</h1>
    }

    return <h1> Viewing docs page..</h1>
}

export default docs