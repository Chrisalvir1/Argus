import type { HassEntityId } from '../core/home-assistant';
import type { ActionContext, ArgusAction, ArgusPermission } from './types';

export class ActionRegistry {
  private actions = new Map<string, ArgusAction<any, any>>();
  register<Input, Output>(action: ArgusAction<Input, Output>): () => void {
    if (this.actions.has(action.id)) throw new Error(`Argus action already registered: ${action.id}`);
    this.actions.set(action.id, action);
    return () => this.actions.delete(action.id);
  }
  get(id: string): ArgusAction | undefined { return this.actions.get(id); }
  list(): ArgusAction[] { return [...this.actions.values()]; }
  async execute<Input, Output>(id: string, input: Input, context: ActionContext): Promise<Output> {
    const action = this.actions.get(id) as ArgusAction<Input, Output> | undefined;
    if (!action) throw new Error(`Unknown Argus action: ${id}`);
    if (!context.permissions.has(action.permission)) throw new Error(`Permission denied: ${action.permission}`);
    const entityIds = typeof (input as any)?.entity_id === 'string' ? [(input as any).entity_id as HassEntityId] : undefined;
    const base = { actionId: id, actorId: context.actorId, entityIds, timestamp: new Date().toISOString() };
    context.audit?.({ type: 'action_started', ...base });
    try {
      const result = await action.execute(input, context);
      context.audit?.({ type: 'action_succeeded', ...base });
      return result;
    } catch (error) {
      context.audit?.({ type: 'action_failed', ...base, error: error instanceof Error ? error.message : String(error) });
      throw error;
    }
  }
}
