import React from 'react'

import Layout from '@/components/main/Layout'

export default function Index() {
  return <div>sidebar index</div>
}

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
