import Head from "next/head";

import { Layout } from "components/layout";

export default function Page404() {
  return (
    <Layout>
      <Head>
        <title>Página não encontrada</title>
      </Head>
      
          <p className="title-1-bold-cinzel">Página não encontrada ;(</p>
    </Layout>
  );
}
