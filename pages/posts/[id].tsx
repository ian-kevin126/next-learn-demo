import {useRouter} from "next/router";

const Post = () => {
    const router = useRouter();
    const {id} = router.query;

    console.log("id: ", id)
    if (!id) {
        return <div>loading</div>
    }

    return <div>{id}</div>
}

export default Post;