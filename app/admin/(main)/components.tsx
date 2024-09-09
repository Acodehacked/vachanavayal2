/**
 * v0 by Vercel.
 * @see https://v0.dev/t/M8KqgvnQvQb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { BarChartIcon, BriefcaseIcon, ChevronLeftIcon, ChevronRightIcon, CuboidIcon, DollarSignIcon, HomeIcon, LayoutGridIcon, LineChartIcon, LockIcon, LogOutIcon, MenuIcon, MountainIcon, PackageIcon, PowerIcon, SearchIcon, SettingsIcon, ShoppingCartIcon, UserIcon, UserPlusIcon, UsersIcon } from "lucide-react"

export default function Component() {
  return (
    <div className="flex min-h-screen w-full">
      <aside className="fixed inset-y-0 left-0 z-10 flex w-64 flex-col border-r bg-background transition-all duration-300 ease-in-out data-[collapsed=true]:w-16 data-[collapsed=true]:px-2">
        <div className="flex h-16 items-center justify-between px-4">
          <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg">Acme Inc</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full transition-transform data-[collapsed=true]:rotate-180"
          >
            <ChevronLeftIcon className="h-5 w-5" />
            <span className="sr-only">Toggle Sidebar</span>
          </Button>
        </div>
        <nav className="flex-1 overflow-y-auto px-2">
          <Collapsible className="grid gap-1">
            <CollapsibleTrigger className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted data-[state=open]:[&>svg]:rotate-90">
              <HomeIcon className="h-5 w-5" />
              <span>Dashboard</span>
              <ChevronRightIcon className="ml-auto h-4 w-4 transition-transform" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="grid gap-1 pl-8">
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  <LayoutGridIcon className="h-4 w-4" />
                  <span>Overview</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  <BriefcaseIcon className="h-4 w-4" />
                  <span>Orders</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  <PackageIcon className="h-4 w-4" />
                  <span>Products</span>
                </Link>
              </div>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="grid gap-1">
            <CollapsibleTrigger className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted data-[state=open]:[&>svg]:rotate-90">
              <UsersIcon className="h-5 w-5" />
              <span>Customers</span>
              <ChevronRightIcon className="ml-auto h-4 w-4 transition-transform" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="grid gap-1 pl-8">
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  <UserIcon className="h-4 w-4" />
                  <span>All Customers</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  <UserPlusIcon className="h-4 w-4" />
                  <span>New Customer</span>
                </Link>
              </div>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="grid gap-1">
            <CollapsibleTrigger className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted data-[state=open]:[&>svg]:rotate-90">
              <BarChartIcon className="h-5 w-5" />
              <span>Analytics</span>
              <ChevronRightIcon className="ml-auto h-4 w-4 transition-transform" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="grid gap-1 pl-8">
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  <BarChartIcon className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  <LineChartIcon className="h-4 w-4" />
                  <span>Reports</span>
                </Link>
              </div>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="grid gap-1">
            <CollapsibleTrigger className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted data-[state=open]:[&>svg]:rotate-90">
              <SettingsIcon className="h-5 w-5" />
              <span>Settings</span>
              <ChevronRightIcon className="ml-auto h-4 w-4 transition-transform" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="grid gap-1 pl-8">
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  <PowerIcon className="h-4 w-4" />
                  <span>General</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  <LockIcon className="h-4 w-4" />
                  <span>Security</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  <UserIcon className="h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </nav>
      </aside>
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-20 flex h-16 w-full items-center justify-between border-b bg-background px-4 shadow-sm">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full lg:hidden">
              <MenuIcon className="h-5 w-5" />
              <span className="sr-only">Toggle Sidebar</span>
            </Button>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="#" prefetch={false}>
                      Dashboard
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbPage>Overview</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchIcon className="w-5 h-5 text-muted-foreground" />
              </div>
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 pr-4 rounded-md bg-muted/40 focus:bg-background focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  {/* <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar> */}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>John Doe</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <UserIcon className="w-4 h-4 mr-2" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SettingsIcon className="w-4 h-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOutIcon className="w-4 h-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-6">
          <div className="grid gap-4 md:gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
                <CardDescription>A high-level summary of your business performance.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="flex items-start gap-4 rounded-md border p-4 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <ShoppingCartIcon className="h-5 w-5" />
                    </div>
                    <div className="grid gap-1">
                      <div className="text-2xl font-bold">1,234</div>
                      <div className="text-sm text-muted-foreground">Total Orders</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-md border p-4 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <UsersIcon className="h-5 w-5" />
                    </div>
                    <div className="grid gap-1">
                      <div className="text-2xl font-bold">5,678</div>
                      <div className="text-sm text-muted-foreground">Total Customers</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-md border p-4 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success text-success-foreground">
                      <DollarSignIcon className="h-5 w-5" />
                    </div>
                    <div className="grid gap-1">
                      <div className="text-2xl font-bold">$98,765</div>
                      <div className="text-sm text-muted-foreground">Total Revenue</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-md border p-4 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-warning text-warning-foreground">
                      <CuboidIcon className="h-5 w-5" />
                    </div>
                    <div className="grid gap-1">
                      <div className="text-2xl font-bold">456</div>
                      <div className="text-sm text-muted-foreground">Total Products</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>A list of your most recent orders.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <Link href="#" className="font-medium" prefetch={false}>
                            #1234
                          </Link>
                        </TableCell>
                        <TableCell>John Doe</TableCell>
                        <TableCell>2023-04-01</TableCell>
                        <TableCell>
                          <Badge variant="secondary">Pending</Badge>
                        </TableCell>
                        <TableCell>$99.99</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Link href="#" className="font-medium" prefetch={false}>
                            #1233
                          </Link>
                        </TableCell>
                        <TableCell>Jane Smith</TableCell>
                        <TableCell>2023-03-31</TableCell>
                        <TableCell>
                          <Badge variant="secondary">Pending</Badge>
                        </TableCell>
                        <TableCell>$49.99</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Link href="#" className="font-medium" prefetch={false}>
                            #1232
                          </Link>
                        </TableCell>
                        <TableCell>Bob Johnson</TableCell>
                        <TableCell>2023-03-30</TableCell>
                        <TableCell>
                          <Badge>Fulfilled</Badge>
                        </TableCell>
                        <TableCell>$79.99</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Link href="#" className="font-medium" prefetch={false}>
                            #1231
                          </Link>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

