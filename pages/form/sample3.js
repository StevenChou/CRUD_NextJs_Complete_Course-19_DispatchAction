import Layout from '@/components/main/Layout'

export default function Sample3() {
  return <div>sample3</div>
}

Sample3.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
