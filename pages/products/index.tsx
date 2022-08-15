import {PageTitle, PriceFilter, ProductGallery} from "./index.style";
import {Direction, sortByPrice} from "../../mock/fake-data";
import ProductCard from "../../components/ProductCard/ProductCard";
import {ChangeEvent, useEffect, useState} from "react";
import {useRouter} from "next/router";

const Home = () => {
    // const [direction, setDirection] = useState<Direction>("ASC");
    // const products = sortByPrice(direction);
    //
    // const handleSortingDirectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    //     setDirection(e.target.value as Direction);
    // };


    /*
    使用shallow routing 让页面记住排序规则
    最后，我们要处理比较进阶的user story：

    我在商品列表中可以依照价格排序商品，希望重新整理后仍然可以保留排序的结果
    要实现这个功能，势必要找个个地方储存「使用者选择的排序顺序direction」，储存的方式有很多种，例如：储存进资料库、localStorage、
    query string 上，每一种做法都有其优缺点，要看产品的需求是什么？

    因为前面学习到shallow routing 这个技巧，那我们就把 direction 使用shallow routing 把它储存到url 的query string 上吧！

    要实作这个功能，改动的地方是 handleSortingDirectionChange 里面的实作，把原本 setDirection 改成用 router.push 的方式加上
    shallow routing 动态地修改 direction 的数值。

    然后可以用 router.query 取得url 上的query string，所以搭配 useEffect 监听 router.query.direction 的数值，然而
    router.query 在第一次渲染时是空物件{}，所以要判断能不能从中取得direction，再将结果用 setDirection 储存到状态中。
     */

    const [direction, setDirection] = useState<Direction>("ASC");
    const router = useRouter();

    const products = sortByPrice(direction);

    const handleSortingDirectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const dir = e.target.value;
        router.push(`${router.pathname}?direction=${dir}`, undefined, {
            shallow: true,
        });
    };

    useEffect(() => {
        if (router.query.direction) {
            setDirection(router.query.direction as Direction);
        }
    }, [router.query.direction]);

    return (
        <>
            <PageTitle>商品列表</PageTitle>
            <PriceFilter>
                Price:
                <select value={direction} onChange={handleSortingDirectionChange}>
                    <option value="ASC">价格由低到高</option>
                    <option value="DES">价格由高到低</option>
                </select>
            </PriceFilter>
            <ProductGallery>
                {
                    products.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))
                }
            </ProductGallery>
        </>
    );
};

export default Home;