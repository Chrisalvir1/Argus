import type{ArgusPanelConstructor,ArgusPanelHost}from'../../core/panel';

type UploadedFile={name:string;url?:string;size?:number};
type MediaPanel=ArgusPanelHost&{
 _uploadedFiles?:UploadedFile[];
 _panelBgFile?:string;
 _hubBgFile?:string;
 _renderUploadedFiles?:()=>void;
 _format?:(key:string,values:Record<string,string>)=>string;
};
type MediaPrototype=MediaPanel&{
 __argusMediaClient?:boolean;
 _loadUploadedFiles?:()=>Promise<void>;
 _deleteUploadedFile?:(filename:string)=>Promise<void>;
};

function authHeaders(panel:MediaPanel):Record<string,string>{
 const token=panel._hass?.auth?.accessToken;
 return token?{Authorization:`Bearer ${token}`}:{ };
}

export function applyMediaClient(C:ArgusPanelConstructor|undefined):void{
 const proto=C?.prototype as MediaPrototype|undefined;
 if(!proto||proto.__argusMediaClient)return;
 proto.__argusMediaClient=true;
 proto._loadUploadedFiles=async function(this:MediaPanel):Promise<void>{
  try{
   const response=await fetch('/api/argus/media',{headers:authHeaders(this),credentials:'same-origin'});
   if(!response.ok)throw new Error(`HTTP ${response.status}`);
   const payload=await response.json()as{files?:unknown};
   this._uploadedFiles=Array.isArray(payload.files)?payload.files as UploadedFile[]:[];
  }catch(error){console.error('Private Argus media listing failed',error);this._uploadedFiles=[]}
  this._renderUploadedFiles?.();
 };
 proto._deleteUploadedFile=async function(this:MediaPanel,filename:string):Promise<void>{
  try{
   const response=await fetch(`/api/argus/media/${encodeURIComponent(filename)}`,{method:'DELETE',headers:authHeaders(this),credentials:'same-origin'});
   if(!response.ok)throw new Error(`HTTP ${response.status}`);
   this._uploadedFiles=(this._uploadedFiles??[]).filter(file=>file.name!==filename);
   const bindings:[string,'_panelBgFile'|'_hubBgFile'][]=[['panel-bg-url-input','_panelBgFile'],['hub-bg-url-input','_hubBgFile']];
   for(const[id,property]of bindings){const field=this.shadowRoot.getElementById(id)as HTMLInputElement|null;if(field?.value.includes(`/${filename}?`)){field.value='';this[property]=''}}
   this._renderUploadedFiles?.();
  }catch(error){const detail=error instanceof Error?error.message:String(error);console.error('Private Argus media deletion failed',error);window.alert(this._format?.('delete_file_error',{error:detail})??detail)}
 };
}
