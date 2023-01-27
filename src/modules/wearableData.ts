
 export type WearableItem = {
    contract:string
    id:number
 } 

 export type Outfit = {
    wearables:WearableItem[]
 }


 // UPPER BODY
 export const upperBodyWearables =[
    {contract: "0x929450830e0a676181ca5ec3691169d0785e9d86", id:0},
    {contract: "0x64e98a568822bf15e3f38618ba50420e38b15579", id:0},
    {contract: "0x8635c40636c780bbb7bd9733c27885ad70e9d026", id:0},
 ]

 //LOWER BODY
 export const lowerBodyWearables =[
    {contract: "0x66194b1abcbfbedd83841775404b245c8f9e4183", id:0 },
    {contract: "0xbc23503f6db015add90212b0364aaa2a583bcbed", id:3 },
 ]

 // FEET / SHOES
 export const feetWearables =[
    {contract: "0xb9f484d26e3d5933609366d83dede663d1168df8", id:3 },    
    {contract: "0x4620c59e24d65821f5e4ca0029a78e2f393c287a", id:0},    
 ]

 // HAIR
 export const hairWearables =[
    {contract: "0x8103ed8b1140189a2703760fda37063d5f8259f3", id:0 },    
    {contract: "0xf623356625a5e663231a2d535e59f80d533d1c2b", id:1},    
 ]

// OUTFITS  - COMPLETE SETS
export const outfits:Outfit[] =[
    {   
        wearables:[ 
        {contract: "0x863e4c6825c95631aed5c61fc3e7f253ff529da9", id:0},   //hair 
        {contract: "0xf73e8be4f1ae8b1bca1110be4c3f4cb0e2398463", id:0},    //upper body
        {contract: "0x66194b1abcbfbedd83841775404b245c8f9e4183", id:0},    //lower body
        {contract: "0x4620c59e24d65821f5e4ca0029a78e2f393c287a", id:0},    //feet
        //...
    ]},
    {   
        wearables:[ 
        {contract: "0x8103ed8b1140189a2703760fda37063d5f8259f3", id:0 },   //hair 
        {contract: "0x929450830e0a676181ca5ec3691169d0785e9d86", id:0},    //upper body
        {contract: "0xbc23503f6db015add90212b0364aaa2a583bcbed", id:3},    //lower body
        {contract: "0xb9f484d26e3d5933609366d83dede663d1168df8", id:3},    //feet
        //...
    ]},
]
