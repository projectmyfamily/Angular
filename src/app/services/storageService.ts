import { StorageKeys } from './storagekeys';
import { LocalUser } from './../model/localUser';
import { Injectable } from "@angular/core";


@Injectable()
export class StorageService{ 

    getLocalUser(): LocalUser{ 
        let usr = localStorage.getItem(StorageKeys.localUser)
        if(usr == null){ 
            return null
        }else{
            return JSON.parse(usr)
        }
    }

    setLocalUser(obj: LocalUser){ 
        if(obj == null){
            localStorage.removeItem(StorageKeys.localUser)
        }else{
            localStorage.setItem(StorageKeys.localUser, JSON.stringify(obj))
        }

    }

    getLocalMember(){ 
        let usr = localStorage.getItem(StorageKeys.localMember)
        if(usr == null){ 
            return null
        }else{
            return JSON.parse(usr)
        }
    }
    setLocalMember(obj: LocalUser){ 
        if(obj == null){
            localStorage.removeItem(StorageKeys.localMember)
        }else{
            localStorage.setItem(StorageKeys.localMember, JSON.stringify(obj))
        }

    }

    getArrayMember(){ 
        let usr = localStorage.getItem(StorageKeys.arrayMember)
        if(usr == null){ 
            return null
        }else{
            return JSON.parse(usr)
        }
    }
    setArrayMember(obj: LocalUser){ 
        if(obj == null){
            localStorage.removeItem(StorageKeys.arrayMember)
        }else{
            localStorage.setItem(StorageKeys.arrayMember, JSON.stringify(obj))
        }

    }

    getAny(){ 
        let usr = localStorage.getItem(StorageKeys.anyInfo)
        if(usr == null){ 
            return null
        }else{
            return JSON.parse(usr)
        }
    }
    setAny(obj: boolean){ 
        if(obj == null){
            localStorage.removeItem(StorageKeys.anyInfo)
        }else{
            localStorage.setItem(StorageKeys.anyInfo, JSON.stringify(obj))
        }

    }


}