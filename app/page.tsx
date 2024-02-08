"use client";
import { Navbar, CarouselBanner, ItemList } from '@/src/components'
import store from "@/src/redux/store/store";
import { Provider } from 'react-redux';

export default function Page() {
return (
 <Provider store={store}>
  <Navbar />
  <CarouselBanner />
  <ItemList />
 </Provider>
  );
}
