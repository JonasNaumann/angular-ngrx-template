import { BaseEntity } from 'src/app/core/models/base-entity';

export interface User extends BaseEntity {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePicture?: string;
}
