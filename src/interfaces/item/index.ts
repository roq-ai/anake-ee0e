import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ItemInterface {
  id?: string;
  name: string;
  description?: string;
  found_by?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface ItemGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  found_by?: string;
  organization_id?: string;
}
