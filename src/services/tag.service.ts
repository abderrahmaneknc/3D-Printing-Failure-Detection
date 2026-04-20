import {prisma} from "../../lib/prisma";
import { Prisma } from "@prisma/client";



export const createTag=(data: Prisma.TagCreateInput)=>{
    return prisma.tag.create({data})
}


export const getTags =()=>{
    return prisma.tag.findMany({
        include:{
            printers:{include:{printer:true}}
        }
    })
}

export const getTagById = (id: string) => {
  return prisma.tag.findUnique({
    where: { id },
    include: { printers: { include: { printer: true } } },
  });
};

export const updateTag =async (id: string, data: Prisma.TagUpdateInput) => {
  const tag = await prisma.tag.findUnique({ where: { id } });
  if (!tag)throw new Error("Tag not found"); 
  await prisma.tag.update({
    where: { id },
    data,
  });
  return prisma.tag.findUnique({
    where: { id },
    include: { printers: { include: { printer: true } } },
  });

  
};



export const deleteTag = async (id: string) => {
  const tag = await prisma.tag.findUnique({ where: { id } });
  if (!tag) throw new Error("Tag not found");

  await prisma.printerTag.deleteMany({ where: { tagId: id } });

  return prisma.tag.delete({ where: { id } });
};