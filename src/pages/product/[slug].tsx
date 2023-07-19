import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import UnstyledLink from '@/components/links/UnstyledLink';

const SinglePage = () => {
  return (
    <>
      <Layout>
        <Seo templateTitle='Coming Soon' />
        <main className='min-h-screen flex justify-center items-center text-red-600'>
        <h1>Coming Soon...</h1>
        <section className='my-4 flex items-center text-3xl'>
          <UnstyledLink
            href='https://github.com/naufalbasara'
            className='mr-6 hover:text-[#A0A0A0] active:text-[#2A412A]'
          >
            <i className='devicon-github-original'></i>
          </UnstyledLink>
          <UnstyledLink
            href='https://linkedin.com/in/naufalrafiawan'
            className='mr-6 hover:text-[#A0A0A0] active:text-[#2A412A]'
          >
            <i className='devicon-linkedin-plain'></i>
          </UnstyledLink>
          <UnstyledLink
            href='https://twitter.com/naufalbasara'
            className='mr-6 hover:text-[#A0A0A0] active:text-[#2A412A]'
          >
            <i className='devicon-twitter-original'></i>
          </UnstyledLink>
        </section>
      </main>
      </Layout>
    </>
  );
};

export default SinglePage;