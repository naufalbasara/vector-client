import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import { InferGetStaticPropsType } from 'next';
import { Poppins } from '@next/font/google';
import About from '@/pages/about';
// const poppins = Poppins({
//   subsets:['latin'],
//   weight:['100', '200', '300', '400', '500', '600', '700'],
// })

// const SinglePage = ({
//   source,
//   frontMatter,
// }: InferGetStaticPropsType<typeof getStaticProps>) => {
//   return (
//     <>
//       <Layout>
//         <Seo templateTitle='' />
//         <main>
//           <p>s</p>
//         </main>
//       </Layout>
//     </>
//   );
// };

// export async function getStaticPaths() {
//   const data:any = fetch('api/products').then((response:any) => {
//     response.json().then((response:any)=> {
//       return [...response]
//     })
//   });

//   data.then((response:any) => {
//     response.json().then((response:any) => {
//       console.log(response)
//     })
//   })

//   return {
//     paths: data?.map((obj:any) => ({
//       params: {
//         slug: obj.slug,
//       },
//     })),
//     fallback: false,
//   };
// };

// export const getStaticProps = async ({ params }: Params) => {
//   let data:any = await fetch('api/products').then((response:any) => {
//     response.json().then((response:any)=> {
//       return [...response]
//     })
//   });
  
// };

export default About;