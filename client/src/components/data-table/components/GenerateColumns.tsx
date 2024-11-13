"use client"

import { ColumnDef } from "@tanstack/react-table";

// Fonction générique pour générer automatiquement les colonnes
export function GenerateColumns<T>(keys: Array<keyof T>): ColumnDef<T>[] {
    return keys.map((key) => ({
        accessorKey: key as string,
        header: String(key).charAt(0).toUpperCase() + String(key).slice(1),
    })) as ColumnDef<T>[];
}
