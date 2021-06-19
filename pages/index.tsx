import styles from '../styles/Home.module.css'
import { BasePagina } from '../components/BasePagina'
import { Bio } from '../components/Bio'

export default function Home() {
  return (
    <div className={styles.container}>
      <BasePagina>
        <Bio />
      </BasePagina>
    </div>
  )
}
