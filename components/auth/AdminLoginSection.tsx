"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { signIn } from 'next-auth/react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Lock, User } from "lucide-react"
import { useContext, useState } from "react"
import { IoMdClose, IoMdEye, IoMdEyeOff } from "react-icons/io"
import Link from "next/link"
import { redirect, useRouter } from "next/navigation"
import { BiError, BiLoaderCircle } from "react-icons/bi"
import Image from "next/image"
import SnackbarContext from "@/lib/Snackbar-context"

const formSchema = z.object({
    username: z.string().min(1, "Please Enter Your username"),
    password: z.string().min(1, "Please Enter Your Password"),
})

export function AdminLoginSection() {
    const snackbarCtx = useContext(SnackbarContext);
    const router = useRouter();
    const [passvisible, setpassvisible] = useState(false);
    const [loading, setloading] = useState(false);
    const [errorShown, seterrorShown] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setloading(true);
        console.log(values);
        const response = await signIn(
            'credentials',
            {
                username: values.username,
                password: values.password,
                redirect: false,
                callbackUrl: '/admin'
            }
        );
        setloading(false)
        console.log(response)

        if (response?.error == null) {
            seterrorShown(false);
            router.push('/admin')
            snackbarCtx.displayMsg('login successfull!');
        } else {
            seterrorShown(true);
        }
    }
    // ...

    return (
        <div className="min-h-[90vh] h-full items-center bg-zinc-50 flex justify-center flex-col">
            {/* <div className="max-w-[400px] w-full p-4">
            </div> */}
            <div className=" mt-[-100px] bg-white rounded-sm shadow-zinc-200 shadow-[0px_0px_50px] items-center h-full max-w-[400px] w-full space-y-3">
                <div className="flex items-center">
                    <Image src={'/assets/images/app_logo.png'} alt="App logo" className='ms-3' width={50} height={50} />
                    <div className="px-4 pt-3">
                        <h1 className="text-[15px] text-zinc-500">Admin Login</h1>
                        <h1 className=" text-[24px]">Administrator</h1>
                    </div>
                </div>
                <hr />
                <Form {...form}>
                    <motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.24 }} method="post" onSubmit={form.handleSubmit(onSubmit)} className="px-4 pt-4 space-y-5">
                        {errorShown && <div className="bg-red-500 justify-between p-3 rounded-sm text-[13px] flex  text-white items-center">
                            <div className="flex items-center"><BiError size={20} className="text-white " /><span className={'ms-2 text-white'}>Incorrect Username / Password</span></div>
                            <IoMdClose onClick={() => seterrorShown(false)} />
                        </div>}
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel></FormLabel>
                                    <FormControl>
                                        <div className="flex items-center">
                                            <User size={20} className="mx-3" />
                                            <Input placeholder="Username" {...field} />
                                        </div>
                                    </FormControl>
                                    <FormDescription>

                                    </FormDescription>
                                    <FormMessage className="text-end" />
                                </FormItem>

                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel></FormLabel>
                                    <FormControl>
                                        <div className="flex items-center relative">
                                            <Lock size={20} className="mx-3" />
                                            <Input
                                                type={passvisible ? "text" : "password"}
                                                placeholder="Password" {...field} />
                                            <div className=" p-2 rounded-sm hover:bg-slate-50 absolute right-2 cursor-pointer top-[50%] translate-y-[-50%]" onClick={() => {
                                                setpassvisible((prev) => {
                                                    return !prev;
                                                })
                                            }} >
                                                {passvisible ? <IoMdEyeOff /> : <IoMdEye />}
                                            </div>
                                        </div>
                                    </FormControl>
                                    <FormDescription>

                                    </FormDescription>
                                    <FormMessage className="text-end" />
                                </FormItem>

                            )}
                        />
                        <div className="px-2 flex justify-end w-full pb-4 flex-col">
                            <Link href={'/'} className="text-[13px] text-end hover:underline text-primary mb-3">Forgot Password?</Link>
                            <motion.button initial={{ y: 10, opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} whileTap={loading ? {} : { scale: 0.97 }} className="bg-primary text-white text-[13px] p-2 rounded-sm flex justify-center" type="submit">{loading ? <BiLoaderCircle /> : 'Submit'}</motion.button>
                        </div>
                    </motion.form>
                </Form>

            </div>
        </div>
    )
}