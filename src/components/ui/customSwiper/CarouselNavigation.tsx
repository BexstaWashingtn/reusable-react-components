import Stack from "@/components/utils/Stack";
import control from "@ui/primitives/controls/control.module.css";
import styles from "./carouselNavigation.module.css";
import ArrowIcon from "../ArrowIcon";
import type { Ref } from "react";
import Button from "../form/Button";

// Carousel Navigation Button - ONCE

type Props = {
  buttonRef?: Ref<HTMLButtonElement>;
  direction: "back" | "forward";
  label: string;
};
export default function CarouselNavigation({
  buttonRef,
  direction,
  label,
}: Props) {
  return (
    <div className={styles.CarouselNavigation}>
      <Stack direction='column' justifyContent='center'>
        <Button
          type='button'
          ref={buttonRef}
          variant='icon-primary'
          className={control.iconButton}
          aria-label={label}
        >
          <ArrowIcon direction={direction} className={control.icon} />
        </Button>
      </Stack>
    </div>
  );
}
