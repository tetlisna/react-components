import Page from '..';
import { wrapper } from '@/_store/store';
import { itemDetail } from '@/services/items-api-slice';

export default Page;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const id = context.params?.id;
    if (typeof id === 'string') {
      store.dispatch(itemDetail.initiate(Number(id)));
    }
    return {
      props: {},
    };
  }
);
