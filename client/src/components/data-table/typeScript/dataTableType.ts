import { Column, ColumnDef, Table } from "@tanstack/react-table"

export interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export interface DataTableFacetedFilterProps<TData, TValue> {
  column?: Column<TData, TValue>;
  title?: string;
  options: {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
}

export interface DataTableProps<TData> {
  columns: ColumnDef<TData>[];
  data: TData[];
  filterableColumns: Array<{
      id: keyof TData;
      title: string;
      options: Array<{
          label: string;
          value: string;
      }>
  }>
}

export interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}