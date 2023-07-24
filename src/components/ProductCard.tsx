import * as React from 'react';
import NextImage from '@/components/NextImage';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

type ProductCardProps = {
  className?: string;
  name?:string;
  category?:string
  description?:string;
  image_path?:string
  href?:string
}

const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  (
    {
      className,
      name,
      category,
      description,
      image_path,
      href
    },
  ) => {
    return (
      <div className={"w-[242px] h-[313px] rounded-[28px] border border-solid border-red-200 p-6 hover:shadow-[0_5px_30px_rgba(37,66,70,0.75)] transition duration-200 ease-linear flex flex-col items-center justify-evenly mx-4 my-4 " + className}>
        <h4 className='text-red-800 '>{name}</h4>
        <p className='text-center text-sm text-[#A09090]'>{category}</p>
        {/* <p className='text-center text-sm sm:text-base'>{description}</p> */}
        <NextImage 
        useSkeleton
        src={image_path!}
        className='max-w-full'
        width='96'
        height='96'
        alt={name!} 
        />
        <ArrowLink
                    as={ButtonLink}
                    variant='light'
                    className='inline-flex items-center rounded-lg hover:bg-[#A0A0A0]'
                    href={href!}
                  >
                    See Details
                  </ArrowLink>
      </div>
    );
  }
);

export default ProductCard;