import { Column, ColumnDef, Table } from "@tanstack/react-table";

/**
 * Props pour le composant `DataTableColumnHeader`
 * - `column`: La colonne de la table à laquelle l'en-tête est associé.
 * - `title`: Le titre de l'en-tête de colonne.
 * - Hérite des attributs HTML de `div` pour personnalisation.
 */
export interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

/**
 * Props pour le composant `DataTableFacetedFilter`
 * - `column`: La colonne pour laquelle le filtre est appliqué (facultatif).
 * - `title`: Le titre du filtre (facultatif).
 * - `options`: Les options de filtrage disponibles avec un label, une valeur, et un icône (facultatif).
 */
export interface DataTableFacetedFilterProps<TData, TValue> {
  column?: Column<TData, TValue>;
  title?: string;
  options: {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
}

/**
 * Props pour le composant `DataTable`
 * - `columns`: Les définitions des colonnes de la table.
 * - `data`: Les données à afficher dans la table.
 * - `filterableColumns`: Une liste des colonnes qui peuvent être filtrées, avec leurs options.
 */
export interface DataTableProps<TData> {
  columns: ColumnDef<TData>[];
  data: TData[];
  filterableColumns: Array<{
    id: keyof TData;
    title: string;
    options: Array<{
      label: string;
      value: string;
    }>;
  }>;
}

/**
 * Props pour le composant `DataTablePagination`
 * - `table`: L'instance de la table pour gérer la pagination.
 */
export interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

/**
 * Props pour le composant `DataTableToolbar`
 * - `table`: L'instance de la table pour gérer les actions de la barre d'outils.
 * - `filterableColumns`: Une liste des colonnes filtrables avec leurs options.
 */
export interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  filterableColumns: Array<{
    id: keyof TData;
    title: string;
    options: Array<{
      label: string;
      value: string;
    }>;
  }>;
}

/**
 * Props pour le composant `DataTableViewOptions`
 * - `table`: L'instance de la table pour gérer les options d'affichage.
 */
export interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
}
