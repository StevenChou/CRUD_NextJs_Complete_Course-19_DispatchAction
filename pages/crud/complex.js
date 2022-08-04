import Layout from '@/components/main/Layout'

export default function Complex() {
  return <div>Complex</div>
}

Complex.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
