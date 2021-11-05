import DocBody from '../components/doc-body'
import markdownToHtml from '../lib/markdown-to-html'
import { getDocByPath, tosDocPath } from '../lib/utils'
import Head from 'next/head'

export default function TermsOfService({ title, content }) {
    return (
      <dev>
        <Head>
          <title>{title}</title>
        </Head>

        <article>
          <DocBody content={content} />
        </article>

      </dev>  
    )
}

export async function getStaticProps({ _ }) {
  const doc = getDocByPath(tosDocPath, ['title', 'content'])
  const content = await markdownToHtml(doc.content || '')

  return {
    props: {
      title: doc.title,
      content: content
    }
  }
}