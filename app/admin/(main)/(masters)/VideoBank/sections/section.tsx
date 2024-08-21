'use client'
import { motion } from 'framer-motion';
import DialogContainer from "@/components/reusable/DialogContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { VideoBookSectionsTable, VideoBookTable } from "@/db/schema/publicData"
import { useContext, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { AddNewSubject, DeleteSection, EditSubject, getAllData } from "./api";
import SnackbarContext from "@/lib/Snackbar-context";
import { ArrowRightCircle, ChevronLeft, ChevronRight, Edit2Icon, Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";

export const VideoBookSection = ({ data }: { data: typeof VideoBookSectionsTable.$inferSelect[] }) => {
    const [addDialogOpen, setaddDialogOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [value, setvalue] = useState('');
    const SnackbarCtx = useContext(SnackbarContext);
    const router = useRouter();
    const [mainData, setmainData] = useState<typeof VideoBookSectionsTable.$inferSelect[]>(data);
    const [Dtype, setDtype] = useState<'add' | 'edit'>('add');

    const [subjectsData, setsubjectsData] = useState(mainData.filter((d) => d.type == 'subject'))
    const [topicsData, setTopicsData] = useState(mainData.filter((d) => d.type == 'topic'))

    const [selectedType, setselectedType] = useState<'subject' | 'topic' | 'programme'>('subject');
    const [typestack, settypestack] = useState<string[]>([]);
    const [selectedId, setselectedId] = useState(-0);
    const [itemId, setitemId] = useState(0);

    const handleEdit = (id:number,text:string) =>{
        setDtype('edit');
        setvalue(text);
        setitemId(id)
        setaddDialogOpen(true)
    }  
    const EdittoServer = async() =>{
        setLoading(true);
        const result = await EditSubject({
            id:itemId,
            text: value,
        });
        // itemIdsetLoading(false)
        await refresh();
        setLoading(false);
        setaddDialogOpen(false);
        if (result) {
            SnackbarCtx.displayMsg('Edited Succesfully');
        } 
    }
    const handlesubmit = async () => {
        setLoading(true);
        const result = await AddNewSubject({
            type: selectedType,
            title: value,
            parent: selectedId
        });
        setLoading(false)
        await refresh();
        if (result) {
            setaddDialogOpen(false);
            SnackbarCtx.displayMsg('Added Succesfully');
        } else {
            SnackbarCtx.displayMsg('Already Added!');
        }

    }
    const handledelete = async (id: number) => {
        setLoading(true);
        const result = await DeleteSection({
            id: id
        });
        setLoading(false)
        if (result) {
            setaddDialogOpen(false);
            SnackbarCtx.displayMsg('Deleted Succesfully');
        } else {
            SnackbarCtx.displayMsg('Already Deleted!');
        }
        await refresh();
        router.refresh();
    }
    const refresh = async () => {
        router.push('/admin/VideoBank/sections')
        setmainData([]);
        setsubjectsData([]);
        const d = await getAllData();
        if (d != null) {
            console.log(d)
            setmainData(d);
            setTopicsData(d.filter((item) => item.parent == selectedId));
            setsubjectsData(d.filter((d) => d.type == 'subject'));
        }
    }
    return <div className="screen mx-auto relative px-4">
        <h3 className="font-bold text-[30px]">VideoBook Sections</h3>
        <motion.div initial={{
            opacity: 0,
            x: 10,
            pointerEvents: 'none'
        }} animate={selectedType == 'subject' ? {
            opacity: 1,
            x: 0,
            pointerEvents: 'all'
        } : {}} exit={{
            opacity: 0,
            pointerEvents: 'none'
        }} className="bg-white w-full p-3 rounded-md absolute z-10 top-[60px] left-0 right-0">
            <div className="flex justify-between p-1 items-center ">
                <h4>All Subjects</h4>
                <Button onClick={() => {
                    setDtype('add');
                    setaddDialogOpen(true);
                }}>
                    <IoMdAdd className="text-white text-[20px]" />
                    Add New Subject
                </Button>

            </div>
            <hr />
            {
                subjectsData.length == 0 && <h3 className="bg-secondary p-3 text-black">No Subjects Added</h3>
            }
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 mt-3 max-h-[500px] h-full overflow-y-scroll">
                {
                    subjectsData.map((d, index) => {
                        return <motion.div className="border-slate-300 relative hover:bg-zinc-100 border-[0.01rem] rounded-xl p-2 flex justify-between items-center" key={index}>
                            <h3 className="text-black font-bold p-2">{d.title}</h3>
                            <div>
                                <div className="flex gap-2 items-center">
                                    <motion.div whileTap={{ scale: 0.9 }} className='p-2 relative z-[20]' onClick={() => handleEdit(d.id,d.title)} >
                                        <Edit2Icon />
                                    </motion.div>
                                    <motion.div whileTap={{ scale: 0.9 }} className='p-2 relative z-[20]' onClick={() => handledelete(d.id)} >
                                        <Trash2Icon className='' />
                                    </motion.div>
                                    <motion.div onClick={() => {
                                        setselectedId(d.id);
                                        setTopicsData(mainData.filter((item) => item.parent == d.id));
                                        setselectedType('topic');
                                        settypestack((prev) => [...prev, d.title]);
                                    }} whileTap={{ scale: 0.9 }} className='p-2 relative z-[20]'>
                                        <ArrowRightCircle className='' />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </motion.div >
        <motion.div initial={{
            opacity: 0,
            x: 10,
            pointerEvents: 'none'
        }} animate={selectedType == 'topic' ? {
            opacity: 1,
            x: 0,
            pointerEvents: 'all'
        } : {}} exit={{
            opacity: 0,
            pointerEvents: 'none'
        }} className="bg-white w-full p-3 rounded-md absolute z-10 top-[60px] left-0 right-0">
            <div className="flex justify-between p-1 items-center ">
                <div className='flex items-center'>
                    <ChevronLeft size={40} onClick={() => {
                        settypestack((prev) => prev.slice(0, prev.length - 2))
                        setselectedType('subject')
                        setselectedId(0);
                    }} className='p-2 rounded-full hover:black/10' />
                    <div>
                        <h1 className='font-bold text-[20px]'>{typestack.join(' / ')}</h1>
                        <h4>All Topics</h4>
                    </div>
                </div>
                <Button onClick={() => {
                    setDtype('add');
                    setaddDialogOpen(true);
                }}>
                    <IoMdAdd className="text-white text-[20px]" />
                    Add New Topic
                </Button>

            </div>
            <hr />
            {
                topicsData.length == 0 && <h3 className="bg-secondary p-3 text-black">No Topics Added</h3>
            }
            <div className="grid grid-cols-1 gap-1 mt-3 max-h-[500px] h-full overflow-y-scroll">
                {
                    topicsData.map((d, index) => {
                        return <motion.div onClick={() => {
                            setselectedId(d.id);
                            setselectedType('topic');
                        }} whileTap={{ scale: 0.995 }} className="border-slate-200 hover:bg-black/10 border-[0.01rem] rounded-sm p-4 flex justify-between" key={index}>
                            <h3 className="text-black font-bold">{d.title}</h3>
                            <div>
                                <div className="flex gap-2 items-center">
                                    <Edit2Icon className='relative z-[20]' />
                                    <Trash2Icon className='relative z-[20]' onClick={() => handledelete(d.id)} />
                                </div>
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </motion.div>

        <DialogContainer setOpen={setaddDialogOpen} title={Dtype == 'add' ? `Add New ${selectedType}` : `Edit ${selectedType}`} open={addDialogOpen} >
            <Input disabled={loading} placeholder="Enter a name" value={value} onChange={(e) => setvalue(e.target.value)} />
            <div className="flex justify-end w-full mt-4">
                <Button onClick={Dtype == 'add' ? handlesubmit : EdittoServer} disabled={loading} >
                    {Dtype =='add' ? 'Add' : 'Save'}
                </Button>
            </div>
        </DialogContainer>
    </div >
}