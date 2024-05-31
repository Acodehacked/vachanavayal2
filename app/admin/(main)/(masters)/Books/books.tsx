'use client'
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import React, { useState } from 'react'
import Papa from 'papaparse';
import { Checkbox } from '@/components/ui/checkbox';
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { Button } from '@/components/ui/button';
import { ChevronDown } from "lucide-react"
import { BiBookAdd, BiEdit, BiTrash } from "react-icons/bi"
import { IoMdAddCircle } from "react-icons/io"
type BookType = {
    id: number;
    order_no: number;
    type: "BIBLE" | "OTHERS";
    from: "OLD_TESTAMENT" | "NEW_TESTAMENT" | null;
    title: string[];
    chapters: number;
    random: boolean | null;
    images: string[];
    forSell: boolean;
};

export const columns: ColumnDef<BookType>[] = [
    {
        id: "id",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: true,
    },
    {
        enableSorting: true,
        accessorKey: "order_no",
        header: "Order No",
        cell: ({ row }) => (
            <div className="font-semibold">{row.getValue("order_no")}</div>
        ),
    },
    {
        accessorKey: "title",
        header: "Title",
        cell: ({ row }) => (
            <div className="capitalize font-semibold">{JSON.parse(row.getValue("title") as string)[0]}</div>
        ),
    },
    {
        accessorKey: "title",
        enableSorting: true,
        header: "Title",
        cell: ({ row }) => (
            <div className="capitalize font-semibold mal">{JSON.parse(row.getValue("title") as string)[1]}</div>
        ),
    },
    {
        accessorKey: "type",
        header: "Type",
        cell: ({ row }) => (
            <div className="capitalize font-semibold">{row.getValue("type")}</div>
        ),
    },
    {
        accessorKey: "chapters",
        header: "Actions",
        cell: ({ row }) => (
            <div className="capitalize font-semibold flex gap-3">
                <Button variant={'outline'} className="p-2"><BiEdit size={18} /></Button>
                <Button variant={'outline'} className="p-2"><BiTrash className="text-red-500" size={18} /></Button>
                {/* {row.getValue("type")} */}
            </div>
        ),
    },
];
const Books = ({ data }: {
    data: {
        id: number;
        order_no: number;
        type: "BIBLE" | "OTHERS";
        from: "OLD_TESTAMENT" | "NEW_TESTAMENT" | null;
        title: string[];
        chapters: number;
        random: boolean | null;
        images: string[];
        forSell: boolean;
    }[]
}) => {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })
    return <div className="px-5 pb-10">
        <div className="w-full">
            <div className="flex justify-between md:flex-row flex-col items-center py-4 gap-5">
                <Input
                    placeholder="Filter emails..."
                    value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
                    onChange={(event: any) =>
                        table.getColumn("title")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm mal"
                />
                <div className="flex  gap-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="ml-auto">
                                Columns <ChevronDown className="ml-2 h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {table
                                .getAllColumns()
                                .filter((column) => column.getCanHide())
                                .map((column) => {
                                    return (
                                        <DropdownMenuCheckboxItem
                                            key={column.id}
                                            className="capitalize"
                                            checked={column.getIsVisible()}
                                            onCheckedChange={(value) =>
                                                column.toggleVisibility(!!value)
                                            }
                                        >
                                            {column.id}
                                        </DropdownMenuCheckboxItem>
                                    )
                                })}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button className="flex gap-3">
                        Add <IoMdAddCircle className="text-white" size={19} />
                    </Button>
                </div>
            </div>
            <div className="rounded-md border bg-white text-[18px] text-zinc-700">
                <Table>
                    <TableHeader className="relative z-[1]">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead className="relative z-[1]" key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id} className="text-[16px]">
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    showing {table.getCenterRows().length} of{" "}
                    {table.getPageCount()} row(s)
                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    </div>
}

export default Books