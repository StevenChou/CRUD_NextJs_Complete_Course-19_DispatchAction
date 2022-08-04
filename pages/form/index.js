import Layout from '@/components/main/Layout'

export default function Index() {
  return (
    <a
      href='https://react-hook-form.com/'
      target='_blank'
      rel='noreferrer'
      className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'
    >
      <span className='text-xl'>React Hook Form</span>
    </a>
  )
}

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
