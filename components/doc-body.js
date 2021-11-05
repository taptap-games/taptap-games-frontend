import styles from './markdown-styles.module.css'

export default function DocBody({ content }) {
  return (
    <div>
      <div
        className={styles.markdown}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
