'use client'
import { motion } from 'framer-motion';
import DialogContainer from "@/components/reusable/DialogContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { VideoBookSectionsTable, VideoBookTable } from "@/db/schema/publicData"
import { useContext, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import SnackbarContext from "@/lib/Snackbar-context";
import { ChevronLeft, Edit2Icon, Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { AddNewSubject, DeleteSection } from '../sections/api';
import { getAllData } from './api';

export const Mentors = ({ data }: { data: typeof VideoBookSectionsTable.$inferSelect[] }) => {
    const [addDialogOpen, setaddDialogOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [value, setvalue] = useState('');
    const SnackbarCtx = useContext(SnackbarContext);
    const router = useRouter();
    const [mainData, setmainData] = useState<typeof VideoBookSectionsTable.$inferSelect[]>(data);
    const [Dtype, setDtype] = useState<'add' | 'edit'>('add');

    const [subjectsData, setsubjectsData] = useState(mainData.filter((d) => d.type == 'subject'))
    const [topicsData, setTopicsData] = useState(mainData.filter((d) => d.type == 'topic'))

    const [typestack, settypestack] = useState<string[]>([]);
    const [selectedId, setselectedId] = useState(-0);

    const handlesubmit = async () => {
        setLoading(true);
        const result = await AddNewSubject({
            type: 'programme',
            title: value,
            parent: 0
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
        setmainData([]);
        setsubjectsData([]);
        const d = await getAllData();
        if (d != null) {
            console.log(d)
            setmainData(d);
        }
    }
    return <div className="screen mx-auto relative">
        <h3 className="font-bold text-[30px]">Programme Mentors</h3>
        <motion.div initial={{
            opacity: 0,
            x: 10,
            pointerEvents: 'none'
        }} animate={{
            opacity: 1,
            x: 0,
            pointerEvents: 'all'
        }} exit={{
            opacity: 0,
            pointerEvents: 'none'
        }} className="bg-white w-full p-3 rounded-md absolute z-10 top-[60px] left-0 right-0">
            <div className="flex justify-between p-1 items-center ">
                <div className='flex items-center'>
                    <div>
                        <h1 className='font-bold text-[20px]'>{typestack.join(' / ')}</h1>
                        <h4>All Programme Mentors</h4>
                    </div>
                </div>
                <Button onClick={() => {
                    setDtype('add');
                    setaddDialogOpen(true);
                }}>
                    <IoMdAdd className="text-white text-[20px]" />
                    Add New Mentor
                </Button>

            </div>
            <hr />
            {
                mainData.length == 0 && <h3 className="bg-secondary p-3 text-black">No Mentors Added</h3>
            }
            <div className="grid grid-cols-1 gap-1 mt-3 max-h-[500px] h-full overflow-y-scroll">
                {
                    mainData.map((d, index) => {
                        return <motion.div onClick={() => {
                        }} whileTap={{ scale: 0.99 }} className="border-slate-200 hover:bg-black/10 border-[0.01rem] rounded-sm p-4 flex justify-between" key={index}>
                            <h3 className="text-black font-bold">{d.title}</h3>
                            <div>
                                <div className="flex gap-2 items-center">
                                    <Edit2Icon />
                                    <Trash2Icon onClick={() => handledelete(d.id)} />
                                </div>
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </motion.div>
    
        <DialogContainer setOpen={setaddDialogOpen} title={`Add New Mentor`} open={addDialogOpen} >
            <Input disabled={loading} placeholder="Enter a name" onChange={(e) => setvalue(e.target.value)} />
            <div className="flex justify-end w-full mt-4">
                <Button onClick={handlesubmit} disabled={loading} >
                    Add
                </Button>
            </div>
        </DialogContainer>
    </div>
}