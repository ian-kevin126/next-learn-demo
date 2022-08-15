import Image from "next/image";
import Link from "next/link";

import {
    Product,
    ImageWrapper,
    ProductDetail,
    ProductTitle,
    ProductDescription,
    ProductPrice,
} from "./ProductCard.style";

interface ProductType {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

interface ProductCardProps {
    product: ProductType;
    all?: boolean;
}

const ProductCard = ({product, all}: ProductCardProps) => {
    const {id, image, title, description, price} = product;

    return (
        <Product key={id}>
            {/* 通常为了不让画面重绘(reflow)，在使用图片时，可以在 <img /> 外面包一层<div>，然后限定 <div> 的 width 跟height，
            在 <Image /> 这个component 传入 layout="fill" 跟 objectFit="cover" 两个props，让图片可以直接吃到 <div> 的宽跟高，
            而在图片载入的过程中让页面重绘，导致web vitals 的CLS(Cumulative Layout Shift) 分数提高。*/}
            <ImageWrapper>
                <Image src={image} alt="product" layout="fill" objectFit="cover"/>
            </ImageWrapper>
            <ProductDetail>
                {/*<Link /> 的child node 只能是 <a> 或一般的字串，这样才能保证能够把 <Link /> 的 href 嵌入到 <a> 上。然而，
                我们使用了styled-components，虽说 <ProductTitle> 是定义为<a>，但是 <Link /> 实际上不知道它是<a>，所以要加上一个
                passHref 的props，让 <Link /> 的 href 可以强制被设定到child node 上面。*/}
                <Link href={`/products/${id}`} passHref>
                    <ProductTitle>{title}</ProductTitle>
                </Link>
                <ProductDescription $all={all}>{description}</ProductDescription>
                <ProductPrice>${price}</ProductPrice>
            </ProductDetail>
        </Product>
    );
};

export default ProductCard;