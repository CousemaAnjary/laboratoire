"use client"

import { Utilisateur } from "@/modules/parametres/utilisateurs/utils/data"
import { ColumnDef } from "@tanstack/react-table"


export const Columns: ColumnDef<Utilisateur>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "nom",
        header: "Nom",
    },
    {
        accessorKey: "prenom",
        header: "Prénom",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "statut",
        header: "Statut",
    },
]
