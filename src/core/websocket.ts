import type {HomeAssistant} from './home-assistant';

export type AlarmAction='arm_home'|'arm_away'|'arm_night'|'arm_vacation'|'disarm'|'sos';
export type ArgusMode='disarmed'|'home'|'away'|'night'|'vacation';
export type IncidentAction='confirm'|'false_alarm'|'silence_siren'|'resolve';
export type JsonObject=Record<string,unknown>;
export interface EntryScoped{entry_id:string}
export interface ArgusProfile{id:string;name:string;role:'admin'|'standard';enabled?:boolean;permissions?:Record<string,boolean>;shared_kiosk_profile?:boolean}
export interface ArgusEntity{entity_id:string;name:string;domain:string;device_class?:string|null;state:string;area?:string|null;icon?:string|null;device_id?:string|null}
export interface ArgusEntry{entry_id:string;title:string;entity_id?:string|null;state:string;attributes:JsonObject;pin_configured:boolean;user_pin_configured:boolean}
export interface DashboardResponse{entry_id:string;entries:ArgusEntry[];current_profile?:ArgusProfile|null;ui:JsonObject;available_entities:ArgusEntity[]}
export interface EntryListResponse{entries:Array<Pick<ArgusEntry,'entry_id'|'title'|'entity_id'|'state'>>}
export interface LoginUser{id:string;name:string;role:'admin'|'standard';shared_kiosk_profile:boolean;access_pin_configured:boolean;is_own_profile:boolean;picture?:string|null;online:boolean}
export interface LoginBootstrapResponse{configuration_missing?:boolean;first_run:boolean;legacy_claim_needed:boolean;users:LoginUser[];has_active_session:boolean;active_argus_user_id?:string|null;ha_user_id:string;background_mode?:string;background_images?:unknown[];user_theme?:{background_mode:string;background_file:string}}

export interface ArgusRequestMap{
 'argus/list_entries':Record<never,never>;
 'argus/dashboard':EntryScoped;
 'argus/login_bootstrap':EntryScoped;
 'argus/complete_first_run':EntryScoped&{admin_name:string;master_pin?:string;access_pin?:string};
 'argus/claim_legacy_administration':EntryScoped;
 'argus/verify_access_pin':EntryScoped&{argus_user_id:string;pin:string};
 'argus/select_profile':EntryScoped&{argus_user_id:string};
 'argus/logout_profile':EntryScoped;
 'argus/perform_alarm_action':EntryScoped&{action:AlarmAction;code?:string};
 'argus/get_ha_users':EntryScoped;
 'argus/get_ha_persons':EntryScoped;
 'argus/save_user_access_pin':EntryScoped&{argus_user_id:string;pin:string};
 'argus/sync_presence_rules':EntryScoped&{rules:unknown[]};
 'argus/verify_master_pin_for_screen_unlock':{entry_id:string;pin:string};
 'argus/save_ui':EntryScoped&JsonObject;
 'argus/get_mode_config':EntryScoped;
 'argus/save_mode_config':EntryScoped&{mode:ArgusMode;entity_id?:string;config:JsonObject};
 'argus/get_audit_log':EntryScoped;
 'argus/get_forensic_timeline':EntryScoped&{limit?:number};
 'argus/get_stats':EntryScoped;
 'argus/clear_audit_log':EntryScoped;
 'argus/export_config':EntryScoped;
 'argus/restore_config':EntryScoped&{config:JsonObject};
 'argus/save_advanced_config':EntryScoped&{config:JsonObject};
 'argus/get_advanced_config':EntryScoped;
 'argus/get_media_players':EntryScoped;
 'argus/update_master_pin':{entry_id:string;pin:string;current_pin?:string};
 'argus/update_incident':EntryScoped&{incident_id:string;action:IncidentAction;reason?:string};
 'argus/get_health':EntryScoped;
 'argus/import_alarmo':EntryScoped&{alarmo_data:JsonObject};
}

export interface ArgusResponseMap{
 'argus/list_entries':EntryListResponse;
 'argus/dashboard':DashboardResponse;
 'argus/login_bootstrap':LoginBootstrapResponse;
 'argus/get_mode_config':Record<string,JsonObject>;
 'argus/get_audit_log':{log:unknown[]};
 'argus/get_forensic_timeline':{timeline:unknown[]};
 'argus/get_stats':{total_events:number;triggers_30d:number;armings_30d:number;top_sensors:Record<string,number>};
 'argus/export_config':{config:JsonObject};
 'argus/get_advanced_config':JsonObject;
 'argus/get_media_players':Array<{entity_id:string;name:string}>;
 'argus/get_health':{readiness_score:number;status:string;issues:unknown[];recommendations:unknown[]};
 'argus/save_ui':{saved:true;ui:JsonObject};
 'argus/save_mode_config':{success:true;modes:Record<string,JsonObject>};
 'argus/restore_config':{success:true;ui:JsonObject};
 'argus/import_alarmo':{success:true;preview:JsonObject;ui:JsonObject};
 'argus/complete_first_run':{success:true};
 'argus/claim_legacy_administration':{success:true};
 'argus/verify_access_pin':{success:true};
 'argus/select_profile':{success:true};
 'argus/logout_profile':{success:true};
 'argus/perform_alarm_action':{success:true};
 'argus/get_ha_users':{ha_users:Array<{id:string;name:string;is_admin:boolean}>};
 'argus/get_ha_persons':{ha_persons:Array<{entity_id:string;name:string;user_id?:string|null}>};
 'argus/save_user_access_pin':{success:true};
 'argus/sync_presence_rules':{success:true};
 'argus/verify_master_pin_for_screen_unlock':{success:true};
 'argus/clear_audit_log':{cleared:true};
 'argus/save_advanced_config':{success:true};
 'argus/update_master_pin':{success:true};
 'argus/update_incident':{success:true;incident:JsonObject};
}

export type ArgusCommand=keyof ArgusRequestMap;
export type ArgusResponse<K extends ArgusCommand>=K extends keyof ArgusResponseMap?ArgusResponseMap[K]:{success:true};

export async function sendArgus<K extends ArgusCommand>(hass:HomeAssistant,type:K,payload:ArgusRequestMap[K]):Promise<ArgusResponse<K>>{
 return hass.callWS<ArgusResponse<K>>({type,...payload});
}
