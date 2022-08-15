import {useRouter} from "next/router";

const Post = () => {
    const router = useRouter();
    const {date} = router.query;
    console.log("date: ", date)

    if (!date) {
        return (<div>loading</div>)
    }

    return (<div>{date.toString()}</div>)
}

export default Post;