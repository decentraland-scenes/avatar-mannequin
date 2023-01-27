import { 
    WearableItem,
    upperBodyWearables,
    lowerBodyWearables,
    feetWearables,
    hairWearables,
    outfits,
    Outfit
 } from "./wearableData"

class WearableChooser {
    wearableArray:WearableItem[]
    currentIndex:number = 0
    buttonLeft:Entity
    buttonRight:Entity    
    mannequin:AvatarMannequin
    category:string
    name:string

    constructor(offset:Vector3, parentAvatar:Entity, wearableData:WearableItem[], mannequinRef:AvatarMannequin, category:string, niceName:string){

        this.category = category
        this.name = niceName
        this.mannequin = mannequinRef
        
        this.wearableArray = []
        this.wearableArray = wearableData

        // clickable arrow for stepping to the next wearable
        this.buttonRight = new Entity()
        this.buttonRight.addComponent(new Transform({
            position: new Vector3(offset.x, offset.y, offset.z)
        }))
        this.buttonRight.addComponent(new GLTFShape("models/arrow.glb"))
        this.buttonRight.setParent(parentAvatar)
        this.buttonRight.addComponent(new OnPointerDown(()=>{
            this.getToNextWearable(true)
        },{hoverText: ("Next " + this.name)}))

         // clickable arrow for stepping to the previous wearable
        this.buttonLeft = new Entity()
        this.buttonLeft.addComponent(new Transform({
            position: new Vector3(-offset.x, offset.y, offset.z),
            scale: new Vector3(-1, 1, 1)
        }))
        this.buttonLeft.addComponent(new GLTFShape("models/arrow.glb"))
        this.buttonLeft.setParent(parentAvatar)
        this.buttonLeft.addComponent(new OnPointerDown(()=>{
            this.getToNextWearable(false)
        },{hoverText: ("Previous " + this.name)}))

    }    

    async getToNextWearable(right:boolean){            
                
        if(right){
            if(this.wearableArray.length > 0){
                if (this.currentIndex + 1 > this.wearableArray.length-1){
                    this.currentIndex = 0
                }
                else {
                    this.currentIndex ++
                }                     
            }
    
        }else{
            if (this.currentIndex - 1 < 0){
                this.currentIndex = this.wearableArray.length-1
            }
            else {
                this.currentIndex--
            }
        }

        this.mannequin.applyWearable(this.wearableArray[this.currentIndex])        
    }   
}


class OutfitChooser {
    outFitArray:Outfit[]
    currentIndex:number = 0
    buttonLeft:Entity
    buttonRight:Entity    
    mannequin:AvatarMannequin
    name:string
    

    constructor(offset:Vector3, parentAvatar:Entity, outfitData:Outfit[], mannequinRef:AvatarMannequin,){

        this.name = "Outfit"
        this.mannequin = mannequinRef
        
        this.outFitArray = []
        this.outFitArray = outfitData

        // clickable arrow for stepping to the next wearable
        this.buttonRight = new Entity()
        this.buttonRight.addComponent(new Transform({
            position: new Vector3(offset.x, offset.y, offset.z)
        }))
        this.buttonRight.addComponent(new GLTFShape("models/arrow.glb"))
        this.buttonRight.setParent(parentAvatar)
        this.buttonRight.addComponent(new OnPointerDown(()=>{
            this.getToNextOutfit(true)
        },{hoverText: ("Next " + this.name)}))

         // clickable arrow for stepping to the previous wearable
        this.buttonLeft = new Entity()
        this.buttonLeft.addComponent(new Transform({
            position: new Vector3(-offset.x, offset.y, offset.z),
            scale: new Vector3(-1, 1, 1)
        }))
        this.buttonLeft.addComponent(new GLTFShape("models/arrow.glb"))
        this.buttonLeft.setParent(parentAvatar)
        this.buttonLeft.addComponent(new OnPointerDown(()=>{
            this.getToNextOutfit(false)
        },{hoverText: ("Previous " + this.name)}))

    }    

    async getToNextOutfit(right:boolean){            
                
        if(right){
            if(this.outFitArray.length > 0){
                if (this.currentIndex + 1 > this.outFitArray.length-1){
                    this.currentIndex = 0
                }
                else {
                    this.currentIndex ++
                }                     
            }
    
        }else{
            if (this.currentIndex - 1 < 0){
                this.currentIndex = this.outFitArray.length-1
            }
            else {
                this.currentIndex--
            }
        } 

        this.mannequin.applyOutfit(this.outFitArray[this.currentIndex])
        
    }   
}

export class AvatarMannequin {
   
    upperBodyChooser:WearableChooser
    lowerBodyChooser:WearableChooser
    feetChooser:WearableChooser
    hairChooser:WearableChooser
    outfitChooser:OutfitChooser

    avatarRoot:Entity = new Entity()
    avatarShape:AvatarShape

    upperBody:string
    lowerBody:string
    feet:string
    hair:string
    eyes:string
    eyebrows:string
    mouth:string
    accessory:string
    outfit:string[]


    constructor(){
        

        this.upperBody = "urn:decentraland:off-chain:base-avatars:f_sweater"
        this.lowerBody = "urn:decentraland:off-chain:base-avatars:f_jeans"
        this.feet = "urn:decentraland:off-chain:base-avatars:bun_shoes"
        this.hair = "urn:decentraland:off-chain:base-avatars:standard_hair"
        this.eyes = "urn:decentraland:off-chain:base-avatars:f_eyes_01"
        this.eyebrows = "urn:decentraland:off-chain:base-avatars:f_eyebrows_00"
        this.mouth = "urn:decentraland:off-chain:base-avatars:f_mouth_01"
        this.accessory = ""
        this.outfit = []

        const TEST_AVATAR_WEARABLES = [
            
            "urn:decentraland:off-chain:base-avatars:f_sweater",
            "urn:decentraland:off-chain:base-avatars:f_jeans",
            "urn:decentraland:off-chain:base-avatars:bun_shoes",
            "urn:decentraland:off-chain:base-avatars:standard_hair",
            "urn:decentraland:off-chain:base-avatars:f_eyes_01",
            "urn:decentraland:off-chain:base-avatars:f_eyebrows_00",
            "urn:decentraland:off-chain:base-avatars:f_mouth_01"             
                    
          ]
               
        this.avatarShape = new AvatarShape()       
        this.avatarRoot.addComponent(new Transform({
            position: new Vector3( 16,-0.8, 16),
            scale: new Vector3(2,2,2)
        }))

        this.avatarShape.bodyShape = "urn:decentraland:off-chain:base-avatars:BaseFemale"
        this.avatarShape.wearables = TEST_AVATAR_WEARABLES
        this.avatarShape.skinColor = Color4.FromHexString("#FFCB4C00")
        this.avatarShape.name = "Mannequin"
        this.avatarRoot.addComponent(this.avatarShape)
        engine.addEntity( this.avatarRoot)       

        this.upperBodyChooser = new WearableChooser(
            new Vector3(-0.75,2,0),
            this.avatarRoot,
            upperBodyWearables,
            this,
            "upper_body",
            "Upper Body"
            )

        this.lowerBodyChooser = new WearableChooser(
            new Vector3(-0.75,1.5,0),
            this.avatarRoot,
            lowerBodyWearables,
            this,
            "lower_body",
            "Lower Body"
            )   

        this.feetChooser = new WearableChooser(
            new Vector3(-0.75,1.0,0),
            this.avatarRoot,
            feetWearables,
            this,
            "feet",
            "Footwear"
            ) 

        this.hairChooser = new WearableChooser(
            new Vector3(-0.75,2.5,0),
            this.avatarRoot,
            hairWearables,
            this,
            "hair",
            "HairStyle"
            )      

        this.outfitChooser = new OutfitChooser(
            new Vector3(-1.2, 1.8, 0),
            this.avatarRoot,
            outfits,
            this,            
            )           

    }

    updateWearables(){

        log("updating wearables" + [
            this.upperBody, 
            this.lowerBody,
            this.feet, 
            this.hair, 
            this.eyes, 
            this.eyebrows, 
            this.mouth, 
            this.accessory
        ])
        this.avatarShape.wearables = [
            this.upperBody, 
            this.lowerBody,
            this.feet, 
            this.hair, 
            this.eyes, 
            this.eyebrows, 
            this.mouth, 
           // this.accessory
        ]
    }

    
    changeWearable(wearable:WearableItem, category:string){

        let wearableUrn = ("urn:decentraland:matic:collections-v2:" + wearable.contract + ":" + wearable.id )

        log("changing :" +  wearable.contract + ":" + wearable.id + "  which is a : " + category   )
        switch(category){

            case "upper_body": { 
                this.upperBody = wearableUrn
                break;
            }
            case "lower_body": { 
                this.lowerBody = wearableUrn
                break;
            }
            case "feet": { 
                this.feet = wearableUrn
                break;
            }
            case "hair": { 
                this.hair = wearableUrn
                break;
            }
        }
    }

    async applyWearable(wearableItem:WearableItem){
        
        let callUrl = ("https://nft-api.decentraland.org/v1/items?contractAddress=" + wearableItem.contract + "&itemId=" + wearableItem.id)

        try {
            let response = await fetch(callUrl)
            let json = await response.json()         
                
            this.changeWearable(wearableItem, json.data[0].data.wearable.category)
            this.updateWearables()
        
        } catch {
            log("failed to check wearable on given URL")
        }
        
    }

    async applyOutfit(outfit:Outfit){
        let callUrl = ("https://nft-api.decentraland.org/v1/items?")

        for(let i=0; i < outfit.wearables.length; i++ ){
            callUrl = callUrl.concat( "&contractAddress=" + outfit.wearables[i].contract )
           // log("contract: " + outfit.wearables[i].contract + " id: " +  outfit.wearables[i].id )
        }
        //log("callURL: " + callUrl)

        try {
            let response = await fetch(callUrl)
            let json = await response.json()         
            //log("longreturn:")
            //log(json) 

            for(let i=0; i < json.data.length; i++){
                //log( "outfit data: " + json.data[i].contractAddress + ", id: " +  json.data[i].itemId )
                
                //check against each contract address in the outfit array and filter the right itemID from the contract
                for(let j=0; j<outfit.wearables.length; j++ ){
                   
                    if( outfit.wearables[j].contract == json.data[i].contractAddress && outfit.wearables[j].id == json.data[i].itemId ){

                       // log("FOUND MATCHING ADDRESS + ID: "  +json.data[i].contractAddress + ", id: " + json.data[i].itemId )
                        this.changeWearable({contract: json.data[i].contractAddress, id:  json.data[i].itemId}, json.data[i].data.wearable.category)
                    }
                }               
            }
            
            this.updateWearables()
        
        } catch {
            log("failed to check wearable on given URL")
        }        
    }

    

}