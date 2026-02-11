import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

type CardsSwiperProps<T> = {
  items: T[];
  renderCard: (item: T) => React.ReactNode;
  getKey?: (item: T, index: number) => React.Key;
  allowTouchMove: boolean;
};

function repeatToMin<T>(items: T[], min: number) {
  if (items.length === 0) return [];
  const out: T[] = [];
  while (out.length < min) out.push(...items);
  return out.slice(0, min);
}

export function CardsSwiper<T>({
  items,
  renderCard,
  getKey,
  allowTouchMove,
}: CardsSwiperProps<T>) {
  const loopItems = repeatToMin(items, Math.max(24, items.length));

  return (
    <Swiper
      className="w-full"
      modules={[Autoplay]}
      loop={true}
      watchSlidesProgress
      slidesPerView="auto"
      spaceBetween={0}
      speed={6000}
      allowTouchMove={allowTouchMove}
      autoplay={{
        delay: 200,
        disableOnInteraction: false,
      }}>
      {loopItems.map((item, index) => (
        <SwiperSlide
          key={getKey?.(item, index) ?? index}
          className="!w-auto flex items-center px-10">
          {renderCard(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
