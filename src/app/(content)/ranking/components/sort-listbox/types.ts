import { ListboxProps } from "@headlessui/react";

interface SortListboxProps extends ListboxProps {
    options: readonly SortType[],
}

export const sortTypes = ['name', 'population', 'area', 'region'] as const;
type SortType = typeof sortTypes[number];

export type { SortListboxProps, SortType }