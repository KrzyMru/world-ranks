import { ListboxProps } from "@headlessui/react";

interface SortListboxProps extends ListboxProps {
    options: SortType[],
}

type SortType = 'name' | 'population' | 'area' | 'region';

export type { SortListboxProps, SortType }