'use client';

import { Input } from "@/components/ui/input";
import { VideoBookSectionsTable } from "@/db/schema/publicData";
import { useEffect, useState } from "react";
import { GetallData, NumberofEpisodes } from "./api";
import { Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { setErrorMap } from "zod";

export const AddForm = () => {

    const [loading, setloading] = useState(false);
    const [mdata, setmdata] = useState<typeof VideoBookSectionsTable.$inferSelect[]>([]);
    const [filterTopics, setfilterTopics] = useState<typeof VideoBookSectionsTable.$inferSelect[]>([]);
    const getAlldata =  async () => {
        setloading(true);
        const d = await GetallData();
        setmdata(d)
        setloading(false);
    }
    useEffect(()=>{
        getAlldata();
    },[]);

    const [selectedSubject, setselectedSubject] = useState(0)
    const [selectedTopic, setselectedTopic] = useState(0)
    const [episodenumber, setepisodenumber] = useState(0);
    const [selectedProgramme, setselectedProgramme] = useState(0);
    const [title, settitle] = useState('');
    const [link, setlink] = useState('');

    useEffect(()=>{
        var data = mdata.filter((item)=>item.parent==selectedSubject);
        setfilterTopics(data);
    },[selectedSubject]);
    
    useEffect(()=>{
        cge();
    },[selectedTopic]);

    const cge =  async () => {
        var nu= 0;
        nu = await NumberofEpisodes(selectedTopic);
        nu = nu+1;
        setepisodenumber(nu);
    }
    return <div className="screen">
        <h3 className="text-[25px] font-bold">Add New Episode</h3>
        <div className="bg-white p-3 gap-3 rounded-md mt-3">
        <h3 className="font-bold text-[20px]">Episode Number : {episodenumber}</h3>
        <div className="flex w-full gap-3 mt-2">
                <div className="flex flex-col gap-1 w-full">
                    <span>Subject</span>
                    {
                        loading != true ? <select className="p-2 border-[0.01rem] border-zinc-200 outline-none rounded-sm" name="" id="" value={selectedSubject} onChange={(e)=>setselectedSubject(parseInt(e.target.value))}>
                            <option value={0}>Select a subject</option>
                        {
                            mdata.map((item,index)=>item.type =='subject' ? <option value={item.id} key={index}>{item.title}</option> : '')
                        }
                                        </select> : <Loader2Icon className="animate-spin" />
                    }
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <span>Topic</span>
                    {
                        loading != true ? <select className="p-2 border-[0.01rem] border-zinc-200 outline-none rounded-sm" name="" id="" value={selectedTopic} onChange={(e)=>setselectedTopic(parseInt(e.target.value))}>
                            <option value={0}>Select a topic</option>
                        {
                            mdata.map((item,index)=>item.type =='topic'  && item.parent==selectedSubject ? <option value={item.id} key={index}>{item.title}</option> : '')
                        }
                                        </select> : <Loader2Icon className="animate-spin" />
                    }
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <span>Mentor</span>
                    {
                        loading != true ? <select className="p-2 border-[0.01rem] border-zinc-200 outline-none rounded-sm" name="" id="" value={selectedProgramme} onChange={(e)=>setselectedProgramme(parseInt(e.target.value))}>
                            <option value={0}>Select a mentor</option>
                        {
                            mdata.map((item,index)=>item.type =='programme' ? <option value={item.id} key={index}>{item.title}</option> : '')
                        }
                                        </select> : <Loader2Icon className="animate-spin" />
                    }
                </div>
            </div>
            <div className="flex w-full gap-3 mt-3">
                <div className="flex flex-col gap-1 w-full">
                    <span>Title</span>
                    <Input placeholder='Enter a Title' />
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <span>Link</span>
                    <Input placeholder='Enter Link' />
                </div>
            </div>
            <div className="flex justify-end mt-4">
                <Button >
                    Add New 
                </Button>
            </div>
        </div>
    </div>
}