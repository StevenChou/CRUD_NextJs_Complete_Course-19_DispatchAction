import Layout from '@/components/main/Layout'

export default function Sample1() {
  return <div>sample1</div>
}

Sample1.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
