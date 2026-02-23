import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type CardsSwiperProps<T> = {
  items: T[];
  renderCard: (item: T) => React.ReactNode;
  getKey?: (item: T, index: number) => React.Key;
};

export function TargetSwiper<T>({
  items,
  renderCard,
  getKey,
}: CardsSwiperProps<T>) {
  return (
    <Swiper
      className="w-full relative px-16"
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      slidesPerView={"auto"}
      breakpoints={{
        256: { slidesPerView: 1, spaceBetween: 16 },
        640: { slidesPerView: 2, spaceBetween: 16 },
        1024: { slidesPerView: 3, spaceBetween: 20 },
      }}>
      {items.map((item, index) => (
        <SwiperSlide
          key={getKey?.(item, index) ?? index}
          className=" relative px-6">
          {renderCard(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
