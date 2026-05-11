"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { SwiperOptions } from "swiper/types";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "@components/ui/customSwiper/swiper.default.css";
import styles from "./customSwiper.module.css";
import { ReactNode, Key, useRef, useEffect } from "react";
import CarouselNavigation from "./CarouselNavigation";
import Stack from "@/components/utils/Stack";

export default function CustomSwiper<T extends { id: Key }>({
  items,
  renderItem,
  swiperConfig,
  showNavigation = false,
}: {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  swiperConfig?: SwiperOptions;
  showNavigation?: boolean;
}) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const modules = showNavigation
    ? [Keyboard, Pagination, Navigation]
    : [Pagination];

  useEffect(() => {
    if (!showNavigation) {
      return;
    }

    const swiper = swiperRef.current;
    if (!swiper) return;
    if (!prevRef.current || !nextRef.current) return;

    const navigation = swiper.params.navigation;

    if (!navigation || typeof navigation === "boolean") return;

    navigation.prevEl = prevRef.current;
    navigation.nextEl = nextRef.current;

    swiper.navigation.init();
    swiper.navigation.update();
  }, [showNavigation]);

  return (
    <div className={styles.swiperContainer}>
      <Stack direction='row' gap='md'>
        {showNavigation && (
          <CarouselNavigation
            buttonRef={prevRef}
            direction='back'
            label='Vorheriges Projekt'
          />
        )}

        <Swiper
          {...swiperConfig}
          modules={modules}
          className={`swiperCustomCSS`}
          keyboard={{ enabled: true, onlyInViewport: true }}
          pagination={{ clickable: true, el: ".swiperCustomPagination" }}
          onSwiper={(swiper) => {
            if (showNavigation) {
              swiperRef.current = swiper;
            }
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={item.id}>{renderItem(item, index)}</SwiperSlide>
          ))}

          <div className='swiperCustomPagination' />
        </Swiper>

        {showNavigation && (
          <CarouselNavigation
            buttonRef={nextRef}
            direction='forward'
            label='Nächstes Projekt'
          />
        )}
      </Stack>
    </div>
  );
}
