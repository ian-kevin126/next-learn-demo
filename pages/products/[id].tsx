import {useRouter} from "next/router";
import Link from "next/link";

import {PageTitle, ProductContainer, BackLink} from "./[id].style";
import {getProductById} from "../../mock/fake-data";
import ProductCard from "../../components/ProductCard/ProductCard";

const Product = () => {
    const router = useRouter();
    const {id} = router.query;

    /*
        这里要特别注意的是，还记得我们在dynamic routes 的章节有说到，因为Next.js 有pre-rendering 这个阶段，导致 router.query
        第一次渲染时是空物件{}，所以用解构赋值(Destructuring assignment) 拿到的 id 会是undefined，因此要用conditionally render
        的方式绕开，避免 <ProductCard /> 爆掉。
     */
    if (!id) return <></>;

    const product = getProductById(id as string);

    return (
        <>
            <PageTitle>商品詳細頁面</PageTitle>
            <BackLink>
                <Link href="/products">回產品列表</Link>
            </BackLink>
            <ProductContainer>
                <ProductCard product={product} all/>
            </ProductContainer>
        </>
    );
};

export default Product;