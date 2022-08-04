import Layout from '@/components/main/Layout'

export default function Sample2() {
  return <div>sample2</div>
}

Sample2.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
