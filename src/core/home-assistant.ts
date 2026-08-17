export type HassEntityId = `${string}.${string}`;

export interface HassEntityState {
  entity_id: HassEntityId;
  state: string;
  attributes: Readonly<Record<string, unknown>>;
  last_changed?: string;
  last_updated?: string;
}

export interface HassUser {
  id?: string;
  name?: string;
  is_admin?: boolean;
}

export interface HassAuth {
  accessToken?: string;
}

export interface HassConfig {
  latitude?: number;
  longitude?: number;
  language?: string;
  time_zone?: string;
}

export interface HomeAssistant {
  readonly states: Readonly<Record<string, HassEntityState>>;
  readonly user?: HassUser;
  readonly auth?: HassAuth;
  readonly config?: HassConfig;
  callWS<T>(message: Readonly<Record<string, unknown>>): Promise<T>;
  callService?(
    domain: string,
    service: string,
    data?: Readonly<Record<string, unknown>>,
  ): Promise<unknown>;
  navigate?(path: string): void;
}
