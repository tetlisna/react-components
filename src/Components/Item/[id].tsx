import Link from 'next/link';
import { IMAGE_URL } from '@/models/interfaces/constants';
import { ItemIterface } from '@/models/interfaces/interfaces';
import styles from './Item.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';

export const Item = (props: ItemIterface) => {
  const { name, url, eye_color, birth_year, gender } = props;

  const heroId = url.split('/');
  heroId.pop();
  const heroIdNum = heroId[heroId.length - 1];
  const router = useRouter();
  const { page } = router.query;

  return (
    <article className={styles.itemCard} data-testid={styles.itemsCard}>
      <Link
        href={
          page ? `/page/${page}/details/${heroIdNum}` : `/details/${heroIdNum}`
        }
      >
        <button className={styles.articleBtn} data-testid="detailsBtn">
          Details
        </button>
      </Link>
      <Image
        src={`${IMAGE_URL}/${heroIdNum}.jpg`}
        alt={'Photo of ' + name}
        className={styles.itemImage}
        width={150}
        height={150}
        priority={true}
        // loading="lazy"
      />
      <h2 data-testid="name">{name}</h2>
      <p data-testid="eye_color">
        <strong>Eye color: </strong>
        {eye_color}
      </p>
      <p data-testid="gender">
        <strong>Gender: </strong>
        {gender}
      </p>
      <p data-testid="birth_year">
        <strong>Birth year: </strong>
        {birth_year}
      </p>
    </article>
  );
};
